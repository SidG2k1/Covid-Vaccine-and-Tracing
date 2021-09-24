import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onboard1screen, WelcomeScreen } from "./Screens/onboard-1";
import { UserRegistrationScreen } from "./Screens/User/Registration";
import { UserVaccinatedScreen } from "./Screens/User/Vaccinated";
import { UserUploadVaccinationScreen } from "./Screens/User/UploadVaccination";
import { UserVerifiedScreen } from "./Screens/User/Verified/UserVerified";
import { SymptomsScreen } from "./Screens/User/Symptoms";
import { HouseSymptomsScreen } from "./Screens/User/HouseSymptoms";
import { CloseContactScreen } from "./Screens/User/CloseContact";
import { TravelScreen } from "./Screens/User/Travel";
import { IdentificationPage } from './Screens/User/IdentificationPage';
import { QRPage } from './Screens/User/QRPage';
import Business from './Screens/Business';
import Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Loading from "./Screens/loading";
import { onboard12Screen } from './Screens/onboard-1-2';
import { onboard2Screen } from './Screens/onboard-2';
import { onboard3Screen } from './Screens/onboard-3';
import { onboard4Screen } from './Screens/onboard-4';
import { onboard42Screen } from './Screens/onboard-4-2';
import { docVerify1Screen } from './Screens/doc-verify-1';
import { docVerify2Screen } from './Screens/doc-verify-2';
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Montserrat': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
  })

  return !loaded ? <AppLoading /> : (
    <div style={{width:"80%", marginLeft:"auto",marginRight:"auto"}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#FFFFFF',
            }
          }}
        >
          {/* Complete */}
          <Stack.Screen
            name="Loading"
            component={Loading}
          />
          <Stack.Screen
            name="Welcome"
            component={onboard1screen}
          />

          {/* Last */}
          <Stack.Screen
            name="onboard-1-2"
            component={onboard12Screen}
          />
          <Stack.Screen
            name="onboard-2"
            component={onboard2Screen}
          />
          <Stack.Screen
            name="onboard-3"
            component={onboard3Screen}
          />
          <Stack.Screen
            name="onboard-4"
            component={onboard4Screen}
          />
          <Stack.Screen
            name="onboard-4-2"
            component={onboard42Screen}
          />
          <Stack.Screen
            name="UserRegister"
            component={UserRegistrationScreen}
          />
          <Stack.Screen
            name="IdentificationPage"
            component={IdentificationPage}
          />
          <Stack.Screen
            name="QRPage"
            component={QRPage}
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
        <Stack.Screen
          name="UserRegister"
          component={UserRegistrationScreen}
        />
        <Stack.Screen
          name="BusinessRegister"
          component={Business}
        />
        <StatusBar style="auto" />
      </NavigationContainer>
    </div>
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
