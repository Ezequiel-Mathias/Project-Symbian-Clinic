import React from "react";
import { View, Text } from 'react-native';
import Input from '../../shared/Input';
import Button from '../../shared/Button'
import { IPropsStepsGlobal } from '../../../pages/register'
import { applyTelephoneMask } from "../../../utils/masks";


const RegisterStep2: React.FC<IPropsStepsGlobal> = ({ styles, onChange, formData, }) => {

    const onSubmit = () => {
        if (formData.responsibleTelephone.length >= 1 || formData.responsibleName.length >= 1) {

            if (formData.responsibleName.length < 4) 
                return alert('Verifique o campo Nome algo está errado, seu nome deve conter mais de 4 caracteres !')
             else if (formData.responsibleTelephone.length <= 13) 
                return alert('Verifique o campo de Telefone algo está errado!')
             else 
                alert('Conta criada com sucesso')
            

        } else 
            alert('Conta criada com sucesso')
    }
    return (
        <View >
            <View style={styles.ContainerInputs}>

                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input
                    icon="person"
                    placeholder="Nome"
                    value={formData.responsibleName}
                    onChangeText={(text: string) => onChange((text), 'responsibleName')}
                />

                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input
                    icon="settings-cell"
                    placeholder="Telefone"
                    keyboardType="numeric"
                    value={formData.responsibleTelephone}
                    onChangeText={(text: string) => onChange(applyTelephoneMask(text), 'responsibleTelephone')}
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