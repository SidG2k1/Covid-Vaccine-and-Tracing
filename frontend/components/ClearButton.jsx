import styledComponentsNativeCjs from "styled-components/native";
import React from 'react';

const ButtonWrapper = styledComponentsNativeCjs.TouchableOpacity`
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 15px;
height: 62px;
display: flex;
justify-content: center;
align-items: center;
`;

const ButtonText = styledComponentsNativeCjs.Text`
  font-family: 'Roboto, sans-serif';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #E0E0E0;
`;

export default (props) => {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  )
}