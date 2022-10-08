import 'styled-components'

// import { defaultTheme } from '../styles/themes/default'
// import { lightTheme } from '../styles/themes/light'

// dessa forma eu padronizo os temas com um tipo especifico em comum
export type ThemeType = {
  white: string

  'gray-100': string
  'gray-300': string
  'gray-400': string
  'gray-500': string
  'gray-600': string
  'gray-700': string
  'gray-800': string
  'gray-900': string

  'primary-300': string
  'primary-500': string
  'primary-700': string

  'red-500': string
  'red-700': string

  'yellow-500': string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
