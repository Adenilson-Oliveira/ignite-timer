import 'styled-components'

// import { defaultTheme } from '../styles/themes/default'
// import { lightTheme } from '../styles/themes/light'

// dessa forma eu padronizo os temas com um tipo especifico em comum
export type ThemeType = {
  primary: string
  secondary: string
  white: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}