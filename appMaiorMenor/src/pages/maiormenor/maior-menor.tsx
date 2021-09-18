import React, { useState } from "react";


import {Text, Image, TextInput, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

import styles from "./styles";


function MaiorMenor(){
    let [n1, setN1] = useState(0);
        let [n2, setN2] = useState(0);
        let [n3, setN3] = useState(0);
        let [mensagem, setMensagem] = useState('Seu maior número é...    e o menor é.... ');

    function testar(){
        
        let max = Math.max(n1,n2,n3);
        let min = Math.min(n1,n2,n3);
    
        setMensagem(`Seu maior número é ${max}, e o menor é ${min}`);
    }

    return(
        <>
        <StatusBar backgroundColor="purple"></StatusBar>
        <View style={styles.header}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>Descobrindo...</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Maior e Menor</Text>
            <Text style={styles.subTitle}>Quais Número deseja testar?</Text>

            <TextInput style={styles.TextInput} onChangeText={(num)=>setN1(Number(num))}
             placeholder="Digite o primeiro número" keyboardType='numeric'/>
            <TextInput style={styles.TextInput} onChangeText={(num)=>setN2(Number(num))}
             placeholder="Digite o segundo número"/>
            <TextInput style={styles.TextInput} onChangeText={(num)=>setN3(Number(num))}
             placeholder="Digite o Terceiro número"/>

             <Text style={{color: 'green', fontWeight: 'bold'}}>{mensagem}</Text>

            <TouchableOpacity style={styles.button} onPress={testar}>
                <Text style={styles.buttonText}>Testar</Text>
            </TouchableOpacity>

            <Text style={styles.subTitle}></Text>

        </View>
        <View style={styles.rodape}>
            <Text style={{fontWeight: 'bold'}}>&copy;Adilson Luz</Text>
        </View>
        </>
    )
}

export default MaiorMenor;
