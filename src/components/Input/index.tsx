import React from "react";
import {View , Text} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import styles from './style'

interface IPropsInput{
    placeholder?: string,
    Inputstyle?:any 
}

const Input:React.FC<IPropsInput> = ({placeholder , Inputstyle}) => {
    return (
        <View >
            <TextInput  
            placeholder={placeholder} 
            style={ Inputstyle ? Inputstyle : styles.StandardStyleInput}
            
            />
        </View>
    )
}

export default Input