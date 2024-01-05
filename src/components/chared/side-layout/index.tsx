'use client'

import { FC } from 'react'
import { ISideLayout } from './side_layout.types'
import { StyledSideLayout } from './styles'

const SideLayout: FC<ISideLayout> = ({children, side}) => {
  return (
    <StyledSideLayout value={side} >
      {children}
    </StyledSideLayout>
  )
}

export default SideLayout;