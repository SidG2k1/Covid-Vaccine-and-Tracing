import React from 'react';
import Title from "../components/Title";
import Symptom from "../components/Symptom";
import SecondaryButton from "../components/SecondaryButton";
import QRCode from 'react-native-qrcode-svg';
import DropDown from "../components/DropDown"
import Subtitle from "../components/Subtitle"

export const QRPage = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 30 }}>QR Code</Title>
            <div style={{ marginTop: 30, alignItems: "center" }}>
                <QRCode
                    size={340}
                    value={route.params.email}
                />
            </div>
            <div style={{ marginTop: 50 }}>
                <div style={{ marginBottom: 50 }}>

                    <Subtitle style={{}}>Save to:</Subtitle>
                    <DropDown values={["Photos", "Files", "Google Drive"]} />
                </div>
                <SecondaryButton
                    title="Next"
                    onPress={() =>
                        navigation.navigate('onboard-2', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};
