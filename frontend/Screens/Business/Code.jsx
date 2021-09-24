import React from 'react';
import { StyleSheet, View } from 'react-native';
import styledComponentsNativeCjs from 'styled-components/native';
import Alternate from '../../components/Alternate';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

const IconRow = styledComponentsNativeCjs.View`
  display: flex;
  flex-direction: row;
`

const Code = (props) => {
  const [code, setCode] = React.useState("");
  const [correct, setCorrect] = React.useState(false);
  return (
    <View>
      <Icon/>
      <Title>BUSINESS CODE:</Title>
      <Subtitle>Please enter your unique 10-digit scanning code.</Subtitle>
      <View>
        <Input 
          style={styles.input}
          onChangeText={setCode}
          value={code}
          placeholder="Enter code"
        />
        {correct &&
          <View style={styles.icon}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.5" fill="#FFC7C7" stroke="black"/>
            <g clip-path="url(#clip0)">
            <path d="M18.2929 29.1643L11.7929 22.6643C11.4024 22.2738 11.4024 21.6406 11.7929 21.2501L13.2071 19.8358C13.5976 19.4453 14.2308 19.4453 14.6213 19.8358L19 24.2145L28.3787 14.8358C28.7692 14.4453 29.4024 14.4453 29.7929 14.8358L31.2071 16.2501C31.5976 16.6406 31.5976 17.2737 31.2071 17.6643L19.7071 29.1643C19.3166 29.5548 18.6834 29.5548 18.2929 29.1643Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="20" height="20" fill="white" transform="translate(11.5 12)"/>
            </clipPath>
            </defs>
            </svg>
          </View>
        }
      </View>
      <PrimaryButton title="CONTINUE" onPress={() => props.navigation.navigate("Verified")}/>
      <Alternate>Code help</Alternate>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  }
})

export default Code;