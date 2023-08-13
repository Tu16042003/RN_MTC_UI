import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../const/Colors';

const ButtonProfile = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isPressed ? Colors.Black : Colors.GreenDark }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}  >
                <View>
                    <Text style={styles.titleButton}>
                        Sự kiện
                    </Text>
                </View>
            </TouchableOpacity>
           
    );
}
export default ButtonProfile

const styles = StyleSheet.create({
    button: {
        width: 150,
        height:50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton:{
        color: Colors.White, 
        fontSize: 16, 
        fontFamily: 'NotoSans-Medium',
    }
})