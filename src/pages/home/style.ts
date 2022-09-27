import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { StyleSheet } from "react-native";
import globalStyles from "../../styles/globalStyles";


export default StyleSheet.create({
    ContainerRegister: {
        ...globalStyles.Containers
    },
    Logo:{
        color: colors.WHITE,
        fontSize: 39,
        fontFamily: fonts.ROBOTO_BOLD,
        marginTop: 82,
        flexBasis: '15%'
    },
    Image:{
        width: 420,
        marginBottom: 30
    },

    ContainerNextStep:{
        ...globalStyles.ContainerInteractionUser,
        alignItems: 'center'
    },
    RegisterText:{
        fontSize: 32,
        color: colors.PRIMARY,
        fontFamily: fonts.ROBOTO_BLACK,
        marginTop:8
    },

    CatchphraseText:{
        fontSize: 16,
        color: colors.PRIMARY,
        fontFamily: fonts.ROBOTO_BLACK,
        width: 244,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 40
    },

    ButtonIconComeBack:{
        width: 50,
        height: 50,
        backgroundColor: colors.PRIMARY,
        borderRadius: 100,
        display:"flex",
        paddingTop: 8,
        alignItems:'center'
    }
    
})