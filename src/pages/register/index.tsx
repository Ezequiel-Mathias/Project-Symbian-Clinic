import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Step1 from '../../components/Forms/register/Step1'
import Step2 from "../../components/Forms/register/Step2";
import Button from '../../components/shared/Button'
import { isEmail } from '../../utils/validation';
import colors from "../../styles/colors";

const PageRegister: React.FC = ({navigation}) => {

    const [formValues, setFormValues] = useState({
        email : "",
        cell : "",
        telephone : "",
        
    })

    const [CurrentStep, setCureentStep] = useState(0)

    const handleInputChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const NextStep = () => {
        if(CurrentStep < 1){
            setCureentStep(CurrentStep + 1)
        }
    }

    const onSubmit = async () => {
        if(formValues.cell.length <= 14){
            return alert ('Verifique o campo de Celular algo está errado!')
        }
        else if(formValues.telephone.length <= 13){
            return alert ('Verifique o campo de Telefone algo está errado!')
        }else if(!isEmail(formValues.email)){
            return alert ('Verifique o campo de E-mail algo está errado!')

        }else{
           NextStep()
        }
        
    }

    const Steps = [
        {
            desc: 'Dados pessoais',
            component: <Step1 formData={formValues} onChange={handleInputChange} styles={styles} onPress={onSubmit}/> 
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