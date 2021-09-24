import styledComponentsNativeCjs from "styled-components/native";
import React from 'react';

const ButtonWrapper = styledComponentsNativeCjs.TouchableOpacity`
/* UI White */
background: #FFFFFF;

/* primary blue */
border: 1px solid #2165ED;
border-radius: 15px;
height: 62px;
display: flex;
justify-content: center;
align-items: center;
`;

const ButtonText = styledComponentsNativeCjs.Text`
  font-family: 'Montserrat';
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