import * as fs from 'fs';
import * as path from 'path';

import { ISavedWord } from './interfaces/i-saved-word';

const file = path.resolve(__dirname, 'dist/jlpt/vocabulary.json');
const folder = path.resolve(__dirname, 'dist/vocabulary');

const words: ISavedWord[] = [];

fs.readdirSync(folder).forEach((wordFile) => {
  if (!wordFile.endsWith('json')) {
    return;
  }

  words.push(JSON.parse(fs.readFileSync(path.resolve(folder, wordFile), 'utf-8')));
});

fs.writeFileSync(file, JSON.stringify(words.sort((a, b) => a.entry_name.localeCompare(b.entry_name))));

const allPos = [
  '5자',
  '5자·타',
  '5타',
  '1자',
  '1자·타',
  '1타',
  'サ자',
  'サ자·타',
  'サ타',
  'ス자',
  'ス자·타',
  'ス타',
  'カ자',
  '형용사',
  '형용동사',
  '대명사',
  '명사',
  '부사',
  '접속사',
  '연체사',
  '감동사',
  '연어',
  '접두어',
  '접미어',
  '조수사',
  '-'
];

const sortedByPos: Map<string, ISavedWord[]> = new Map();

allPos.forEach((pos) => sortedByPos.set(pos, []));

words.forEach((w) => {
  const wordPos: Set<string> = new Set();

  w.means.forEach((p) => {
    if (p.pos) {
      p.pos.forEach((pp) => wordPos.add(pp));
    } else {
      wordPos.add('-');
    }
  });

  if (!wordPos.size) {
    return;
  }

  for (const p of wordPos) {
    sortedByPos.get(p)?.push({
      ...w,
      means: w.means.filter((i) => {
        if (i.pos) {
          return i.pos.includes(p);
        } else {
          return p === '-';
        }
      })
    });
  }
});

for (const pos of sortedByPos) {
  const key = pos[0];
  const value = pos[1];

  fs.writeFileSync(path.resolve(__dirname, `dist/pos/${key}.json`), JSON.stringify(value));
}

console.log(`${sortedByPos.size} created.`);
