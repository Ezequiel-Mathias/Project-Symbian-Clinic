import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Step1 from '../../components/Forms/register/Step1'
import Step2 from "../../components/Forms/register/Step2";
import Button from '../../components/shared/Button'
import colors from "../../styles/colors";

const PageRegister: React.FC = ({navigation}) => {

    const [CurrentStep, setCureentStep] = useState(0)

    const NextStep = () => {
        if(CurrentStep < 1){
            setCureentStep(CurrentStep + 1)
        }
    }

    const Steps = [
        {
            desc: 'Dados pessoais',
            component: <Step1 styles={styles} onPress={NextStep}/>,
        },
        {
            desc: 'Dados do responsável',
            component: <Step2 styles={styles} />,
        },

    ]

    



    return (
        <View style={styles.ContainerRegister}>
            <View style={styles.ContainerImage}>
            <Button 
                style={styles.IconArrowLeft}
                iconSize={44} 
                nameIcon="arrowleft" 
                onPress={() => CurrentStep >= 1 ? setCureentStep(CurrentStep - 1) : navigation.navigate('home')}
                iconColor={colors.WHITE}
                />
                <Image style={styles.Image} source={require('../../../assets/register.png')} />
                
            </View>

            <View style={styles.ContainerUserRegister}>

                <View style={styles.ContainerTexts}>
                    <Text style={styles.TextRegister}>Inscrever-se</Text>
                    <Text style={styles.TextPersonalData}>{Steps[CurrentStep].desc}</Text>
                </View>

                {Steps[CurrentStep].component}



            </View>

        </View>
    )
}

export default PageRegister