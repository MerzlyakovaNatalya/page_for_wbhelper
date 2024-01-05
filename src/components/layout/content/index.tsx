'use client'

import { FC } from 'react'
import { IContent } from './content.types'
import { StyledContent } from './styles'

const Contentlayout: FC<IContent> = ({children}) => {
  return (
    <StyledContent>
      {children}
    </StyledContent>
  )
}

export default Contentlayout
