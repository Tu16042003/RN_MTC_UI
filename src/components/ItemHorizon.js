import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../const/Colors';

const ItemHorizon = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
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
    useEffect(() => {
        setSelectedImage(images[0]);
    }, []);
    const handleImagePress = (imageInfo) => {
        setSelectedImage(imageInfo);
    };

    const handleButtonPress = () => {
        // Xử lý sự kiện khi nút bấm được nhấn
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.imageList}>
                {images.map((image) => (
                    <TouchableOpacity
                        key={image.id}
                        onPress={() => handleImagePress(image)}
                        style={styles.imageContainer}
                    >
                        <Image source={{ uri: image.image }} style={styles.image} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {selectedImage && (
                <View style={styles.imageDetails}>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{selectedImage.title}</Text>
                        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                            <Text style={styles.buttonText}>Xem</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: selectedImage.image }} style={styles.selectedImage} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.White,
    },
    imageList: {
        flexDirection: 'row',
        flexGrow: 0,
    },
    imageContainer: {
        flex: 1,
        marginRight: 8,
    },
    image: {
        width: 50,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.WhiteNight,
    },
    imageDetails: {
        flexDirection: 'row',
        padding: 8,
        overflow: "hidden"
    },
    selectedImage: {
        width: 140,
        height: 160,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.WhiteNight,
    },
    info: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-between',
    },
    infoText: {
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: Colors.GreenDark,
        padding: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ItemHorizon;
