import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
export const HomeScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <View>
                <Title>Hello</Title>
                <PrimaryButton
                    title="Register"
                    onPress={() =>
                        //for future reference this is how you pass things
                        navigation.navigate('Register', { option: 'None' })
                    }
                />
                <Input/>
            </View>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6ED4C8'
    },
});
