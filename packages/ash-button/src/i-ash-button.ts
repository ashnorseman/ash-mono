import { AshButtonTheme, AshButtonType } from './types';

export interface IAshButton {
  block?: boolean;
  disabled?: boolean;
  dropdown?: boolean;
  icon?: string;
  label?: string;
  text?: string;
  theme?: AshButtonTheme;
  trailing?: boolean;
  type?: AshButtonType;
}
