import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";

export const onboard42Screen = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>WE'RE ALMOST THERE!</Title>
            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Next"
                    onPress={() =>
                        navigation.navigate('doc-verify-1', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};