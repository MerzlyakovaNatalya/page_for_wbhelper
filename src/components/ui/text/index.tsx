import { FC } from 'react'
import { IText } from './text.types'
import { StyledText } from './styles'

const Text: FC<IText> = ({ text, color, size }) => {
  return (
    <StyledText color={color} size={size}>
      {text}
    </StyledText>
  )
}

export default Text
