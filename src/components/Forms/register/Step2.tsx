import React from "react";
import { View, Text } from "react-native";
import Input from "../../shared/Input";
import ButtonComponent from "../../shared/Button";
import { applyCellMask } from "../../../utils/masks";
import { isEmail } from '../../../utils/validation';
import colors from "../../../styles/colors";
import { IPropsStepsGlobal } from '../../../pages/register'

const RegisterStep2: React.FC<IPropsStepsGlobal> = ({ styles, onChange, formData, NextStep, handleOnChange }) => {


    const onSubmit = () => {

        if (formData.cell.length <= 14) {
            return alert('Verifique o campo de Celular algo está errado!')
        }

        else if (!isEmail(formData.email)) {
            return alert('Verifique o campo de E-mail algo está errado!')

        } else {
            NextStep()
        }

    }

    return (
        <View>
            <View style={styles.ContainerInputs}>

                <Text style={styles.TextTitleInput}>Celular</Text>
                <Input
                    icon="settings-cell"
                    placeholder="(xx) xxxxx-xxxx"
                    value={formData.cell}
                    onChangeText={(text: string) => {
                        onChange(applyCellMask(text), 'cell')
                        handleOnChange(text, 'celular_paciente')


                    }}
                    keyboardType='numeric'
                />

                <Text style={styles.TextTitleInput}>Email</Text>
                <Input
                    icon="email"
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text: string) => {
                        onChange(text, "email")
                        handleOnChange(text, 'email_paciente')
                    }}
                    keyboardType='email-address'
                />
            </View>


            <View style={styles.ContainerButtonIconComeBack}>
                <ButtonComponent
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

export default RegisterStep2