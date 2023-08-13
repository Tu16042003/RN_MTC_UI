import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../const/Colors';
import typography from '../theme/typography';
import ListVetical from '../components/ListVetical';
import ButtonHover from '../components/ButtonHover';
import ButtonProfile from '../components/ButtonProfile';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hồ Sơ</Text>
        <TouchableOpacity style={styles.img}><Image style={styles.imgSetting} source={require('../../assets/images/ic_Seting.png')} /></TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg' }} style={styles.profileImage} />
        <View style={styles.itemName}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bio}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <ButtonProfile/>
        <ButtonProfile/>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Sửa hồ sơ</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Cài đặt</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Nâng cấp tài khoản</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Mua kẹo</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Câu hỏi thường gặp</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Liên hệ báo lỗi</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Xóa tài khoản</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonService}>
          <Text style={styles.textButtonService}>Thoát</Text>
          <Image style={styles.imgSetting} source={require('../../assets/images/ic_chevron_right.png')} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteNight,
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
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemName: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  name: {
    ...typography.title,
    marginBottom: 10,
  },
  bio: {
    ...typography.text,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    ...typography.tieude,
  },
  statLabel: {
    ...typography.text,
  },
  buttonService: {
    ...typography.horizon
  },
  textButtonService: {
    ...typography.titleButton
  }
});

export default ProfileScreen;
