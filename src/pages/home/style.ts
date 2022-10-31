import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { StyleSheet } from "react-native";
import globalStyles from "../../styles/LayoutStyles";


export default StyleSheet.create({
    ContainerRegister: {
        ...globalStyles.Containers
    },

    ButtonList:{
        marginTop: 35,
        padding: 5,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor: colors.PRIMARY,
        borderRadius: 16,   
    },

    TextButtonList:{
        fontSize: 16,
        marginTop:4
    },
    Logo:{
        ...globalStyles.Logo,
        flexBasis: '10%',
        marginTop: 50
        
    },
    Image:{
        width: 420,
        marginBottom: 30
        
    },

    ContainerNextStep:{
        ...globalStyles.ContainerInteractionUser,
        alignItems: 'center',
        height: 400

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