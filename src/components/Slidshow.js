import React, { Component } from 'react';
import { View, ImageBackground, Animated, StyleSheet } from 'react-native';

class Slidshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [require('../image/img_1.jpg'), require('../image/img_2.jpg'), require('../image/img_3.jpg')], // Thay đổi đường dẫn hình ảnh tại đây
      currentImageIndex: 0,
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startSlideshow();
  }

  startSlideshow() {
    const { images, currentImageIndex, fadeAnim } = this.state;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          this.setState((prevState) => ({
            currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
          }), () => {
            this.startSlideshow();
          });
        });
      }, 3000);
    });
  }

  render() {
    const { images, currentImageIndex, fadeAnim } = this.state;
    
    return (
      <View style={styles.container}>
        <ImageBackground
            borderRadius={20}
            source={images[currentImageIndex]}
            style={styles.img}
        >
          <Animated.View
            style={{
                backgroundColor: '#fff',
                borderRadius: 50,
                width:10,
                height:10,
                opacity: fadeAnim,
              }}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default Slidshow
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    alignItems: 'center', 
    justifyContent: 'flex-end',
    width:'100%',
    height:150
  }

})
