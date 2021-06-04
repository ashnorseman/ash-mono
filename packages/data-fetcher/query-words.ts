import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

import { IStandardWord } from './interfaces/i-word';
import { IWordRes } from './interfaces/i-word-res';

let queryResult: IStandardWord[] = [];

function sortQueryResult(book: number) {
  fs.writeFileSync(path.resolve(__dirname, `dist/standard/${book}-result.json`), JSON.stringify(queryResult), 'UTF-8');
}

function queryWord(word: string, book: number) {
  const queryUrl = `https://ja.dict.naver.com/api3/jako/search?query=${encodeURIComponent(word)}`;

  const req = https.request(queryUrl, async (res) => {
    let rawResponse = '';

    res.on('data', (data: Buffer) => {
      rawResponse += data.toString();
    });

    res.on('end', () => {
      const rawData: IWordRes = JSON.parse(rawResponse);
      const item = rawData.searchResultMap.searchResultListMap.WORD.items.find(
        (a) => !!a.searchPhoneticSymbolList?.length
      );

      if (!item) {
        return;
      }

      const soundPath = item.searchPhoneticSymbolList?.[0]?.phoneticSymbolPath;

      if (queryResult.find((q) => q.entry === item.entryId)) {
        return;
      }

      const savedWord: IStandardWord = {
        entry: item.entryId,
        handleEntry: item.handleEntry,
        word,
        hasSound: !!soundPath,
        meaning: item.meansCollector.map((item) => {
          return {
            partOfSpeech2: item.partOfSpeech2,
            means: item.means.map((mean) => {
              return {
                exampleOri: mean.exampleOri,
                exampleTrans: mean.exampleTrans,
                value: mean.value
              };
            })
          };
        })
      };

      const mp3File = path.resolve(__dirname, `dist/sounds/${savedWord.entry}.mp3`);

      if (!fs.existsSync(mp3File)) {
        https.get(soundPath, (res) => {
          const ws = fs.createWriteStream(mp3File);

          res.pipe(ws);

          ws.on('finish', () => {
            const savedSize = fs.statSync(mp3File).size;

            if (!savedSize) {
              fs.unlinkSync(mp3File);
              savedWord.hasSound = false;
            }

            queryResult.push(savedWord);

            sortQueryResult(book);

            ws.close();
          });
        });
      }
    });
  });

  req.on('error', (error) => console.error(error)).end();
}

function queryBook(book: number) {
  const saved = fs.readFileSync(path.resolve(__dirname, `dist/standard/${book}-result.json`), 'utf-8');

  queryResult = saved ? JSON.parse(saved) : [];

  const words = fs
    .readFileSync(path.resolve(__dirname, `./standard/${book}.txt`), 'utf-8')
    .trim()
    .split('\n');

  words.forEach((word) => {
    queryWord(word, book);
  });
}

queryBook(1);
