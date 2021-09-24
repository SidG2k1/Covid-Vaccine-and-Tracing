import React from 'react';
import { useState, useContext } from "react";
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Subtitle from "../../components/Subtitle";
import PrimaryButton from "../../components/PrimaryButton";

import AdvisoryText from "../../components/AdvisoryText";

export const UserRegistrationScreen = ({ navigation, route }) => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const updateEmail = (email) => {
    setEmail(email);
    navigation.setParams({"email": email})
  };

  return (
    <React.Fragment>
      <Icon />
      <Title>Contact Info</Title>
      <div style={{ marginTop: 45 }}>
        <div style={{ paddingBottom: 15 }}>
          <Subtitle>
            Full Name
          </Subtitle>
          <Input placeholder="John Doe" style={{ height: "15px" }}></Input>
        </div>
        <div style={{ paddingBottom: 15 }}>
          <Subtitle>
            Email {error === "" ? "" : <Subtitle style={{color:"red"}}>{error}</Subtitle>}
          </Subtitle>
          <Input
            onChangeText={(email) => updateEmail(email)}
            value={email}
            style={{ height: "15px" }}></Input>
        </div>
        <div style={{ paddingBottom: 15 }}>
          <Subtitle>
            Postal Code
          </Subtitle>
          <Input style={{ height: "15px" }}></Input>
        </div>
        <PrimaryButton
          title="Confirm"
          onPress={() =>{
            if(email != "")
              navigation.navigate('IdentificationPage', route.params)
            else
              setError("Please Input an Email");
          }
          }
        />
      </div>
    </React.Fragment>
  );
};