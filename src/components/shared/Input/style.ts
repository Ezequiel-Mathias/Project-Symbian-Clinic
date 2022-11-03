import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ContainerInput:{
        width: 345,
        height: 42,
        backgroundColor: colors.LIGTH_PRIMARY,
        borderRadius:8,
        paddingLeft: 16,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: 16,
        textDecorationLine: "none",
        display: "flex",
        flexDirection:'row',
        
    },

    
    StandardStyleInput:{
        flex:1,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: 16,
        textDecorationLine: "none",
        
     }
})
