'use client'

import styled from 'styled-components'

export const StyledSelect = styled.select<{appearance: string}>`
  width: 100%;
  border: none; 
  padding: 8px; 
  background-color: transparent; 
  color: grey; 
  outline: none;
  appearance: ${(props) => props.appearance ? props.appearance : 'none'}
  }
`
