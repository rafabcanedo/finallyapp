import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// import Screens
import Input from '../../app/Inputs';
import Submit from '../../app/Submit';

const SignUp = props => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <Image source={require('../../assets/images/register.png')}
             resizeMode="center" style={styles.image}
            />
            <Text style={styles.textTitle}>Vamos começar</Text>
            <Text style={styles.textBody}>Crie uma conta e entre para nossa comunidade</Text>
            <Input name="Nome completo" icon="user" />
            <Input name="Email" icon="envelope" />
            <Input name="Telefone" icon="phone" />
            <Input name="Senha" icon="lock" pass={true} />
            <Input name="Confirme sua senha" icon="lock" pass={true} />
            <Submit color="#79c2d0" title="CRIAR" />
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBody}>Você já tem uma conta?</Text>
                <Text style={[styles.textBody, {color: '#79c2d0'}]} onPress={() => navigation.navigate('Home')}
                > Entre Aqui</Text>
            </View>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 200,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Foundation',
        marginVertical: 5,
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation',
    },
});

export default SignUp;