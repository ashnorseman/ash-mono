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

    worksheet.columns = [
      {
        header: 'Entry',
        key: 'entry_name'
      },
      {
        header: 'Kanji',
        key: 'kanji'
      },
      {
        header: 'Accent',
        key: 'accent_note'
      },
      {
        header: 'Meaning',
        key: 'means',
        width: 100
      }
    ];

    words.forEach((word) => {
      const values: string[] = [word.entry_name, word.kanji || '', word.accent_note || ''];
      const means: string[] = [];

      word.means.forEach((mean, i) => {
        if (mean.mean) {
          means.push(i + 1 + '. ' + cleanText(mean.mean));

          if (mean.examples) {
            mean.examples.forEach((item) => {
              if (item.example) {
                means.push(cleanText(item.example));

                if (item.translation) {
                  means.push(cleanText(item.translation));
                }
              }
            });
          }
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

      row.getCell('kanji').alignment = {
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
  '5단활용 자동사',
  '5단활용 자동사·타동사',
  '5단활용 타동사',
  '1단 자동사',
  '1단 자동사·타동사',
  '1단 타동사',
  'サ행변격 자동사',
  'サ행변격 자동사·타동사',
  'サ행변격 타동사',
  'ス자동사',
  'ス자동사·타동사',
  'ス타동사',
  'カ행변격 자동사',
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

workbook.xlsx.writeFile(path.resolve(__dirname, 'dist/vocabulary.xlsx'));
