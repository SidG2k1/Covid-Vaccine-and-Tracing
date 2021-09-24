import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from "./Screens/Welcome";
import { UserRegistrationScreen } from "./Screens/User/Registration";
import { UserVaccinatedScreen } from "./Screens/User/Vaccinated";
import { UserUploadVaccinationScreen } from "./Screens/User/UploadVaccination";
import { UserVerifiedScreen } from "./Screens/User/Verified/UserVerified";
import { SymptomsScreen } from "./Screens/User/Symptoms";
import { HouseSymptomsScreen } from "./Screens/User/HouseSymptoms";
import { CloseContactScreen } from "./Screens/User/CloseContact";
import { TravelScreen } from "./Screens/User/Travel";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
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
        <Stack.Screen
          name="UserVaccinated"
          component={UserVaccinatedScreen}
        />
        <Stack.Screen
          name="UserUploadVaccination"
          component={UserUploadVaccinationScreen}
        />
        <Stack.Screen
          name="UserVerified"
          component={UserVerifiedScreen}
        />
        <Stack.Screen
          name="Symptoms"
          component={SymptomsScreen}
        />
        <Stack.Screen
          name="HouseSymptoms"
          component={HouseSymptomsScreen}
        />
        <Stack.Screen
          name="CloseContact"
          component={CloseContactScreen}
        />
        <Stack.Screen
          name="Travel"
          component={TravelScreen}
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
