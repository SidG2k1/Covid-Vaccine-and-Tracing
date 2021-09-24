import React from 'react';
import styledComponentsNativeCjs from "styled-components/native";

const ButtonText = styledComponentsNativeCjs.Text`
  font-family: 'Roboto, sans-serif';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000;
`;

const ButtonWrapper = styledComponentsNativeCjs.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  background: #FFF;
  border-radius: 15px;

  border: 1.5px solid #000000;
`;

const SecondaryButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  );
};

export default SecondaryButton;
