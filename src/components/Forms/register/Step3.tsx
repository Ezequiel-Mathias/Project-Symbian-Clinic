import React, { useState } from "react";
import { View, Text } from 'react-native';
import Input from '../../shared/Input';
import Button from '../../shared/Button'
import { IPropsStepsGlobal } from '../../../pages/register'
import { applyTelephoneMask } from "../../../utils/masks";
import { useNavigation } from '@react-navigation/native';



const RegisterStep2: React.FC<IPropsStepsGlobal> = ({ styles, onChange, formData, handleOnChange, cadastrar , Teste }) => {

    const navigation = useNavigation()

     console.log(
        Teste.nome_paciente ,
        Teste.celular_paciente ,
        Teste.telefone_paciente,
        Teste.email_paciente,
        Teste.nome_responsavel,
        Teste.telefone_responsavel
        ) 
    

    const onSubmit = () => {
        if (formData.responsibleTelephone.length >= 1 || formData.responsibleName.length >= 1) {

            if (formData.responsibleName.length < 4)
                return alert('Verifique o campo Nome algo está errado, seu nome deve conter mais de 4 caracteres !')
            else if (formData.responsibleTelephone.length <= 13)
                return alert('Verifique o campo de Telefone algo está errado!')
            else
                navigation.navigate('patients');


        } else
            navigation.navigate('patients');
            cadastrar();
    }
    return (
        <View >
            <View style={styles.ContainerInputs}>

                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input
                    icon="person"
                    placeholder="Nome"
                    
                    onChangeText={(text: string) => {
                        onChange((text), 'responsibleName')
                        handleOnChange(text, 'nome_responsavel')  
                    }
                    }
                />

                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input
                    icon="settings-cell"
                    placeholder="(xx) xxxx-xxxx"
                    keyboardType="numeric"
                    value={formData.responsibleTelephone}
                    onChangeText={(text: string) => {
                        onChange(applyTelephoneMask(text), 'responsibleTelephone')
                        handleOnChange(text, 'telefone_responsavel') 
                    }
                    }
                />
            </View>

            <View style={styles.ContainerButtonIconComeBack}>
                <Button
                    text="Criar conta"
                    onPress={onSubmit}

                />
            </View>

        </View>
    )
}

export default RegisterStep2



{/*  */ }