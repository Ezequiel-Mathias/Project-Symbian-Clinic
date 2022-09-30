import {Text , View } from 'react-native'
import React from 'react'
import style from './style'

const PageSplash : React.FC = () => {
    return(
        <View style={style.ContainerSplash}>
            <Text style={style.TextLogo}>Symbian Clinic</Text>
        </View>
    )
}

export default PageSplash