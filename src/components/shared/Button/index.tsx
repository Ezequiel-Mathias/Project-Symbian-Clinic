import {TouchableOpacity, View , Text} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import buttonStyles from "./style";


interface IButtonProps {
    onPress : () => void,
    style? : any
    textStyle? : object | object[]
    iconSize? : number,
    iconColor? : string
    nameIcon? : keyof typeof AntDesign.glyphMap
    text?: string
}

const ButtonComponent : React.FC<IButtonProps> = ({onPress, style, nameIcon, iconSize, iconColor , textStyle , text}) => {
   
    return (
        <TouchableOpacity
            activeOpacity={.75}
            onPress={onPress}
            style={style || buttonStyles.base}>
            <View style={buttonStyles.ContainerButton}>
                {nameIcon && <AntDesign name={nameIcon} size={iconSize} color={iconColor}/>}
                <Text style={[buttonStyles.text,textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonComponent;