import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    title: {
        fontSize: 40,
        color: '#30AD0fff',
        fontWeigth: 'bold',
        marginTop: 20

    },
    subTitle: {
        fontSize: 18,
        color: '#30ae0fff',
        fontWeigth: 'bold',
        marginTop: 20

    },
    TextInput: {
        width: 200,
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        padding: 5,
        borderBottomColor: 'purple',
        borderBottomWidth: 2
    },
    button: {
        width: 100,
        height:40,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    rodape: {
        backgroundColor: 'yellow',        
    }
});
export default styles;
