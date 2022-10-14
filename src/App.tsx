import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

// Import { lightTheme } from './styles/themes/light'

export function App() {
  const [theme] = useState(defaultTheme)
  // - codigo para mudança de tema(incremantar futuramente)
  // SetTheme(defaultTheme)

  // function handleChangeTheme() {
  //   const newTheme = theme === defaultTheme ? lightTheme : defaultTheme
  //   setTheme(newTheme)
  // }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
