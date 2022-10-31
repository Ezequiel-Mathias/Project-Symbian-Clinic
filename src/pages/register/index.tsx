import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import RegisterStep1 from '../../components/Forms/register/Step1'
import RegisterStep3 from "../../components/Forms/register/Step3";
import Button from '../../components/shared/Button'
import colors from "../../styles/colors";
import RegisterStep2 from "../../components/Forms/register/Step2";
import { IPageProps } from "../../navigators/Navigator";
import apiSybiam from "../../service/apiSybiam";


export interface IPropsStepsGlobal {
    NextStep?: any
    styles?: any
    onChange: (value: string, key: any) => void
    formData?: any
    handleOnChange: any
    cadastrar?: any
    Teste?: any
}

const PageRegister: React.FC<IPageProps> = ({ navigation }) => {

    const [inputs, setInputs] = useState({
        nome_paciente: '',
        telefone_paciente: '',
        celular_paciente: '',
        email_paciente: '',
        nome_responsavel: '',
        telefone_responsavel: ''
    })

    const handleOnChange = (text: string, input: any) => {

        if (input === 'celular_paciente') {
            const clear = text.replace(/[^0-9]+/g, '');
            const lengthTextInput = text.length
            if (lengthTextInput < 16) {
                setInputs((prevState) => (
                    { ...prevState, [input]: clear }
                ))
            }

        } else if (input === 'telefone_paciente' || input === 'telefone_responsavel') {
            const clear = text.replace(/[^0-9]+/g, '');
            const lengthTextInput = text.length
            if (lengthTextInput < 15) {
                setInputs((prevState) => (
                    { ...prevState, [input]: clear }
                ))
            }
        }
        else {
            setInputs((prevState) => (
                { ...prevState, [input]: text }
            ))
        }

    }

    const [formValues, setFormValues] = useState({
        name: "",
        telephone: "",
        cell: "",
        email: "",
        responsibleName: "",
        responsibleTelephone: "",
    })

    const [CurrentStep, setCureentStep] = useState(0)

    const handleInputChange = (text: string, key: keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key]: text
        })
    }

    const NextStep = () => {
        if (CurrentStep < 2) {
            setCureentStep(CurrentStep + 1)
        }
    }


    const cadastrar = () => {
        try {
            const response = apiSybiam.post('/registrarPaciente',
                {
                    nome_paciente: inputs.nome_paciente,
                    telefone_paciente: inputs.telefone_paciente,
                    celular_paciente: inputs.celular_paciente,
                    email_paciente: inputs.email_paciente,
                    nome_responsavel: inputs.nome_responsavel,
                    telefone_responsavel: inputs.telefone_responsavel
                }
            )
        } catch (error) {

        }
    }

    const Steps = [
        {
            desc: 'Dados Pessoais',
            component: <RegisterStep1 handleOnChange={handleOnChange} formData={formValues} onChange={handleInputChange} styles={styles} NextStep={NextStep} />
        },
        {
            desc: 'Dados Pessoais',
            component: <RegisterStep2 handleOnChange={handleOnChange} formData={formValues} onChange={handleInputChange} styles={styles} NextStep={NextStep} />,
        },
        {
            desc: 'Dados do responsável (Opcional)',
            component: <RegisterStep3 Teste={inputs} cadastrar={cadastrar} handleOnChange={handleOnChange} onChange={handleInputChange} styles={styles} formData={formValues} />,
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