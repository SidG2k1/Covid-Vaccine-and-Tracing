import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";

export const QR1 = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>Success!</Title>
            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Get QR Code"
                onPress={() =>
                    navigation.navigate('QRPage', route.params)
                }
                />
            </div>
        </React.Fragment>
    );
};