import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
export const HomeScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <View style={{ padding: "10px" }} >
                <Button
                    title="Register"
                    onPress={() =>
                        //for future reference this is how you pass things
                        navigation.navigate('Register', { option: 'None' })
                    }
                />
            </View>
            <View style={{ padding: "10px" }} >
                <Button
                    title="Login"
                    onPress={() =>
                        navigation.navigate('Login', { option: 'None' })
                    }
                />
            </View>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
