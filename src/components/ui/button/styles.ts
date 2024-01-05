'use client'

import styled from 'styled-components'

export const StyledButton = styled.button<{ disabled?: boolean, background?: string, color?:string, width?: string }>`
width: ${(props) => props.width};
position: relative;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
border: none;
background-color: ${(props) => (props.background ? props.background : 'transparent')};
color: ${(props) => props.color};
`;
