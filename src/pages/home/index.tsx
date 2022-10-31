import React  from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import Button from '../../components/shared/Button'
import colors from '../../styles/colors'
import {IPageProps} from "../../navigators/Navigator"

const PageHome: React.FC<IPageProps> = ({navigation}) => {

   
    return (
        <View style={styles.ContainerRegister}>
            <Text style={styles.Logo}>Symbian Clinic</Text>
            <View >
                <Image
                    style={styles.Image}
                    source={require('../../../assets/register.png')}
                />
            </View>

            <View style={styles.ContainerNextStep}>
                <Text style={styles.RegisterText}>Cadastre-se</Text>
                <Text style={styles.CatchphraseText}>Cuidar da sua saúde e bem-estar também é se amar.</Text>

                <Button 
                 style={styles.ButtonIconComeBack}
                 nameIcon="arrowright" 
                 onPress={()=> {navigation.navigate('register')}}
                 iconColor={colors.WHITE}
                 iconSize={32}
                 />

            <Button 
                 text='Lista de todos os pacientes'
                 style={styles.ButtonList}
                 onPress={() => {navigation.navigate('patients')}}
                 textStyle={styles.TextButtonList}
                 />
            </View>

            


        </View>
    )

}


export default PageHome