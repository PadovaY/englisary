// ./styled-components.d.ts
import { theme } from './theme';

interface CustomTheme {
  colors: typeof theme.colors;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme { }
}
