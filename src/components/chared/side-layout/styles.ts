'use client'

import styled from 'styled-components'

export const StyledSideLayout = styled.div<{value?: string}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.value};
  padding: 0 20px 0 20px}
`