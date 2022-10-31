import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import ButtonComponent from "../../components/shared/Button";
import apiSybiam from "../../service/apiSybiam";
import style from "./style";
import colors from "../../styles/colors";
import { IPageProps } from "../../navigators/Navigator";
import { applyTelephoneMask, applyCellMask } from '../../utils/masks'
import { Alert } from "react-native";

const PagePatients: React.FC<IPageProps> = ({ navigation }) => {

    const [pacientes, setPacientes] = useState([])
    const [atualizando, setAtualizando] = useState(false)

    

    useEffect(
        () => {

            apiSybiam.get('/listarPaciente').
                then(
                    (data) => {
                        setPacientes(data.data)
                    }
                ).catch(
                    (error) => console.log(error)
                )
        }, []

    )






    const excluir = (cod_paciente: number) => {

        Alert.alert(
            "Deseja exluir o registro desse paciente ?",
            "Caso o registro seja excluido não terá como recupera-lo novamente !",
            [
              // The "Yes" button
              {
                text: "Sim",
                onPress: () => {
                    try {
                        apiSybiam.delete(`/excluirLivros/${cod_paciente}`)
        
                    } catch (error) {
        
                    }
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "Não",
              },
            ]
          );
    
    }

    return (

        <ScrollView
        >
            <View style={style.containerPagePatients}>
                <View style={style.containerIconComeback}>
                    <ButtonComponent
                        style={style.IconArrowLeft}
                        iconSize={44}
                        nameIcon="arrowleft"
                        onPress={() => { navigation.navigate('home') }}
                        iconColor={colors.WHITE}
                    />
                </View>

                <Text style={style.Logo}>Symbian Clinic</Text>
                <Text style={style.Paragraph}>Lista de todos os pacientes</Text>
                {
                    pacientes.map((pacientes: any) => (

                        <View style={style.containerDicePatients} key={pacientes.cod_paciente}>
                            <View style={style.Dice}>

                                <View style={style.ContainerDicePatientsOfContact}>
                                    <Text style={style.DicePatients}>Nome:</Text>
                                    <Text style={style.DicePatientsOfContact}>{pacientes.nome_paciente}</Text>
                                </View>

                                <View style={style.ContainerDicePatientsOfContact}>
                                    <Text style={style.DicePatients}>Telefone:</Text>

                                    <Text style={style.DicePatientsOfContact}>{
                                        applyTelephoneMask(pacientes.telefone_paciente)
                                    }</Text>
                                </View>

                                <View style={style.ContainerDicePatientsOfContact}>
                                    <Text style={style.DicePatients}>Celular:</Text>
                                    <Text style={style.DicePatientsOfContact}>{
                                        applyCellMask(pacientes.celular_paciente)
                                    }</Text>
                                </View>

                                <View style={style.ContainerDicePatientsOfContact}>
                                    <Text style={style.DicePatients}>Email:</Text>
                                    <Text style={style.DicePatientsOfContact}>{pacientes.email_paciente}</Text>
                                </View>

                                {pacientes.nome_responsavel &&
                                    <View>
                                        <View style={style.ContainerDicePatientsOfContact}>
                                            <Text style={style.DicePatients}>Nome do responsavel:</Text>
                                            <Text style={style.DicePatientsOfContact}>{pacientes.nome_responsavel}</Text>
                                        </View>

                                        <View style={style.ContainerDicePatientsOfContact}>
                                            <Text style={style.DicePatients}>Telefone do responsavel:</Text>
                                            <Text style={style.DicePatientsOfContact}>{
                                                applyTelephoneMask(pacientes.telefone_responsavel)
                                            }
                                            </Text>
                                        </View>
                                    </View>
                                }

                                <View style={style.ContainerButtons}>
                                    <ButtonComponent onPress={() => {
                                        excluir(pacientes.cod_paciente)


                                    }} text={'Excluir'} textStyle={style.TextButtonDelete} style={style.ButtonDelete} />
                                    <ButtonComponent onPress={() => { }} text={'Editar'} textStyle={style.TextButtonEdit} style={style.ButtonEdit} />
                                </View>

                            </View>
                        </View>

                    )
                    )

                }

            </View>
        </ScrollView>
    )
}

export default PagePatients