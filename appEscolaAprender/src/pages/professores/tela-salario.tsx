import React, { useState } from "react";

import {Text, Image, TextInput, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";


import styles from "./styles";

function TelaSalario(){
    let [nivel, setNivel] = useState(0);
    let [hora, setHora] = useState(0);
    const prof1 = 12.00;
    const prof2 = 17.00;
    const prof3 = 25.00;   
       
    let [mensagem, setMensagem] = useState('Seu salário mensal é R$...');

    function calcSal(){
        
        if (nivel<1 || nivel>3){
            setMensagem(`Digite um nível de 1 a 3`);
        }
            else if(nivel == 1){
                let sal = (prof1 * hora) * 4;
                setMensagem(`Seu salário mensal é R$ ${sal}`);
            } 
            else if(nivel == 2){
                let sal = (prof2 * hora) * 4;
                setMensagem(`Seu salário mensal é R$ ${sal}`);
            }
            else if(nivel == 3){
                let sal = (prof3 * hora) * 4;
                setMensagem(`Seu salário mensal é R$ ${sal}`)
            }
        }   
    return(
        <>
        <StatusBar backgroundColor="#0000CD"></StatusBar>
        <View style={styles.header}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0000CD'}}>Escola Aprender</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Salário de Professores</Text>
            <Text style={styles.subTitle}>Digite suas horas semanais e seu nível</Text>

            

            <TextInput style={styles.TextInput} onChangeText={(num)=>setNivel(Number(num))}
             placeholder="Digite seu nível (1-3)" keyboardType='numeric'/>
             
            <TextInput style={styles.TextInput} onChangeText={(num)=>setHora(Number(num))}
             placeholder="Horas/Semana" keyboardType='numeric'/>
           
             <Text style={{color: '#E6E6FA', fontWeight: 'bold', fontSize: 20}}>{mensagem}</Text>

            <TouchableOpacity style={styles.button} onPress={calcSal}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.subTitle}></Text>

        </View>
        <View style={styles.rodape}>
            <Text style={{fontWeight: 'bold'}}>&copy;Adilson Luz</Text>
        </View>
        </>
    )
}

export default TelaSalario;
