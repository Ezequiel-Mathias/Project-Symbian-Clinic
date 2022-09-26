import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    ContainerRegister: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.PRIMARY,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
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
        width: '100%',
        backgroundColor: colors.WHITE,
        height: '100%',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
        
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