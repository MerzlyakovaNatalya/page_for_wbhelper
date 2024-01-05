import { FC } from 'react'
import { ISelect } from './select.types'
import { StyledSelect } from './styles'

const Select: FC<ISelect> = ({ value, onSelect = () => {}, arrow, options }) => {
  return (
    <StyledSelect value={value} onChange={onSelect} appearance={arrow}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
