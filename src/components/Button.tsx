import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
  onhandleChangeTheme?: () => void
}

export function Button({
  variant = 'primary',
  onhandleChangeTheme,
}: ButtonProps) {
  return (
    <ButtonContainer onClick={onhandleChangeTheme} variant={variant}>
      Enviar
    </ButtonContainer>
  )
}
