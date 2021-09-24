import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View`
  background: #FFC7C7;
  border: 1px solid #000000;
  border-radius: 20px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const Checkbox = () => {

  return (
    <Box>

    </Box>
  );

}

export default Checkbox;