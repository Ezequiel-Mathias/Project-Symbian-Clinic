import React from "react";
import { View, Text } from 'react-native';
import Input from '../../shared/Input';
import Button from '../../shared/Button'


interface IRegisterStep2Props {
    onPress?: any,
    styles: any
}
const RegisterStep2: React.FC<IRegisterStep2Props> = ({ styles }) => {
    return (
        <View >
            <View style={styles.ContainerInputs}>
                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input icon="person" placeholder="Nome" />
                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input icon="settings-cell" placeholder="Telefone" />
            </View>

            <View style={styles.ContainerButtonIconComeBack}>
                <Button
                    text="Criar conta"
                    onPress={() => { }}
                    
                />
            </View>

        </View>
    )
}

export default RegisterStep2