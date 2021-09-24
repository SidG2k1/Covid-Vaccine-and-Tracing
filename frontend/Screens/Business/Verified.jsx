import React from 'react';
import { View } from 'react-native';
import ClearButton from '../../components/ClearButton';
import Icon from '../../components/Icon';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

const Verified = ({ navigation }) => {

  return (
    <View>
      <Icon hasCheckbox/>
      <Title>BUSINESS VERIFIED</Title>
      <Subtitle>Let’s get you set up with your scanning system to verify the vaccination status of your guests.</Subtitle>
      <ClearButton title="SCAN" onPress={() => navigation.navigate("QRVerification")}/>
    </View>
  );
}

export default Verified;