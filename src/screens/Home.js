// ./screens/Home.js

import React from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import ListHorizon from "../components/ListHorizon";
import FlatListExample from "../components/FlatListExample";
import SearchBar from "../components/SearchBar";
import typography from "../theme/typography";
import Colors from "../const/Colors";
import ListVetical from "../components/ListVetical";
import ItemHorizon from "../components/ItemHorizon";

const Home = () => {

  return (
    <View style={styles.container}>
      <SearchBar/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}>
        <View >
          <FlatListExample />
        </View>
        <TouchableOpacity style={styles.item}>
        <Text style={styles.Title}>Mới nhất</Text>
        <Image style={styles.imgRight} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <ItemHorizon/>
        <TouchableOpacity style={styles.item}>
        <Text style={styles.Title}>Thịnh hành</Text>
        <Image style={styles.imgRight} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <ListHorizon/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.White

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Title: {
    paddingStart: 20,
    paddingEnd: 20,
    ...typography.tieude
  },
  imgRight: {
    width: 25,
    height: 25
  }
  
});
export default Home;