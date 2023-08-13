import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Xử lý tìm kiếm ở đây với searchText
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Image source={require('../../assets/images/ic_search1.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    elevation: 4, // Độ nâng của shadow
    shadowColor: '#000', // Màu của shadow
    shadowOpacity: 0.25, // Độ mờ của shadow
    shadowRadius: 7, // Bán kính của shadow
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  button: {
    padding: 8,
  },
  icon: {
    width: 20,
    height: 20,
  }
})