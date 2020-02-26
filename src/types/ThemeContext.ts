import { Theme } from '../data/Theme';

export interface ThemeContext {
  mode: Theme;
  toggle(): void;
}
