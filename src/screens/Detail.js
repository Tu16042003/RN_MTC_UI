import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonHover from '../components/ButtonHover'

const Detail = () => {
    return (
        <View >
            <ImageBackground style={styles.img} source={{ uri: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg' }}>
            </ImageBackground>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.7)" }]}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.back}>
                        <Image style={styles.back} source={require('../../assets/images/ic_back.png')} />
                    </TouchableOpacity>
                    <View>
                        <View style={{paddingBottom:20}}>
                            <Text style={[styles.text,{fontSize:40,color:'#ffffff'}]}>
                                Nordic Cottage
                            </Text>
                            <Text style={[styles.text,{fontSize:16,lineHeight:24,color:'rgba(255, 255, 255, 0.8)'}]}>
                                Blue Lagoon Drive from Reykjavík, the capital of Iceland, to the southeast for about an hour, you can reach Blue Lagoon, the famous
                            </Text>
                            <View style={{ flexDirection: 'row',justifyContent:'flex-end'}}>
                                <Text style={[styles.text,{fontSize:16,color:'#ffffff'}]}>see view</Text>
                            </View>
                        </View>
                        <View style={styles.button}>
                            <ButtonHover />
                            <ButtonHover />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',

    },
    back: {
        width: 30,
        height: 30,
        marginTop: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    text: {
        fontFamily: 'Roboto'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20
    }
})