import React from "react";
import { View, Text, Alert } from 'react-native'
import Input from '../../shared/Input'
import Button from "../../shared/Button";
import colors from "../../../styles/colors";
import { applyCellMask , applyTelephoneMask } from "../../../utils/masks";


export interface IRegisterProps {
    onPress?: any
    styles: any
    onChange : (value : string, key : any) => void
    formData: any
}

const RegisterStep1: React.FC<IRegisterProps> = ({ onPress , styles, onChange , formData}) => {
    
    

    

   
    return (
        <View>
            <View style={styles.ContainerInputs}>

                <Text style={styles.TextTitleInput}>Nome</Text>
                <Input icon="person" placeholder="Nome" />

                <Text style={styles.TextTitleInput}>Telefone</Text>
                <Input 
                icon="settings-cell" 
                placeholder="(xx) xxxx-xxxx" 
                value={formData.telephone}
                keyboardType={'numeric'}
                onChangeText={(text: string) => onChange(applyTelephoneMask(text) , 'telephone')}
                />


                <Text style={styles.TextTitleInput}>Celular</Text>


                <Input 
                icon="settings-cell"                         
                placeholder="(xx) xxxxx-xxxx"
                value={formData.cell}
                onChangeText={(text : string) => onChange(applyCellMask(text), 'cell')}
                keyboardType={'numeric'}
                />

                <Text style={styles.TextTitleInput}>Email</Text>

                <Input 
                
                icon="email" 
                placeholder="Email"
                value={formData.email}
                onChangeText={(text: string) => onChange(text, "email")}
                keyboardType='email-address'
                 />
            </View>

            <View style={styles.ContainerButtonIconComeBack}>
                <Button
                    style={styles.ButtonIcon}
                    nameIcon="arrowright"
                    onPress={onPress}
                    iconColor={colors.WHITE}
                    iconSize={32}
                />
            </View>
        </View>

    )
}

export default RegisterStep1