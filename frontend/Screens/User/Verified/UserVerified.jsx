import React from 'react';
import Title from "../../../components/Title";
import Subtitle from "../../../components/Subtitle";
import PrimaryButton from "../../../components/PrimaryButton";

export const UserVerifiedScreen = ({ navigation, route }) => {
  return (
    <>
      <Title style={{ marginTop: 43 }}>VERIFIED!</Title>

      <div style={{ marginTop: 31 }}>
        <svg width="344" height="408" viewBox="0 0 344 408" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="343" height="407" rx="19.5" fill="#FFC7C7" stroke="black" />
          <path d="M144.419 248.612L88.5188 192.712C85.1604 189.354 85.1604 183.909 88.5188 180.55L100.681 168.388C104.039 165.029 109.485 165.029 112.843 168.388L150.5 206.044L231.157 125.388C234.515 122.03 239.961 122.03 243.319 125.388L255.481 137.55C258.839 140.909 258.839 146.354 255.481 149.712L156.581 248.613C153.222 251.971 147.777 251.971 144.419 248.612Z" fill="black" />
        </svg>
      </div>

      <Subtitle>You can scan your receipt to generate you QR code.</Subtitle>
      <div style={{ marginTop: 30 }}>
        <PrimaryButton title="Continue"
          onPress={() =>
            navigation.navigate('Symptoms', { option: 'None' })
          } />
      </div>
    </>
  );
};