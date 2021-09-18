import React, {useState} from "react";

//importar os componentes do rect native
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar} from "react-native";

function TelaCadastro(){

//CRIAR OS STATES QUE IRAO RECEBER OS DADOS DOS TEXTIMPUTS
let [nome, setNome] = useState('');
let [email, setEmail] = useState('');
let [senha, setSenha] = useState('');

//get;set - Getters & Setters
//getNome(), setNome('Adilson')

    return(
    <View style={styles.container}>
        <StatusBar/>

        <Image source = {require('../../../assets/dente.png')} style = {{width:128, height:128}}/>

        <Text style={styles.title}>Encontre um Dentista</Text>
        <Text style={styles.subTitle}>Os melhores dentistas em um só lugar!</Text>
        <Text style={styles.textConta}>CRIAR UMA CONTA</Text>

        <TextInput style={styles.textInput}placeholder = "Digite seu nome"/>
        <TextInput style={styles.textInput}placeholder = "Digite seu e-mail"/>
        <TextInput style={styles.textInput}placeholder = "Insira sua senha"/>

        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Já possui uma conta? Acesse o login</Text>
    </View>
    );
}

export default TelaCadastro;

//minhas regras de estilização
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#808080',
        marginTop: 20
    },

    subTitle:{
        fontSize: 16,
        fontWeight: '300',
        color: '#808080',
        marginTop: 10

    },

    textConta:{
        fontSize:20,
        fontWeight: 'bold',
        color: '#9AE0FF',
        marginTop: 80

    },

    button:{
        width: 200,
        height: 50,
        backgroundColor: '#9AE0FF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },

    buttonText:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    textInput:{
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        fontSize: 15,
        borderBottomColor: '#9ae0ff',
        borderBottomWidth: 2
    }

})

