import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import SplashScreen from '../screens/SplashScreen';
const Stack = createNativeStackNavigator();

const MainStackNavigator  = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name='Splash' children={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Home' children={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export {MainStackNavigator }

const styles = StyleSheet.create({})