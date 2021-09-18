import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#E6E6FA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    title: {
        fontSize: 40,
        color: '#E6E6FA',
        fontWeigth: 'bold',
        marginTop: 20

    },
    subTitle: {
        fontSize: 18,
        color: '#E6E6FA',
        fontWeigth: 'bold',
        marginTop: 50

    },
    TextInput: {
        width: 200,
        height: 50,
        marginTop: 30,
        marginBottom: 20,
        padding: 5,
        color: '#E0FFFF',
        borderBottomColor: '#E0FFFF',
        borderBottomWidth: 2
    },
    button: {
        width: 100,
        height:40,
        backgroundColor: '#FFFFE0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#8A2BE2',
        fontWeight: 'bold'
    },
    rodape: {
        backgroundColor: '#E6E6FA',        
    }
});
export default styles;
