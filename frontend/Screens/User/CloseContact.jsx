import React from 'react';
import Title from "../../components/Title";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from '../../components/PrimaryButton';
import SecondSubtitle from '../../components/SecondSubtitle';
import StepText from '../../components/StepText';

export const CloseContactScreen = ({ navigation, route }) => {
    return (
        <React.Fragment>
            <Title style={{ marginTop: 80 }}>Screening</Title>
            <StepText>3 of 4</StepText>
            <SecondSubtitle>In the past 14 days, have you been identified as a close contact of someone with suspected or confirmed COVID-19?</SecondSubtitle>
            <div style={{ marginTop: 100 }}>
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
                    navigation.navigate('Travel', route.params)
                }
            />
        </React.Fragment>
    );
};