import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import typography from '../theme/typography';
import Colors from '../const/Colors';

const data = [
    {
      id: '1',
      title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 1',
      image: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
    },
    {
      id: '2',
      title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
      image: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
    },
    {
      id: '3',
      title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
      image: 'https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg',
    },
    {
      id: '4',
      title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
      image: 'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
    },
    {
      id: '5',
      title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
      image: 'https://i.pinimg.com/originals/51/ea/1e/51ea1efc0304549283995f9b54b44db7.jpg',
    },
    {
        id: '6',
        title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 1',
        image: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
      },
      {
        id: '7',
        title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
        image: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
      },
      {
        id: '8',
        title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
        image: 'https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg',
      },
      {
        id: '9',
        title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
        image: 'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
      },
      {
        id: '10',
        title: 'CHIẾN THẦN THÁNH Y/HUYỀN THOẠI THÁNH Y 2',
        image: 'https://i.pinimg.com/originals/51/ea/1e/51ea1efc0304549283995f9b54b44db7.jpg',
      }
    // Thêm các item khác nếu cần
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );
  
const ListNotify = () => {
    
  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
  )
}

export default ListNotify

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 8,
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: Colors.White,
        borderRadius: 30,
        elevation: 3,
        shadowColor: Colors.Black,
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2
        }
      },
      itemImage: {
        width: 60,
        height: 60,
        marginRight: 12,
        borderRadius: 30
      },
      itemTitle: {
        ...typography.text,
        flex: 1,
        textAlign: 'center'
      }
})