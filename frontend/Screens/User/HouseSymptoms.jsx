import React from 'react';
import Title from "../../components/Title";
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from "../../components/SecondaryButton";
import SecondSubtitle from '../../components/SecondSubtitle';
import StepText from '../../components/StepText';

export const HouseSymptomsScreen = ({ navigation, route }) => {
    return (
        <React.Fragment>
            <Title style={{ marginTop: 80 }}>Screening</Title>
            <StepText>2 of 4</StepText>
            <SecondSubtitle>Have you or anyone in your household experienced
                any symptoms in the past 14 days?</SecondSubtitle>
            <div style={{ marginTop: 160 }}>
                <SecondaryButton
                    title="YES"
                />
            </div>
            <div style={{ marginTop: 10, marginBottom: 140 }}>
                <SecondaryButton
                    title="NO" />
            </div>
            <PrimaryButton
                title="NEXT"
                onPress={() =>
                    navigation.navigate('CloseContact', route.params)
                }
            />
        </React.Fragment>
    );
};