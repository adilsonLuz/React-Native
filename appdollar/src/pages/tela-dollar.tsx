import React, {useState} from "react";

//importar os componentesdo react Native
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from "react-native";

function TelaDollar () {

    //criar os STATES para receber o valor digitado no test input
    //Como criar um STATE
    let [dollar, setDollar] = useState(0);
    let [cotacao, setCotacao] = useState(5.33);
    let[totalReal, setTotalReal] = useState(0);

    //vamos criar a função que calcula a conversão
    function calcular(){
        totalReal = dollar / cotacao;

        alert(`O total em dolar é US$ ${totalReal.toFixed(2)}`);
    }

    //3 passo - receber o valor do testinput no state dollar
    //(texto:string) => setDollar(Number(texto));
    

    //arrow function =>


    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>

            <Image source={require('../../assets/dollar.png')} style={{width: 128, height: 128}}/> 

            <Text style={styles.title}>Conversor de Dollar</Text>
            <Text style={styles.subTitle}>O melhor aplicativo para converter para Dollar</Text>

            <TextInput style={styles.TextInput} onChangeText={(texto:string) => setDollar(Number(texto))}
            placeholder="Entre com o valor em Dollar"/>

            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text>CONVERTER</Text>
            </TouchableOpacity>


        </View>
    )
}

export default TelaDollar;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#808080'
    },
    subTitle: {
        fontSize: 16,
        marginTop:20,
        fontWeight: "300",
        color: '#808080'
    },
    textConta: {
        fontSize: 20,
        marginTop:80,
        fontWeight: 'bold',
        color: '#9AE0FF'
    },
    TextInput: {
        width: 300,
        marginTop: 30,
        marginBottom: 10,
        padding: 5,
        fontSize: 15,
        borderBottomColor: '#9AE0FF',
        borderBottomWidth: 2
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#9AE0FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    }
});