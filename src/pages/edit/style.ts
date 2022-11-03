import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import globalStyles from "../../styles/LayoutStyles";


export default StyleSheet.create({

    ContainerInputs: {
        width: 230,
        height: 32,
        backgroundColor: colors.GREY,
        borderRadius: 8,
        paddingLeft: 16,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: 16,
        textDecorationLine: "none",
        display: "flex",
        flexDirection: 'row',
    },

    containerGlobal: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDicePatients: {
        width: 300,
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        marginBottom: 16

    },

    Dice: {
        margin: 20
    },

    ContainerDicePatientsOfContact: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        flexWrap: 'wrap'
    },

    DicePatients: {
        fontFamily: fonts.ROBOTO_BOLD,
        fontSize: 16,
        marginRight: 8
    },

    ButtonEdit: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 8,
        width: 108,
        marginLeft: 100,
        marginBottom: 10
    },

    TextButtonEdit: {
        fontSize: 16,
        paddingTop: 4
    },

    IconArrowLeft:{
        height: 40,
        marginLeft: -40,
        marginRight: 20,
        marginTop: 70
        
    },

})   