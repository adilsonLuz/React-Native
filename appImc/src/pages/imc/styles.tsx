import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'green'

    },
    title: {
        fontSize: 40,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    textInfo: {
        fontSize: 20,
        marginTop: 80,
        fontWeight: 'bold',
        color: '#9AE0ff'

    },
    TextInput: {
        width: 300,
        marginTop: 30,
        marginBottom: 20,
        padding: 5,
        fontSize: 25,
        borderBottomColor: 'green',
        borderBottomWidth: 2
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
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
        color: 'green'
    }

}); 

export default styles;
