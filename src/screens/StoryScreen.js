import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../const/Colors'
import typography from '../theme/typography'
import ListVetical from '../components/ListVetical'

const StoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Story</Text>
      <TouchableOpacity style={styles.img}><Image style={styles.imgSetting} source={require('../../assets/images/ic_Seting.png')} /></TouchableOpacity>
      </View>
      <ListVetical/>
    </View>
  )
}

export default StoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteNight
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: Colors.White
  },
  title: {
    ...typography.title
  },
  img: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
},
imgSetting: {
    width: 25,
    height: 25
}
})