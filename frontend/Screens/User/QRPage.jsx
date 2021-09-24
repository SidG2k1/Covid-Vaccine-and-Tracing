import React from 'react';
import Title from "../../components/Title";
import Symptom from "../../components/Symptom";
import SecondaryButton from "../../components/SecondaryButton";
import QRCode from 'react-native-qrcode-svg';

export const QRPage = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 30 }}>QR Code</Title>
            <div style={{ marginTop: 30, flex:1}}>
                <QRCode
                    size={350}
                    value={route.params.email}
                />
            </div>
        </React.Fragment>
    );
};
