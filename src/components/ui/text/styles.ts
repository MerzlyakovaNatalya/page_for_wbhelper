'use client'

import styled from 'styled-components'

export const StyledText = styled.p<{color?: string, size?: string}>`
  width: 100%;
  color: ${(props) => props.color ? props.color : '#121212'}; 
  font-size: ${(props) => props.size ? props.size : '16px'}; 
  }
`
