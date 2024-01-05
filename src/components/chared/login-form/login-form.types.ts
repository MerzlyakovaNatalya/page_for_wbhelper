import { ReactNode, FormEvent } from 'react'

export interface ILoginForm {
    children: ReactNode
    onSubmitForm: (e: FormEvent<HTMLFormElement>, dataForm: {email: string, password: string}) => void
    dataForm: {email: string, password: string}
}

