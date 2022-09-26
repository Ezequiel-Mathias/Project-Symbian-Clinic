import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base = {
    width : 300,
    height : 48,
    margin : 16,
    borderRadius: 12,
    backgroundColor : colors.PRIMARY,
}

const buttonStyles = StyleSheet.create({
    base : {
        ...base,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor: colors.PRIMARY
    },
    text : {
        color : colors.WHITE,
        fontSize: 20
    },
})

export default buttonStyles