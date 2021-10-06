import {StatusBar} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';


import Home from './src/pages/Home';

//importar a tela de points
import Points from "./src/pages/Points";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return(
      <>
      <StatusBar style='dark' backgroundColor='transparent' translucent/>
      <Points/>
      </>
    );
  }//Fecha o Else
}// Fecha a function


