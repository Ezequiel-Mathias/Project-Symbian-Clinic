import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'


export default StyleSheet.create({
    ContainerSplash:{
        height: '100%',        
        width: '100%',
        backgroundColor: colors.PRIMARY,
        justifyContent:'center',
        alignItems:'center'
        
    },
    TextLogo:{
        fontSize: 40,
        color: colors.WHITE,
        fontFamily:fonts.ROBOTO_BLACK
    }
})