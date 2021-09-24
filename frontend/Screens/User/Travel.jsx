import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";

export const TravelScreen = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>Have you travelled outside Canada in the
                past 14 days or been in contact with anyone
                who has travelled outside Canada in the
                past 14 days?</Title>

            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Yes"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <SecondaryButton
                    title="No"
                    onPress={() =>
                        navigation.navigate('QRPage', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};