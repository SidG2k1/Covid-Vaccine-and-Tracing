import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";

export const SymptomsScreen = ({ navigation, route }) => {
    return (
        <>
            <Title style={{ marginTop: 150, marginBottom: 70 }}>Are you experiencing any symptoms?</Title>


            <Symptom>• A new or worsening cough</Symptom>
            <Symptom> • Shortness of breath or difficulty breathing</Symptom>
            <Symptom> • Temperature equal to or
                over 38°C</Symptom>
            <Symptom> • Feeling feverish</Symptom>
            <Symptom> • Chills</Symptom>
            <Symptom> • Fatigue or weakness</Symptom>
            <Symptom> • Muscle or body aches</Symptom>
            <Symptom>  • Headache</Symptom>
            <Symptom>  • New loss of smell or taste</Symptom>
            <Symptom>  • Gastrointestinal symptoms
                (abdominal pain, diarrhea,
                vomiting)</Symptom>
            <Symptom>   • Feeling very unwell</Symptom>

            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Yes"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <SecondaryButton
                    title="No"
                    onPress={() =>
                        navigation.navigate('HouseSymptoms', { option: 'None' })
                    } />
            </div>
        </>
    );
};