import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";
import DropDown from "../components/DropDown"
import Subtitle from "../components/Subtitle"
import { View, Image, StyleSheet } from 'react-native';
import PrimaryButton from "../components/PrimaryButton";
import Alternate from "../components/Alternate";

export const onboard12Screen = ({ navigation, route }) => {
    const PROVINCES = ["Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"]
    return (
        <React.Fragment>
          <View>
            <div style={{ margin: "auto", marginTop: 106 }}>
              <Image source={require('../images/2.png')} style={{ width: 203, height: 155 }} />
            </div>

            <Title style={{ marginTop: 38 }}>
              LOCATION
            </Title>

            <Subtitle style={{fontSize:14, marginTop: 24}}>
              For the most up-to-date experience<br/> with covid-19 restrictions ...
            </Subtitle>


            <div style={{ marginTop: 30 }}>

            <Subtitle>Province:</Subtitle>
            <DropDown values={PROVINCES}/>
            </div>

            <div style={{ margin: "auto", marginTop: 114, width: "100%" }}>
              <PrimaryButton
                title="Scan"
                onPress={() => navigation.navigate('onboard-2')}
              />
              <Alternate style={{ textAlign: "center", marginTop: 10 }}>
                I prefer not to say
              </Alternate>
            </div>
          </View>
        </React.Fragment>
    );
};