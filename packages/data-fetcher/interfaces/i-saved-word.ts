export interface ISavedWord {
  entry_name: string;
  kanji?: string;
  accent_note?: string;
  pron_file?: string;
  means: Array<{
    pos: string[];
    mean: string;
    examples: Array<{
      example: string;
      translation: string;
    }>;
  }>;
}
