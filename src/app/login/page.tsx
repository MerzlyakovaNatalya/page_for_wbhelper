'use client'

import { FormEvent, useState } from 'react'
import { useAddUserMutation } from '@/store/user/user.api'
import LoginForm from '@/components/chared/login-form'
import InputLayout from '@/components/layout/input_layout'
import Input from '@/components/ui/input'

export default function Login() {
  const [data, setData] = useState({ email: '', password: '' })
  const [addUser, result] = useAddUserMutation()

  const callbacks = {
    onSubmit: async (
      event: FormEvent<HTMLFormElement>,
      dataForm: { email: string; password: string }
    ) => {
      console.log('Cработал калбэк')
      event.preventDefault()
      await addUser(JSON.stringify({email: '+79871111111@gmail.com', password: 'P9lV9jVhAC'}))
      // await addUser({email: '+79871111111@gmail.com', password: 'P9lV9jVhAC'})
    },
    onChange: (value: string, name: string) => {
      setData((prev) => ({ ...prev, [name]: value }))
    },
  }
  console.log(result)
  return (
    <LoginForm onSubmitForm={callbacks.onSubmit} dataForm={data}>
      <InputLayout label="Логин">
        <Input
          type="text"
          name="login"
          value={data.email}
          onChange={callbacks.onChange}
        />
      </InputLayout>
      <InputLayout label="Пароль">
        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={callbacks.onChange}
        />
      </InputLayout>
      <button type="submit">Войти</button>
    </LoginForm>
  )
}
