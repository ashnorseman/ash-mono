import { AshTagType } from './types';

export interface IAshTag {
  icon?: string;
  rounded?: boolean;
  text?: string;
  trailing?: boolean;
  type?: AshTagType;
}
