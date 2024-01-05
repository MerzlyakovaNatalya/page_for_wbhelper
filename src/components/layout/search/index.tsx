import { FC } from 'react'
import { ISearch } from './search.types'
import {
  StyledSearch,
  StyledTitle,
  StyledSelect,
  StyledWrap,
  StyledWrapInput,
} from './styles'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'
import Select from '@/components/ui/select'

const Search: FC<ISearch> = ({
  title,
  keyValue,
  value,
  arrow,
  options,
  placeholder,
  icon,
  onClick,
  label,
  background,
  color,
  widthButton,
}) => {
  return (
    <StyledWrap>
      <StyledSearch>
        <StyledTitle>{title}</StyledTitle>
        <StyledSelect>
          <Select
            key={keyValue}
            value={value}
            arrow={arrow}
            options={options}
          />
        </StyledSelect>
        <StyledWrapInput>
          <Input
            placeholder={placeholder}
            icon={icon}
            type="text"
            value=""
            onChange={() => {}}
          />
        </StyledWrapInput>
        <Button
          onClick={onClick}
          label={label}
          background={background}
          color={color}
          width={widthButton}
        />
      </StyledSearch>
    </StyledWrap>
  )
}

export default Search
