import React, {useState} from "react";
//Import dos componentes do react-native
import {View, Image, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput} from "react-native";
//Import do icone
import {Entypo} from '@expo/vector-icons';
//Import do estilo
import styles from "./styles";

function TelaImc(){
    //1 passo - Criar os States
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);    
    let [mensagem, setMensagem] = useState('Informe seus dados!');
    
    function calcularImc(){
        let imc = (peso / (altura * altura))*10000;

        if(imc < 18.5){
            setMensagem(`Abaixo do peso, seu imc é ${imc.toFixed(2)}`);
        } 
        else if(imc <= 24.9){
            setMensagem(`Peso ideal, seu imc é ${imc.toFixed(2)}`);            
        }
        else if(imc <= 29.9){
            setMensagem(`Levemente acima do peso, seu imc é: ${imc.toFixed(2)}`);            
        } 
        else if(imc <= 34.9){
            setMensagem(`Obesidade I, seu imc é: ${imc.toFixed(2)}`);            
        }
        else if(imc <= 39.9){
            setMensagem(`Obesidade II, seu imc é: ${imc.toFixed(2)}`);            
        } else {
            setMensagem(`Obesidade mórbida, seu imc é: ${imc.toFixed(2)}`);            
        }         
        
    }

    return(

        <>
        <StatusBar backgroundColor="green"></StatusBar>

        <View style={styles.header}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#FFF'}}>Calcule seu imc</Text>
        </View>

        <View style={styles.container}>

            <Entypo name="add-user" style={{marginBottom:20}} size={150} color="green"/>
            
            <TextInput style={styles.TextInput} onChangeText={(valor)=>setPeso(Number(valor))}
             placeholder="Peso (kg)" keyboardType="numeric"/>

            <TextInput style={styles.TextInput} onChangeText={(valor)=>setAltura(Number(valor))}
             placeholder="Altura (cm)" keyboardType="numeric"/>

        <Text style={styles.subTitle}>{mensagem}</Text>

            <TouchableOpacity style={styles.button} onPress={calcularImc}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

		<Text>&copy; Adilson Luz</Text>

            
        </View>

        </>
    )
}
export default TelaImc


