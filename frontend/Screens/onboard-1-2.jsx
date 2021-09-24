import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";
import DropDown from "../components/DropDown"
import Subtitle from "../components/Subtitle"
import { View, Image, StyleSheet } from 'react-native';

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
            
            <Image style={{height:155, width:203, alignSelf:"center", marginTop:100}} source={require('../images/2.png')}/>
            <Title style={{marginBottom: 20, marginTop: 50 }}>Location</Title>
            <Subtitle style={{fontSize:12}}>For the most up-to-date experience with covid-19 restrictions ...</Subtitle>
            <div style={{ marginTop: 50 }}>
                <div style={{ marginBottom: 50 }}>
                    
            <Subtitle style={{}}>Province:</Subtitle>
                <DropDown values={PROVINCES}/>
                </div>
                <SecondaryButton
                    title="Next"
                    onPress={() =>
                        navigation.navigate('onboard-2', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};