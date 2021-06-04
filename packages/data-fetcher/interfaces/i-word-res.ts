export interface IWordRes {
  searchResultMap: {
    searchResultListMap: {
      WORD: {
        items: Array<{
          entryId: string;
          handleEntry: string;
          meansCollector: Array<{
            means: Array<{
              exampleOri: string;
              exampleTrans: string;
              value: string;
            }>;
            partOfSpeech2: string;
          }>;
          searchPhoneticSymbolList: Array<{
            phoneticSymbolPath: string;
          }>;
        }>;
      };
    };
  };
}
