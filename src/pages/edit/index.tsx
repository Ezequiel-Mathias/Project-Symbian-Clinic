import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPageProps } from '../../navigators/Navigator'
import style from './style'
import { applyTelephoneMask } from '../../utils/masks'
import { applyCellMask } from '../../utils/masks'
import apiSybiam from '../../service/apiSybiam'
import Input from '../../components/shared/Input'
import ButtonComponent from '../../components/shared/Button'
import colors from '../../styles/colors'

const PageEdit: React.FC<IPageProps> = ({ route, navigation }) => {

    const [inputs, setInputs] = React.useState({
        nome_paciente: '',
        telefone_paciente: '',
        celular_paciente: '',
        email_paciente: '',
        nome_responsavel: '',
        telefone_responsavel: '',
    });
    const { cod_livro } = route.params

    useEffect(
        () => {
            apiSybiam.get(`/listarRegistros/${cod_livro}`)
                .then(
                    (data) => setInputs(data.data[0])
                )
        }, []
    )

    const handlerOnChange = (text: any, input: any) => {

        setInputs((prevState) => (
            console.log(prevState),
            { ...prevState, [input]: text }
        ));

    }
    return (
        
        <View style={style.containerGlobal}>
            <ButtonComponent
                        style={style.IconArrowLeft}
                        iconSize={44}
                        nameIcon="arrowleft"
                        onPress={() => { navigation.navigate('patients') }}
                        iconColor={colors.WHITE}
            />
            <View style={style.containerDicePatients} >
                <View style={style.Dice}>

                    <View style={style.ContainerDicePatientsOfContact}>
                        <Text style={style.DicePatients}>Nome:</Text>
                        <Input style={style.ContainerInputs}
                            onChangeText={(text) => handlerOnChange(text, 'nome_paciente')}
                        />

                    </View>

                    <View style={style.ContainerDicePatientsOfContact}>
                        <Text style={style.DicePatients}>Telefone:</Text>
                        <Input style={style.ContainerInputs}
                            onChangeText={(text) => handlerOnChange(text, 'telefone_paciente')}
                        />

                    </View>

                    <View style={style.ContainerDicePatientsOfContact}>
                        <Text style={style.DicePatients}>Celular:</Text>
                        <Input style={style.ContainerInputs}
                            onChangeText={(text) => handlerOnChange(text, 'celular_paciente')}
                        />

                    </View>

                    <View style={style.ContainerDicePatientsOfContact}>
                        <Text style={style.DicePatients}>Email:</Text>
                        <Input style={style.ContainerInputs}
                            onChangeText={(text) => handlerOnChange(text, 'email_paciente')} />
                    </View>


                    <View>
                        <View style={style.ContainerDicePatientsOfContact}>
                            <Text style={style.DicePatients}>Nome do responsavel:</Text>
                            <Input style={style.ContainerInputs}
                                onChangeText={(text) => handlerOnChange(text, 'nome_responsavel')} />
                        </View>

                        <View style={style.ContainerDicePatientsOfContact}>
                            <Text style={style.DicePatients}>Telefone do responsavel:</Text>
                            <Input style={style.ContainerInputs}
                                onChangeText={(text) => handlerOnChange(text, 'telefone_responsavel')}
                            />
                        </View>
                    </View>
                </View>

                <ButtonComponent onPress={() => {

                }} text={'Excluir'} textStyle={style.TextButtonEdit} style={style.ButtonEdit} />
            </View>
        </View>


    )
}

export default PageEdit