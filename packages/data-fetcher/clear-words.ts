import * as fs from 'fs';
import * as path from 'path';

import { ISavedWord } from './interfaces/i-saved-word';

const folder = path.resolve(__dirname, 'dist/vocabulary');

fs.readdirSync(folder).forEach((wordFile) => {
  if (!wordFile.endsWith('json')) {
    return;
  }

  const word: ISavedWord = JSON.parse(fs.readFileSync(path.resolve(folder, wordFile), 'utf-8'));

  word.means.forEach((p) => {
    if (p.pos) {
      p.pos.forEach((pp, i) => {
        p.pos[i] = pp.replace(/[상하]/, '');
      });
    }
  });

  fs.writeFileSync(path.resolve(folder, `${wordFile}`), JSON.stringify(word));
});
