import { FC } from 'react'
import { StyledLogin } from './styles'
import Link from 'next/link'
import Image from 'next/image'
import Img_log_in from '../../../assets/images/log_in_button.png'
import Img_sign_in from '../../../assets/images/sign_in_button.png'

const Login: FC = () => {
  return (
    <StyledLogin>
      <Link href="/login">
        <Image src={Img_sign_in} alt="Picture sign in" sizes="100vw" priority />
      </Link>
      <Link href="/login">
        <Image src={Img_log_in} alt="Picture log in" />
      </Link>
    </StyledLogin>
  )
}

export default Login
