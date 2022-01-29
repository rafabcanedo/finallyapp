import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

// vector icons
import { Entypo } from '@expo/vector-icons';

// import Inputs an Submit
import Input from '../../app/Inputs';
import Submit from '../../app/Submit';

/*
 OPÇAO LOGO ANDROID E IOS TAMANHOS DIFERENTES
*/

////////////////////////// CÓDIGO //////////////////////////
const Login = props => {
    const { doLogin } = props;
    {/*/////////////////////////////////////////////////////////////////////////// */}
    return (
     <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
            <Image
            source={require('../../assets/images/login.png')}
            resideMode="center"
            style={styles.image} />
            <Text style={styles.textTitle}>Seja Bem Vindo</Text>
            <Text style={styles.textBody}>Já está cadastrado?</Text>
            <View style={styles.viewNaosei} />
            <Input name="Email" icon="user" />
            <Input name="Senha" icon="lock" pass={true} />
            { /* TENTEI COLOCAR UM TouchableOpacity E O TEXTFORGET CENTRALIZOU */}
            <View style={styles.viewForget}>
                <Text style={styles.textForget}>Esqueceu sua senha?</Text>
            </View>
        
            <Submit title="Entrar" color="#79c2d0" />
          
        <TouchableOpacity style={styles.facebookContainer}>
            <Entypo name="facebook-with-circle" size={24} color="#79c2d0" />
            <Text style={styles.facebookText} onPress={doLogin}>
                Continue com o Facebook
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.createAccount}>
                <Text style={styles.textBody}>Não é cadastrado?</Text>
                <Text style={[styles.textBody, {color: '#79c2d0'}]} onPress={() => props.navigation.navigate('SignUp')}
                > Cadastrar</Text>
            </View>
        </TouchableOpacity>

        </View>
     </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor: 'white',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 250, // tamanho
        height: 250, // + abaixa a logo
        marginVertical: 4,
        marginTop: '5%', // abaxa o logo da statusbar
    },
    textTitle:{
        fontFamily: 'Roboto', // test font
        fontSize: 40,
        marginVertical: 10,
    },
    textBody:{
        fontFamily: 'Roboto', // test font
        fontSize: 16,
    },
    viewNaosei:{
        marginTop: 20,
    },
    viewForget:{
        width: '90%',
    },
    textForget:{
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#79c2d0',
        alignSelf: 'flex-end',
    },
    createAccount:{
        flexDirection: 'row',
        marginVertical: 12,
    },
    facebookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
    },
    facebookText:{
        color: '#79c2d0',
        paddingLeft: 8,
        fontSize: 15,
    },
});

export default Login;