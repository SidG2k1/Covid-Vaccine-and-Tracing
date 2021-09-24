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
  color: #FFFFFF;
`;

const ButtonWrapper = styledComponentsNativeCjs.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  /* primary blue */
background: #2165ED;

/* primary blue */
border: 1px solid #2165ED;
box-sizing: border-box;
border-radius: 15px;
`;

const PrimaryButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  );
};

export default PrimaryButton;
