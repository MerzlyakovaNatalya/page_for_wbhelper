'use client'

import {FC, useState, useLayoutEffect, useCallback} from 'react'
import { InputProps } from './input.types'
import { StyledInput } from './styles'
import { IconContainer } from './styles'
import debounce from 'debounce';
import Image from 'next/image'

const Input: FC<InputProps> = (props: InputProps) => {

  const {onChange = () => {}} = props

  const [value, setValue] = useState(props.value);

  const onChangeDebounce = (valueInput: string) => {
    debounce(() => onChange(valueInput, props.name || ''), 600)
  }

  // Обработчик изменений в поле
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // if(props.onChange) onChangeDebounce(event.target.value as string);
  };

  // Обновление стейта, если передан новый value
  useLayoutEffect(() => setValue(props.value), [props.value]);
  return (
    <>
      <StyledInput 
      placeholder={props.placeholder}
      value={value}
      type={props.type}
      onChange={(event) => changeHandler(event)} />
      {props.icon && <IconContainer>
        <Image src={props.icon} alt="Picture icon" />
        </IconContainer>}
    </>
  );
};

export default Input;
