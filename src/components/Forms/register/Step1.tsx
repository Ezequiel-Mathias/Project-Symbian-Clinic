import React from "react";
import { View, Text } from 'react-native'
import Input from '../../shared/Input'
import Button from "../../shared/Button";
import colors from "../../../styles/colors";

interface IRegisterProps {
    onPress?: any
    styles: any
}

const RegisterStep1: React.FC<IRegisterProps> = ({ onPress , styles }) => {
    return (
        <View>
            <View style={styles.ContainerInputs}>
                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input icon="person" placeholder="Nome" />
                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input icon="settings-cell" placeholder="Telefone" />
                <Text style={styles.TextTitleInput}>Celular</Text>
                <Input icon="settings-cell" placeholder="Celular" />
                <Text style={styles.TextTitleInput}>Email</Text>
                <Input icon="email" placeholder="Email" />
            </View>

            <View style={styles.ContainerButtonIconComeBack}>
                <Button
                    style={styles.ButtonIcon}
                    nameIcon="arrowright"
                    onPress={() => onPress()}
                    iconColor={colors.WHITE}
                    iconSize={32}
                />
            </View>
        </View>

    )
}

export default RegisterStep1