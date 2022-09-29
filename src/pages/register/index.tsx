import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import RegisterStep1 from '../../components/Forms/register/Step1'
import RegisterStep3 from "../../components/Forms/register/Step3";
import Button from '../../components/shared/Button'
import colors from "../../styles/colors";
import RegisterStep2 from "../../components/Forms/register/Step2";

export interface IPropsSteps{
    NextStep?: any
    styles: any
    onChange : (value : string, key : any) => void
    formData: any
}


const PageRegister: React.FC = ({navigation}) => {

    const [formValues, setFormValues] = useState({
        email : "",
        cell : "",
        telephone : "",
        name : "",
        
    })

    const [CurrentStep, setCureentStep] = useState(0)

    const handleInputChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const NextStep = () => {
        if(CurrentStep < 2){
            setCureentStep(CurrentStep + 1)
        }
    }

    const onSubmit = async () => {
        if(formValues.name.length < 4){
            return alert ('Verifique o campo Nome algo está errado, seu nome deve conter mais de 4 letras !')
        }else if(formValues.telephone.length <= 13){
            return alert ('Verifique o campo de Telefone algo está errado!')
        }
        else{
           NextStep()
        }
        
    }

    const Steps = [
        {
            desc: 'Dados Pessoais',
            component: <RegisterStep1 formData={formValues} onChange={handleInputChange} styles={styles} onPress={onSubmit}/> 
        },
        {
            desc: 'Dados Pessoais',
            component: <RegisterStep2 formData={formValues} onChange={handleInputChange} styles={styles} NextStep={NextStep} />,
        },
        {
            desc: 'Dados do responsável',
            component: <RegisterStep3 styles={styles} />,
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