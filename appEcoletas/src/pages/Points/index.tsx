import React from 'react';

import Constants from 'expo-constants';

import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';

import MapView, {Marker} from 'react-native-maps';

import {SvgUri} from 'react-native-svg';

export default function Points(){

    const navigation = useNavigation();

    //Fução que volta para tela anterior
    function handleNavigatorBack(){
        navigation.goBack();
    }

    //função que abre tela de detalhes ao clicar no mapa
    function handlerNavigateDetail(){
        navigation.navigate('Detail');
    }

    return(
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigatorBack}>
                <Icon name="arrow-left" size={20} color="#34cb79"/>
            </TouchableOpacity>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Encontre no mapa um ponto de coleta</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={{
                    latitude: -23.4460282,
                    longitude: -46.9172153,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}> 

                <Marker onPress={handlerNavigateDetail} 
                coordinate={{latitude: -23.4460282, longitude: - 46.9172153}}>
                    <View style={styles.mapMakerContainer}>
                        <Image style={styles.mapMakerImage} source={{uri: 'https://f.i.uol.com.br/fotografia/2019/08/16/15659855445d570b082fe09_1565985544_3x2_md.jpg'}}/>
                        <Text ></Text>
                    </View>
                </Marker>
                </MapView>
            </View>
        </View>

        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24
    },
    description: {
        color: '#6c6c80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular'
    },
    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16
    },
    map: {
        width: '100%',
        height: '100%'
    },
    mapMaker: {
        width: 90,
        height: 80
    },
    mapMakerContainer: {
        width: 120,
        height: 70,
        backgroundColor: '#34cb79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },
    mapMakerImage: {
        width: 120,
        height: 45
        resizeMode: 'cover',
    },
    mapMakerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
        fontSize: 10,
        lineHeight: 23
    },
    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        margimBottom: 32,
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRigth: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    selectedItem: {
        borderColor: '#34cb79',
        borderWidth: 2
    },
    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13
    }
});