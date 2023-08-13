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
        <ItemHorizon/>
        <TouchableOpacity >
        <Text style={styles.Title}>Danh Sách Truyện</Text>
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
  Title: {
    paddingStart: 20,
    paddingEnd: 20,
    ...typography.title
  }
  
});
export default Home;