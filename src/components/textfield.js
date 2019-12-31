import React from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import styled from 'styled-components'
import { lightForeground } from "../theme.js"

const StyledInput = styled(FloatingLabelInput)`
    padding: 16px 20px;
    border: none;
    color: ${lightForeground};
`
 
const TextField = () => {
    return (
        <StyledInput/>
    )
}

export default TextField