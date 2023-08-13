import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import Home from './src/screens/Home';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import ListVetical from './src/components/ListVetical';
import ListHorizon from './src/components/ListHorizon';
import Slidshow from './src/components/Slidshow';
import FlatListExample from './src/components/FlatListExample';
import SearchBar from './src/components/SearchBar';
import Detail from './src/screens/Detail';
import CustomBottomSheet from './src/components/BottonSheet';
import TabNavigator from './src/navigation/TabNavigator';
import LoginScreen from './src/screens/LoginScreen';
import ItemHorizon from './src/components/ItemHorizon';


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    // <ItemHorizon/>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})