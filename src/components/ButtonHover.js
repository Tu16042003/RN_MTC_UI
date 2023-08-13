import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ButtonHover = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
      };
    
      const handlePressOut = () => {
        setIsPressed(false);
      };

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: isPressed ? '#ffffff' : 'rgba(255, 255, 255, 0.1)' }]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}  >
        <View>
        <Text style={{ color: isPressed ? '#000000' : '#ffffff',fontSize:16,fontFamily:'Roboto' }}>
            Click
        </Text>
        </View>
        </TouchableOpacity>
    );
}
export default ButtonHover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }
})