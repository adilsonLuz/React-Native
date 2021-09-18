import React, {useState} from "react";
//Import dos componentes do react-native
import {View, Image, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput} from "react-native";
//Import do icone

//Import do estilo
import styles from "./styles";

function TelaImc(){
    //1 passo - Criar os States
    let [produto, setProduto] = useState();
    let [quantidade, setQuantidade] = useState(0);
    let [vlUnit, setVlUnit] = useState(0);    
    let [mensagem, setMensagem] = useState('O total de sua compra foi R$...\nVocê recebeu R$... de desconto\nValor a ser Pago R$...');
    
    function desconto(){
        let total = vlUnit * quantidade;

        if(quantidade <= 5){
            let desc = total * 0.02;
            let vlDesc = total - desc;
            setMensagem(`O total de sua compra foi R$ ${total.toFixed(2)}\nVocê recebeu R$ ${desc.toFixed(2)} de desconto\nValor a ser Pago R$ ${vlDesc.toFixed(2)}`);
        } 
        else if(quantidade <= 10){
            let desc = total * 0.03;
            let vlDesc = total - desc;
            setMensagem(`O total de sua compra foi R$ ${total.toFixed(2)}\nVocê recebeu R$ ${desc.toFixed(2)} de desconto\nValor a ser Pago R$ ${vlDesc.toFixed(2)}`);            
        }
        else if(quantidade > 10){
            let desc = total * 0.05;
            let vlDesc = total - desc;
            setMensagem(`O total de sua compra foi R$ ${total.toFixed(2)}\nVocê recebeu R$ ${desc.toFixed(2)} de desconto\nValor a ser Pago R$ ${vlDesc.toFixed(2)}`);            
        }         
        
    }

    return(

        <>
        <StatusBar backgroundColor="#4682B4"></StatusBar>

        <View style={styles.header}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#FFF'}}>Vamos as compras</Text>
        </View>

        <View style={styles.container}>       

            <Image source = {require('../../../assets/sacola.png')} style = {{width:180, height:180}}/>     
            
            <TextInput style={styles.TextInput} placeholder="Descrição do produto"/>

            <TextInput style={styles.TextInput} onChangeText={(valor)=>setQuantidade(Number(valor))}
             placeholder="Quantidade" keyboardType="numeric"/>

            <TextInput style={styles.TextInput} onChangeText={(valor)=>setVlUnit(Number(valor))}
             placeholder="Valor Unitario" keyboardType="numeric"/>

        <Text style={styles.subTitle}>{mensagem}</Text>

            <TouchableOpacity style={styles.button} onPress={desconto}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

        </View>

        <View>
            <Text style={styles.rodape}>    &copy;Adilson Luz</Text>
        </View>

        </>
    )
}
export default TelaImc

