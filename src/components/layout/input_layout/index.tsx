import { FC } from 'react'
import { IInputLayout } from './input_layout.types'
import { StyledInputLayout, StyledLabel, StyledInput } from './styles'

const InputLayout: FC<IInputLayout> = ({label, children}) => {
  return (
    <StyledInputLayout>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput>{children}</StyledInput>
    </StyledInputLayout>
  )
}

export default InputLayout
