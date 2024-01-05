import { FC } from 'react'
import { IHeader } from './header.types'
import { StyledHeader } from './styles'
import Logo from './logo'

const Header: FC<IHeader> = ({ children }) => {
  return (
    <StyledHeader>
      <Logo />
      {children}
    </StyledHeader>
  )
}

export default Header
