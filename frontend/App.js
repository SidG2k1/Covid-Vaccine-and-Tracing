import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from "./Screens/Welcome";
import { UserRegistrationScreen } from "./Screens/User/Registration";
import Business from './Screens/Business';
import Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Montserrat': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
  })

  return !loaded ? <AppLoading/> : (
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
          <Stack.Screen
            name="BusinessRegister"
            component={Business}
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
