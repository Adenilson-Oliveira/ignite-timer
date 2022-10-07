import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'
import './styles.css'
// import { defaultTheme } from './styles/themes/default'
import { variantTheme, defaultTheme } from './styles/themes/themes'



export function App() {

  const [theme, setTheme] = useState(defaultTheme)

  function handleChangeTheme() {
    const newTheme = theme.id === defaultTheme.id ? variantTheme : defaultTheme
    setTheme(newTheme)
    console.log('a')
  }

  return (
    <ThemeProvider theme={theme}>
      <Button onhandleChangeTheme={handleChangeTheme} variant='primary' />
      <Button variant='secondary' />
      <Button variant='success' />
      <Button variant='danger' />
      <Button />
    </ThemeProvider>
  )
}

