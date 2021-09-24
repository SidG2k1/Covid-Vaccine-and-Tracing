import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";

export const CloseContactScreen = ({ navigation, route }) => {
    return (
        <React.Fragment>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>In the past 14 days, have you been identified
                as a close contact of someone with
                suspected or confirmed COVID-19?</Title>


            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Yes"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <SecondaryButton
                    title="No"
                    onPress={() =>
                        navigation.navigate('Travel', route.params)
                    } />
            </div>
        </React.Fragment>
    );
};