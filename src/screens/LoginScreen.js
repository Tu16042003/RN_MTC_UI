import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg' }}
        style={styles.backgroundImage}
      >
        
        <View style={styles.formContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../../assets/images/ic_back.png')} style={styles.backButton} />
        </TouchableOpacity>
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={() => {
              // Xử lý đăng nhập
            }}
            style={styles.loginButton}
          >
            Đăng nhập
          </Button>
          <Button
            mode="outlined"
            onPress={() => {
              // Xử lý đăng nhập bằng gg
            }}
            style={styles.googleButton}
          >
            Đăng nhập bằng Google
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              // Xử lý đăng nhập bằng Facebook
            }}
            style={styles.facebookButton}
          >
            Đăng nhập bằng Facebook
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 20,
    borderRadius: 30,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  loginButton: {
    marginTop: 20,
  },
  googleButton: {
    marginTop: 40,
    backgroundColor: '#fff',
  },
  facebookButton: {
    marginTop: 20,
    backgroundColor: '#4267b2',
  },
  backButton: {
    width: 30,
    height: 30,
    marginBottom: 40,
  }
});

export default LoginScreen;
