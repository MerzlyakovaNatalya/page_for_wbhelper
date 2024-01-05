import { FC } from 'react'
import { StyledLogo } from './styles'
import Image from 'next/image'
import Img from '../../../../assets/images/logo.png'

const Logo: FC = () => {
  return (
    <StyledLogo>
      <Image src={Img} alt="Picture logo" />
    </StyledLogo>
  )
}

export default Logo
