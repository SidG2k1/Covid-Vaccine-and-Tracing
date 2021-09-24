import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";
import DropDown from "../components/DropDown"
import Subtitle from "../components/Subtitle"

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
            <Title style={{ marginTop: 170, marginBottom: 70 }}>Location</Title>
            <Subtitle>For the most up-to-date experience with covid-19 restrictions ...</Subtitle>
            <div style={{ marginTop: 50 }}>
                <div style={{ marginBottom: 50 }}>
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