import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from "./Screens/Welcome";
import { UserRegistrationScreen } from "./Screens/User/Registration";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle:{
              backgroundColor:'#FFFFFF',
              paddingLeft: 30,
              paddingRight: 30
            }
          }}
        >
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="UserRegister"
            component={UserRegistrationScreen}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
