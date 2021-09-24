import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #252525;
text-decoration: underline;
`;

export default ({ children }) => {
  return (
    <TouchableOpacity>
      <StyledText>{children}</StyledText>
    </TouchableOpacity>
  );
}