import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

import { IJlptListRes } from './interfaces/i-jlpt-list-res';
import { IJlptWord } from './interfaces/i-jlpt-word';

let queryResult: IJlptWord[] = [];

function sortQueryResult(level: number) {
  fs.writeFileSync(path.resolve(__dirname, `jp-${level}-result.json`), JSON.stringify(queryResult), 'UTF-8');
}

function queryLevel(level: number, page: number) {
  const queryUrl = `https://ja.dict.naver.com/api/jako/getJLPTList?level=${level}&part=%EC%A0%84%EC%B2%B4&page=${page}`;

  const req = https.request(queryUrl, async (res) => {
    let rawResponse = '';

    res.on('data', (data: Buffer) => {
      rawResponse += data.toString();
    });

    res.on('end', () => {
      const rawData: IJlptListRes = JSON.parse(rawResponse);

      console.log(`Level ${level}: Page ${page} of ${rawData.m_totalPage} finished.`);

      const result: IJlptWord[] = rawData.m_items.map((item) => {
        return {
          entry: item.entry,
          level: item.level,
          meaning: item.means?.join('; ') || '',
          pron: item.pron
        };
      });

      queryResult = [...queryResult, ...result];

      if (rawData.m_page !== rawData.m_totalPage) {
        queryLevel(level, rawData.m_page + 1);
      } else {
        console.log(`Print ${page} pages of level ${level}.`);
        sortQueryResult(level);
      }
    });
  });

  req.on('error', (error) => console.error(error)).end();
}

queryLevel(5, 1);
