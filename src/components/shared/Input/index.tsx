import React from "react";
import { View } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import styles from './style'
import { MaterialIcons } from '@expo/vector-icons'
import {useState} from 'react'

interface IPropsInput {
    placeholder?: string,
    Inputstyle?: any
    icon?: keyof typeof MaterialIcons.glyphMap
    color?: any
    iconSize?: number
    keyboardType ?: "default" | "numeric" | "email-address"
    value?: string
    validate? : () => boolean
    onChangeText?: (text : string) => void

}

const Input: React.FC<IPropsInput> = ({ placeholder, Inputstyle, icon, color, iconSize, validate , onChangeText , value , keyboardType}) => {
    const [status, setStatus] = useState('');

   /*  const onBlur = () => {
        if ( !validate  ) {
            console.log('teste2')
        } else {
            console.log('teste1')
        }
    } */

    return (
        <View style={styles.Container}>
            {icon && <MaterialIcons name={icon} size={iconSize || 24} color={color} style={{ marginTop: 9 , marginRight: 10 }} />}
            <TextInput
                placeholder={placeholder}
                style={Inputstyle ? Inputstyle : styles.StandardStyleInput}
                keyboardType={keyboardType}
                value={value}
                
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input