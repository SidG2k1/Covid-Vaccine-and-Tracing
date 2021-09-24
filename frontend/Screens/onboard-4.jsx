import React from 'react';
import Title from "../components/Title";
import SecondaryButton from "../components/SecondaryButton";

export const onboard4Screen = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <React.Fragment>
            <Title style={{ marginTop: 170, marginBottom: 70 }}>WE'LL GET THROUGH THIS...</Title>
            <div style={{ marginTop: 70 }}>
                <SecondaryButton
                    title="Next"
                    onPress={() =>
                        navigation.navigate('onboard-4-2', route.params)
                    }
                />
            </div>
        </React.Fragment>
    );
};