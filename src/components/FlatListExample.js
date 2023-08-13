import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  <View style={{flex: 1}}>
    <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemTitle}>{item.title}</Text>
  </View>
  </View>
);

const FlatListExample = () => {
  const flatListRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
            index: currentIndex,
            animated: true,
          });
          currentIndex = (currentIndex + 1) % data.length;
        }
      }, 3000);

    return () => {
      clearInterval(autoScroll);
    };
  }, []);
  const onViewableItemsChanged = ({ viewableItems }) => {
    // viewableItems chứa mảng các item đang hiển thị trên màn hình
    var item = viewableItems[0];
    var index = item.item.id;
    for(var i = 0; i < data.length; i++) {
      var id = data[i].id;
      if(id == index) {
        currentIndex = i+1;
        break;
      }
    }
    // console.log(viewableItems);
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      horizontal={true} // Lướt ngang
      showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 4,
    shadowColor: '#F0000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  itemImage: {
    width: 300,
    height: 150,
    marginBottom: 8,
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
});

export default FlatListExample;
