import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    ContainerRegister: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.PRIMARY,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    ContainerImage:{
        marginTop: 50,
        marginBottom: 10
    },

    Image:{
        width: 255,
        height:207

    },

    ContainerUserRegister:{
        width: '100%',
        backgroundColor: colors.WHITE,
        height: '100%',
        borderRadius: 40,
        display: 'flex',
        flexDirection: 'column'
        
    },

    ContainerTexts:{
        display:'flex',
        alignItems:'flex-start',
        marginLeft:20,
        marginTop: 37,
        marginBottom:22
         
    },

    TextRegister:{
        fontSize: 32,
        fontFamily: fonts.ROBOTO_BLACK,
        color: colors.PRIMARY,
    },

    TextPersonalData:{
        fontSize: 16,
        fontFamily:fonts.ROBOTO_MEDIUM,
        color: colors.GREY,
        marginLeft: 2
    },

    ContainerInputs:{
        marginLeft: 20
    },

    TextTitleInput:{
        marginBottom:8,
        marginTop:8
    }



})