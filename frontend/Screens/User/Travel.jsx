import React from 'react';
import Title from "../../components/Title";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from '../../components/PrimaryButton';
import SecondSubtitle from '../../components/SecondSubtitle';
import StepText from '../../components/StepText';

export const TravelScreen = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 80 }}>Screening</Title>
            <StepText>4 of 4</StepText>
            <SecondSubtitle>Have you travelled outside Canada in the past 14 days or been in contact with anyone
                who has travelled outside Canada in the
                past 14 days?</SecondSubtitle>
            <div style={{ marginTop: 60 }}>
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
            // onPress={() =>
            //     navigation.navigate('CloseContact', route.params)
            // }
            />
        </React.Fragment>
    );
};