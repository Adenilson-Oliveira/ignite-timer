import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'danger',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

  width: 100px;
  height: 40px;
  margin: 5px;
  border: 0;

  background-color: ${props => props.theme.primary};

  /* ${props => css`background-color: ${buttonVariants[props.variant]}`}; */

  color: ${props => props.theme.secondary};

  border-radius:8px;
`
