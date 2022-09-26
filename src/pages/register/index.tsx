import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Input from '../../components/Input'

const PageRegister: React.FC = () => {

    return (
        <View style={styles.ContainerRegister}>
            <View style={styles.ContainerImage}>
                <Image style={styles.Image} source={require('../../../assets/register.png')} />
            </View>

            <View style={styles.ContainerUserRegister}>
                
                <View style={styles.ContainerTexts}>
                    <Text style={styles.TextRegister}>Inscrever-se</Text>
                    <Text style={styles.TextPersonalData}>Dados pessoais</Text>
                </View>

                <View style={styles.ContainerInputs}>

                    <Text style={styles.TextTitleInput}>Nome</Text>
                    <Input placeholder="Nome" />
                    <Text style={styles.TextTitleInput}>Telefone</Text>
                    <Input placeholder="Telefone" />
                    <Text style={styles.TextTitleInput}>Celular</Text>
                    <Input placeholder="Celular" />
                    <Text style={styles.TextTitleInput}>Email</Text>
                    <Input placeholder="Email" />
                </View>



            </View>

        </View>
    )
}

export default PageRegister