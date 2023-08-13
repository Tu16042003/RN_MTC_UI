import { StyleSheet } from "react-native";
import Colors from "../const/Colors";

export default StyleSheet.create({
    text:{
        fontSize: 14,
        fontFamily: 'NotoSans-Medium',
        color: Colors.DarkGray
    },
    textStory:{
        fontSize: 14,
        fontFamily: 'NotoSans-Medium',
        color: Colors.GreenDark
    },
    title:{
        fontSize: 20,
        fontFamily: 'NotoSans-Bold',
        color: Colors.Black
    },
    tieude:{
        fontSize: 18,
        fontFamily: 'NotoSans-Regular',
        color: Colors.Black
    },
    titleButton:{
        fontSize: 16,
        fontFamily: 'NotoSans-Medium',
    },
    horizon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderTopColor: Colors.White,
        borderTopWidth: 1
    }
})