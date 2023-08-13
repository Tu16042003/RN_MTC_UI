import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const data = [
    {
      id: '1',
      title: 'Item 1',
      image: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
    },
    {
      id: '2',
      title: 'Item 2',
      image: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
    },
    {
      id: '3',
      title: 'Item 2',
      image: 'https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg',
    },
    {
      id: '4',
      title: 'Item 2',
      image: 'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
    },
    {
      id: '5',
      title: 'Item 2',
      image: 'https://i.pinimg.com/originals/51/ea/1e/51ea1efc0304549283995f9b54b44db7.jpg',
    }
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );
const SlideShow = () => {
  return (
    <View>
      <Text>SlideShow</Text>
    </View>
  )
}

export default SlideShow

const styles = StyleSheet.create({})