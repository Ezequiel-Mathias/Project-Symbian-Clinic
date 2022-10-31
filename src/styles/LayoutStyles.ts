import colors from "./colors";
import fonts from "./fonts";
import { StyleSheet } from "react-native";


 const globalStyles = StyleSheet.create({
    
    Containers:{
        width: '100%',
        height: '100%',
        backgroundColor: colors.PRIMARY,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    ButtonIconComeBack:{
        width: 50,
        height: 50,
        backgroundColor: colors.PRIMARY,
        borderRadius: 100,
        display:"flex",
        paddingTop: 8,
        alignItems:'center'

    },

    ContainerInteractionUser:{
        width: '100%',
        backgroundColor: colors.WHITE,
        height: '100%',
        borderRadius: 40,
        display: 'flex',
        flexDirection: 'column'
    },

    Logo:{
        color: colors.WHITE,
        fontSize: 39,
        fontFamily: fonts.ROBOTO_BOLD,
        marginTop: 82,
        flexBasis: '15%'
    },
})

export default globalStyles
