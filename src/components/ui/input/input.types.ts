import { StaticImageData } from 'next/image'

export interface InputProps {
    placeholder?: string
    icon?: StaticImageData
    value?: string
    type: string 
    name?: string 
    onChange?: (value: string, name: string) => void
  }
