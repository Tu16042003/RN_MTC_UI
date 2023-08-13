import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import typography from '../theme/typography';

const { width } = Dimensions.get('window');
const data = [
    {
      id: '1',
      title: 'Nordic Cottage vvvvvvvvvvvvvvvvvvvvvvvvvvvv ',
      image: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg',
    },
    {
      id: '2',
      title: 'Item 2',
      image: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
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
    },
    {
        id: '6',
        title: 'Item 1',
        image: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
      },
      {
        id: '7',
        title: 'Item 2',
        image: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
      },
      {
        id: '8',
        title: 'Item 2',
        image: 'https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg',
      },
      {
        id: '9',
        title: 'Item 2',
        image: 'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
      },
      {
        id: '10',
        title: 'Item 2',
        image: 'https://i.pinimg.com/originals/51/ea/1e/51ea1efc0304549283995f9b54b44db7.jpg',
      }
    // Thêm các item khác nếu cần
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text  style={styles.itemTitle}>{item.title}</Text>
      </View>
      <View style={styles.itemItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
      <View style={styles.itemItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </View>
  );
const ListHorizon = () => {
  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
  )
}

export default ListHorizon

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 8,
      },
      itemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 12
      },
      itemItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        width: width-10,
        borderRadius: 10,
        elevation: 1, // Độ nâng của shadow
        shadowColor: '#FF0000', // Màu của shadow
        shadowOpacity: 0.5, // Độ mờ của shadow
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
      },
      itemImage: {
        width: 84,
        height: 84,
        marginRight: 12,
        borderRadius: 8
      },
      itemTitle: {
        padding: 10,
        width: 200,
        ...typography.text
      }
})