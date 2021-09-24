import React from 'react';
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { Alert } from "react-native";

export const UserVaccinatedScreen = ({ navigation, route }) => {
  return (
    <>
      <Icon />
      <Title>Have you been vaccinated?</Title>
      <Subtitle>
        Please select one of the choices below
      </Subtitle>

      <div style={{ marginTop: 94 }}>
        <SecondaryButton
          title="FULLY VACCINATED"
          onPress={() =>
            navigation.navigate('UserUploadVaccination', { option: 'None' })
          }
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <SecondaryButton
          title="PARTIALLY VACCINATED"
          onPress={() => {
            // Alert.alert(
            //   "Uh oh!",
            //   "This app can only works with those that are already vaccinated.",
            //   [
            //     { text: "OK", onPress: () => console.log("OK Pressed") }
            //   ]
            // );
          }}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <SecondaryButton
          title="NOT VACCINATED"
        />
      </div>
    </>
  );
};