import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import StoryScreen from '../screens/StoryScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let imageSource;
          if (route.name === 'Home') {
            imageSource = require('../../assets/images/ic_home.png');
          } else if (route.name === 'Story') {
            imageSource = require('../../assets/images/ic_book.png');
          } else if (route.name === 'Notify') {
            imageSource = require('../../assets/images/ic_bell.png');
          } else if (route.name === 'Profile') {
            imageSource = require('../../assets/images/ic_user.png');
          }
          if (imageSource) {
            return (
              <Image source={imageSource} style={{ width: size, height: size, tintColor: color }} />
            );
          }
          return null;
        },
        tabBarActiveTintColor: 'tomato',
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold', // Đặt kiểu chữ in đậm cho label
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Story" component={StoryScreen} />
      <Tab.Screen name="Notify" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})