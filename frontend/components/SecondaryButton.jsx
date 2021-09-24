import React from 'react';
import styledComponentsNativeCjs from "styled-components/native";

const ButtonText = styledComponentsNativeCjs.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #2165ED;
`;

const ButtonWrapper = styledComponentsNativeCjs.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  background: #FFFFFF;

  border: 1px solid #2165ED;
  border-radius: 15px;
`;

const SecondaryButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  );
};

export default SecondaryButton;
