import React from 'react';
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import AdvisoryText from "../../components/AdvisoryText";
import Subtitle from "../../components/Subtitle";
import PrimaryButton from "../../components/PrimaryButton";

export const UserRegistrationScreen = ({ navigation, route }) => {
  return (
    <>
      <Icon />
      <Title>ID Confirmation</Title>
      <Subtitle>
        Please upload profile image here<br/> or <br/> Provide a piece of valid ID up scanning
      </Subtitle>
      <div style={{ marginTop: 45 }}>
        <PrimaryButton
          title="Confirm"
          onPress={() =>
            navigation.navigate('UserVaccinated', { option: 'None' })
          }
        />
      </div>
    </>
  );
};