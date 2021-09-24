import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";

export const HouseSymptomsScreen = ({ navigation, route }) => {
    return (
        <>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>Has anyone in your household experienced
                any symptoms in the past 14 days?</Title>


            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Yes"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <SecondaryButton
                    title="No"
                    onPress={() =>
                        navigation.navigate('CloseContact', { option: 'None' })
                    } />
            </div>
        </>
    );
};