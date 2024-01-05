import { FC } from 'react'
import { ButtonProps } from './button.types'
import { StyledButton } from './styles'

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  disabled = true,
  background,
  color,
  width
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      background={background}
      color={color}
      width={width}
    >
      {label}
    </StyledButton>
  )
}

export default Button
