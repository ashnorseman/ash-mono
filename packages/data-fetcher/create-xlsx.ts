import * as exceljs from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';

import { ISavedWord } from './interfaces/i-saved-word';

const folder = path.resolve(__dirname, 'dist/pos');
const workbook = new exceljs.Workbook();

function cleanText(text: string): string {
  return text.replace(/<[^>]+>/g, '');
}

function processPos(posName: string) {
  fs.readdirSync(folder).forEach((wordFile) => {
    if (wordFile !== posName + '.json') {
      return;
    }

    const words: ISavedWord[] = JSON.parse(fs.readFileSync(path.resolve(folder, wordFile), 'utf-8'));

    workbook.addWorksheet(posName);

    const worksheet = workbook.getWorksheet(posName);

    worksheet.views = [
      {
        state: 'frozen',
        ySplit: 1
      }
    ];

    worksheet.columns = [
      {
        header: `Entry (${words.length})`,
        key: 'entry_name',
        width: 15
      },
      {
        header: 'Pron',
        key: 'pron',
        width: 15
      },
      {
        header: '',
        key: 'accent_note',
        width: 2.5
      },
      {
        header: 'Meaning',
        key: 'means',
        width: 100
      }
    ];

    words.forEach((word) => {
      const values: string[] = [
        word.kanji || word.entry_name,
        word.kanji ? word.entry_name : '',
        (word.accent_note || '')[0] || ''
      ];

      const means: string[] = [];

      word.means = word.means.filter((m) => !!m.mean);

      if (word.means.length > 3) {
        word.means = word.means.filter((m) => m.examples && m.examples.length).slice(0, 3);
      }

      word.means.forEach((mean, i) => {
        const id = word.means.length > 1 ? i + 1 + '. ' : '';

        means.push(id + '【' + cleanText(mean.mean) + '】');

        if (mean.examples) {
          if (mean.examples.length > 1) {
            mean.examples = mean.examples.filter((i) => i.example && i.translation).slice(0, 1);
          }

          mean.examples.forEach((item) => {
            if (item.example) {
              means.push(cleanText(item.example));

              if (item.translation) {
                means.push(cleanText(item.translation));
              }
            }
          });
        }
      });

      values.push(means.join('\n'));

      worksheet.addRow(values);
    });

    worksheet.eachRow((row) => {
      row.font = {
        name: 'Pingfang SC',
        size: 12
      };

      row.getCell('entry_name').alignment = {
        vertical: 'top'
      };

      row.getCell('pron').alignment = {
        vertical: 'top'
      };

      row.getCell('accent_note').alignment = {
        vertical: 'top'
      };

      row.getCell('means').alignment = {
        vertical: 'top',
        wrapText: true
      };
    });
  });
}

[
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
].forEach((pos) => {
  processPos(pos);
});

console.log('Finished.');

workbook.xlsx.writeFile(path.resolve(__dirname, 'dist/Vocabulary.xlsx'));
