import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Code from "./Code";
import QRVerification from './QRVerification';
import Verified from './Verified';

const Stack = createNativeStackNavigator();

const Business = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle:{
          backgroundColor:'#FFFFFF',
          paddingLeft: 30,
          paddingRight: 30
        }
      }}
      initialRouteName="Code"
    >
      <Stack.Screen
        name="Verified"
        component={Verified}
      />
      <Stack.Screen 
        name="Code"
        component={Code}  
      />

      <Stack.Screen
        name="QRVerification"
        component={QRVerification}
      />
      
    </Stack.Navigator>
  )
}

export default Business;