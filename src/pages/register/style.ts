import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import globalStyles from "../../styles/LayoutStyles";

export default StyleSheet.create({
    ContainerRegister: {
        ...globalStyles.Containers
    },

    ContainerImage:{
        marginTop: 50,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },

    Image:{
        width: 255,
        height:207
    },

    IconArrowLeft:{
        height: 40,
        marginLeft: -40,
        marginRight: 20
        
    },

    ContainerUserRegister:{
        ...globalStyles.ContainerInteractionUser
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
        color: colors.BLACK,
        marginLeft: 2
    },

    ContainerInputs:{
        marginLeft: 30,
        flexBasis: 300
    },

    TextTitleInput:{
        marginBottom:8,
        marginTop:8,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: 16
    },

    ButtonIcon:{
        ...globalStyles.ButtonIconComeBack
    },

    ContainerButtonIconComeBack:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        
        
    },

})