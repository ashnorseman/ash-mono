import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

import { IJlptWord } from './interfaces/i-jlpt-word';
import { ISavedWord } from './interfaces/i-saved-word';

interface IEntryRes {
  entry: {
    means: Array<{
      origin_mean: string;
      examples: Array<{
        origin_example: string;
        translations: Array<{
          origin_translation: string;
        }>;
      }>;
      part: {
        part_ko_name: string;
      };
    }>;
    members: Array<{
      accent_note: string;
      entry_name: string;
      kanji: string;
      prons: Array<{
        male_pron_file: string;
        female_pron_file: string;
      }>;
    }>;
  };
}

async function queryWord(word: IJlptWord) {
  const file = path.resolve(__dirname, `dist/vocabulary/${word.id}.json`);

  if (fs.existsSync(file)) {
    return;
  }

  const queryUrl = `https://ja.dict.naver.com/api/platform/jako/entry?entryId=${encodeURIComponent(word.id)}`;

  try {
    const req = await axios.get<IEntryRes>(queryUrl, {
      timeout: 1000
    });

    const means = req.data.entry.means || [];
    const member = req.data.entry.members[0];

    if (!member) {
      console.error(`No entry found for ${word}.`);
      return;
    }

    member.accent_note = (member.accent_note || '').replace(/,/g, '');

    const res: ISavedWord = {
      kanji: member.kanji || '',
      entry_name: member.entry_name || '',
      accent_note: member.accent_note || '',
      pron_file: member.prons?.[0]?.female_pron_file || member.prons?.[0]?.male_pron_file || '',
      means: means.map((mean) => {
        return {
          pos: [mean.part?.part_ko_name || ''],
          mean: mean.origin_mean || '',
          examples: (mean.examples || []).map((item) => {
            return {
              example: item.origin_example,
              translation: item.translations?.[0].origin_translation || ''
            };
          })
        };
      })
    };

    console.log(`Saved: ${word.pron} ${word.entry}.`);

    fs.writeFileSync(file, JSON.stringify(res), 'UTF-8');
  } catch (e) {
    console.error(`Failed to fetch ${word.pron} ${word.entry} (${word.id}).`);
  }
}

async function queryAll() {
  const all: IJlptWord[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'dist/jlpt/jp-result.json'), 'utf-8'));

  for (const word of all) {
    await queryWord(word);
  }
}

queryAll().then();
