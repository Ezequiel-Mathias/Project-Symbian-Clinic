import React from "react";
import { View, Text, Alert } from 'react-native'
import Input from '../../shared/Input'
import Button from "../../shared/Button";
import colors from "../../../styles/colors";
import { applyTelephoneMask } from "../../../utils/masks";
import { IPropsStepsGlobal } from '../../../pages/register'
import { isEmail } from "../../../utils/validation";

const RegisterStep1: React.FC<IPropsStepsGlobal> = ({ NextStep, styles, onChange, formData, handleOnChange }) => {

    const onSubmit = () => {
        if (formData.name.length < 4) {
            return alert('Verifique o campo Nome algo está errado, seu nome deve conter mais de 4 caracteres!')
        } else if (formData.telephone.length <= 13) {
            return alert('Verifique o campo de Telefone algo está errado!')
        }
        else {
            NextStep()
        }

    }

    return (
        <View>
            <View style={styles.ContainerInputs}>

                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input
                    icon="person"
                    placeholder="Nome"
                    value={formData.name}
                    keyboardType={'default'}
                    onChangeText={(text: string) => {
                        onChange((text), 'name')
                        handleOnChange(text, 'nome_paciente')
                    }}
                />

                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input
                    icon="settings-cell"
                    placeholder="(xx) xxxx-xxxx"
                    value={formData.telephone}
                    keyboardType={'numeric'}
                    onChangeText={(text: string) => {
                        onChange(applyTelephoneMask(text), 'telephone')
                        handleOnChange(text, 'telefone_paciente')
                    }}
                />

            </View>

            <View style={styles.ContainerButtonIconComeBack}>
                <Button
                    style={styles.ButtonIcon}
                    nameIcon="arrowright"
                    onPress={onSubmit}
                    iconColor={colors.WHITE}
                    iconSize={32}
                />
            </View>
        </View>

    )
}

export default RegisterStep1