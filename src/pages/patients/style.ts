import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import globalStyles from "../../styles/LayoutStyles";


export default StyleSheet.create({
    containerPagePatients:{
        ...globalStyles.Containers
    },

    Logo:{
        ...globalStyles.Logo,
        marginTop: 20
        
    },

    Paragraph:{
        fontSize: 16,
        color: colors.WHITE,
        fontFamily: fonts.ROBOTO_BOLD,
        marginBottom: 22
        
    },

    containerDicePatients:{
        width:300,
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        marginBottom: 16
        
    },

    Dice:{
        margin:20
    },

    DicePatients:{
        fontFamily: fonts.ROBOTO_BOLD,
        fontSize: 16,
        marginRight: 8
    },

    DicePatientsOfContact:{
        fontFamily: fonts.ROBOTO_BOLD,
        fontSize: 15,
        
       
    },

    ContainerDicePatientsOfContact:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        flexWrap: 'wrap'
    },

    ButtonDelete:{
        backgroundColor: colors.RED,
        borderRadius:8,
        width:108,
        marginRight:20
          
    },

    TextButtonDelete:{
        fontSize:16,
        paddingTop:4
    },

    ButtonEdit:{
        backgroundColor: colors.PRIMARY,
        borderRadius:8,
        width:108,  
    },

    TextButtonEdit:{
        fontSize:16,
        paddingTop:4
    },

    ContainerButtons:{
        marginTop:14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    IconArrowLeft:{
        height: 40,
        marginLeft: -40,
        marginRight: 20,
        marginTop: 70
        
    },

    containerIconComeback:{
        width: '69%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 100
        
    }


})    