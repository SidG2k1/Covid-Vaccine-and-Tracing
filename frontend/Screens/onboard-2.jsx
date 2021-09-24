import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";
import { Image, View } from "react-native";
import Input from "../components/Input";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import Alternate from "../components/Alternate";

export const onboard2Screen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <React.Fragment>
      <View>
        <div style={{ margin: "auto", marginTop: 106 }}>
          <Image source={require('../images/3.png')} style={{ width: 196, height: 196 }} />
        </div>
        <Title>
          HELLO <br/>THERE!
        </Title>

        <div style={{ marginTop: 80.5 }}>
          <Label>Email or username: </Label>
          <Input style={{ textAlign: 'left', width: "100%", marginTop: 10 }} />
        </div>

        <div style={{ margin: "auto", marginTop: 60.5 }}>
          <svg width="67" height="10" viewBox="0 0 67 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#F68972"/>
            <circle cx="24" cy="5" r="4.5" stroke="#F68972"/>
            <circle cx="43" cy="5" r="4.5" stroke="#F68972"/>
            <circle cx="62" cy="5" r="4.5" stroke="#F68972"/>
          </svg>
        </div>

        <div style={{ margin: "auto", marginTop: 39, width: "100%" }}>
          <PrimaryButton
            title="Next"
            onPress={() => navigation.navigate('onboard-3')}
          />
          <Alternate style={{ textAlign: "center", marginTop: 10 }}>
            I prefer not to create an account
          </Alternate>
        </div>
      </View>
    </React.Fragment>
  );
};