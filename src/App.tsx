import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// Import { lightTheme } from './styles/themes/light'

export function App() {
  const [theme] = useState(defaultTheme)
  // SetTheme(defaultTheme)

  // function handleChangeTheme() {
  //   const newTheme = theme === defaultTheme ? lightTheme : defaultTheme
  //   setTheme(newTheme)
  //   console.log('a')
  // }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
