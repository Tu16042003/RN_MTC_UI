import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';

const Gỉrdview = () => {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({ item }) => {
    return (
      <View key={item} style={styles.item} />
    );
  };

  const numColumns = 2;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    width: Dimensions.get('window').width / 2 - 24,
    height: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'gray',
    margin: 8,
  },
});

export default Gỉrdview;
