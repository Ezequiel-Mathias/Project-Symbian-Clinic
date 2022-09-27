import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

const base = {
    width : 300,
    height : 38,
    margin : 16,
    
    borderRadius: 12,
    backgroundColor : colors.PRIMARY,
}

const buttonStyles = StyleSheet.create({
    ContainerButton:{
        display:"flex",
        alignItems:'center',
    },
    base : {
        ...base,
        backgroundColor: colors.PRIMARY
    },
    text : {
        height:30,
        color : colors.WHITE,
        fontSize: 24,
        fontFamily: fonts.ROBOTO_BLACK, 
    },
})

export default buttonStyles