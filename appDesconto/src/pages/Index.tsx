import React, {useState} from "react";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function Index(){

    //1º Passo - criar os states para receber os valores dos componentes TextInput
    let [qt_Produto, setqt_Produto] = useState(0)
    let [ds_Produto, setds_Produto] = useState(' ')
    let [valor, setValor] = useState(0) //valor unitário

    function calcular(){
        return qt_Produto * valor;
    }
    function desconto(){
        let desconto = 0;
        if (qt_Produto <= 5){
                desconto = calcular() * 0.02;
        }else if(qt_Produto <= 10){
            desconto = calcular() * 0.05;
        }else{
            desconto = calcular() * 0.10;
        }
        return desconto;
    }
    function total(){
        return calcular() - desconto();
    }
    function escrever(){
        alert('Total: R$'+ calcular()
        +   '\nDesconto: R$' + desconto()
        +   '\nPreço final: R$' + total())

    }
    return(
        <View style={styles.container}>
            <Text style={styles.subTitle}>Descrição do Produto</Text>
            <TextInput style={styles.TextInput} onChangeText={(texto:string) => setds_Produto(texto)} placeholder="Digite a Descrição do produto"/>
            <Text style={styles.subTitle}>Quantidade</Text>
            <TextInput style={styles.TextInput} onChangeText={(texto:string) => setqt_Produto(parseInt(texto))} placeholder="Digite a quantidade"/>
            <Text style={styles.subTitle}>Valor</Text>
            <TextInput style={styles.TextInput} onChangeText={(texto:string) => setValor(parseFloat(texto))} placeholder="Digite o valor do produto"/>
            <TouchableOpacity style={styles.button} onPress={escrever}>
                <Text style={styles.buttonText}>Total</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Index;
const  styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:"center"
    },
    title:{
        fontSize:20,
        marginTop:20,
        fontWeight:'bold',
        color: '#808080'
    },
    subTitle: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: "300",
        color: '#808080'
    },
    TextInput:{
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        fontSize: 15,
        borderBottomColor: '#9EE0FF',
        borderBottomWidth: 2
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#9AE0FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
        color:'#FFF',
        fontWeight:"bold",
        alignItems: 'center'
    }
});


