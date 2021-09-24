import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from '../../components/PrimaryButton';
import SecondSubtitle from '../../components/SecondSubtitle';
import StepText from '../../components/StepText';

export const SymptomsScreen = ({ navigation, route }) => {
    return (
        <React.Fragment>
            <Title style={{ marginTop: 80 }}>Screening</Title>
            <StepText>1 of 4</StepText>
            <SecondSubtitle>Are you experiencing any of the following symptoms?</SecondSubtitle>

            <Symptom> • A new or worsening cough</Symptom>
            <Symptom> • Shortness of breath</Symptom>
            <Symptom> • Difficulty breathing</Symptom>
            <Symptom> • Temperature of 38°C or above</Symptom>
            <Symptom> • Feeling feverish/chills</Symptom>

            <Symptom> • Fatigue or weakness</Symptom>
            <Symptom> • Muscle or body aches</Symptom>
            <Symptom> • Headache</Symptom>
            <Symptom> • New loss of smell or taste</Symptom>
            <Symptom> • Gastrointestinal symptoms</Symptom>
            <Symptom>  • Feeling very unwell</Symptom>

            <div style={{ marginTop: 40 }}>
                <SecondaryButton
                    title="YES"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <SecondaryButton
                    title="NO"
                />
            </div>
            <div style={{ marginTop: 20 }}>
                <PrimaryButton
                    title="NEXT"
                    onPress={() =>
                        navigation.navigate('HouseSymptoms', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};