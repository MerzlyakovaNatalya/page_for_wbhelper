import { StaticImageData } from 'next/image'
import { IOptions } from '../../ui/select/select.types'

export interface ISearch {
  title: string
  keyValue: string
  value: string 
  arrow: string
  options: Array<IOptions>
  placeholder: string 
  icon: StaticImageData
  onClick: () => void 
  label: string
  background?: string
  color?: string
  widthButton?: string
  }