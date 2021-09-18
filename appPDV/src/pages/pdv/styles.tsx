import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ffab42',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#4682B4'

    },
    title: {
        fontSize: 40,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    textInfo: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#9AE0ff'

    },
    TextInput: {
        width: 300,
        marginTop: 20,
        marginBottom: 20,
        padding: 5,
        fontSize: 20,
        borderBottomColor: 'green',
        borderBottomWidth: 2
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 20,
        marginTop: 20,
        color: '#0000CD'
    },
    rodape: {
        backgroundColor: '#ffab42',
        fontWeight: 'bold'
    }

}); 

export default styles;
