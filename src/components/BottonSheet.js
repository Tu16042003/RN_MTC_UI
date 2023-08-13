import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, PanResponder, Animated, Text } from 'react-native';

const { height } = Dimensions.get('window');

const CustomBottomSheet = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const sheetAnimation = new Animated.Value(height);

  useEffect(() => {
    if (sheetVisible) {
      showSheet();
    } else {
      hideSheet();
    }
  }, [sheetVisible]);

  const showSheet = () => {
    Animated.spring(sheetAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const hideSheet = () => {
    Animated.spring(sheetAnimation, {
      toValue: height,
      useNativeDriver: true,
    }).start();
  };

  const toggleSheet = () => {
    setSheetVisible(!sheetVisible);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        sheetAnimation.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        hideSheet();
      } else {
        showSheet();
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* Các thành phần khác */}
      <TouchableOpacity style={styles.button} onPress={toggleSheet}>
        {/* Nội dung của nút */}
      </TouchableOpacity>

      {sheetVisible && (
        <Animated.View
          style={[styles.bottomSheet, { transform: [{ translateY: sheetAnimation }] }]}
          {...panResponder.panHandlers}
        >
          {/* Nội dung của bottom sheet */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleSheet}>
            
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height-40, // Chiều cao tùy chỉnh của bottom sheet
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    backgroundColor: 'red',
    width: 25,
    height: 25,
  },
});

export default CustomBottomSheet;
