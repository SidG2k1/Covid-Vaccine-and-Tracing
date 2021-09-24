import React from 'react';
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import AdvisoryText from "../../components/AdvisoryText";
import Subtitle from "../../components/Subtitle";
import PrimaryButton from "../../components/PrimaryButton";

export const UserUploadVaccinationScreen = ({ navigation, route }) => {
  return (
    <React.Fragment>
      <Icon />
      <Title>Upload Vaccination</Title>
      <Subtitle>
        Please upload your valid vaccination record here.
      </Subtitle>
      <div style={{ marginTop: 45 }}>
        <PrimaryButton
          title="Confirm"
          onPress={() =>
            navigation.navigate('UserVerified', route.params)
          }
        />
      </div>
    </React.Fragment>
  );
};