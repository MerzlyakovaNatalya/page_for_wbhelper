'use client'

import { FC } from 'react'
import { ILoginForm } from './login-form.types'
import { StyledLoginForm, StyledTitle, StyledForm } from './styles'

const LoginForm: FC<ILoginForm> = ({ children, onSubmitForm, dataForm }) => {
  return (
    <StyledLoginForm>
      <StyledTitle>Вход</StyledTitle>
      <StyledForm onSubmit={(event) => onSubmitForm(event, dataForm)}>
        {children}
      </StyledForm>
    </StyledLoginForm>
  )
}

export default LoginForm
