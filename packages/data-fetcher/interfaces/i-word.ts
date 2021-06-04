export interface IStandardWord {
  entry: string;
  handleEntry: string;
  word: string;
  hasSound: boolean;
  meaning: Array<{
    means: Array<{
      exampleOri: string;
      exampleTrans: string;
      value: string;
    }>;
    partOfSpeech2: string;
  }>;
}
