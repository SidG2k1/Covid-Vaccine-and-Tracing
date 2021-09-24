import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from "../components/Title";
import AdvisoryText from "../components/AdvisoryText";
import SecondaryButton from "../components/SecondaryButton";
export const WelcomeScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <View>
        <Title style={{ marginTop: 205 }}>WORKFORCE</Title>
        <AdvisoryText>Welcome to...</AdvisoryText>

        <AdvisoryText style={{ marginTop: 52 }}>I am a</AdvisoryText>
        <div style={{ marginTop: 10 }}>
          <SecondaryButton
            title="Business"
            onPress={() => navigation.navigate('BusinessRegister')}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <SecondaryButton
            title="Customer"
            onPress={() =>
              navigation.navigate('UserRegister', { option: 'None' })
            }
          />
        </div>
      </View>
    </React.Fragment>
  );
};