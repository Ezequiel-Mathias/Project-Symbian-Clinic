import React from "react";
import { View , Pressable} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import styles from './style'
import { MaterialIcons } from '@expo/vector-icons'

interface IPropsInput {
    placeholder?: string,
    Inputstyle?: any
    icon?: keyof typeof MaterialIcons.glyphMap
    color?: any
    iconSize?: number
}

const Input: React.FC<IPropsInput> = ({ placeholder, Inputstyle, icon, color, iconSize }) => {
    return (
        <View style={styles.Container}>
            {icon && <MaterialIcons name={icon} size={iconSize || 24} color={color} style={{ marginTop: 9 , marginRight: 10 }} />}
            <TextInput
                placeholder={placeholder}
                style={Inputstyle ? Inputstyle : styles.StandardStyleInput}
            />
        </View>
    )
}

export default Input