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

                    <Input placeholder="email" />
                </View>


            </View>

        </View>
    )
}

export default PageRegister