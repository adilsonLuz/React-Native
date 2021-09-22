
import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
      <View style={{height: 100, flex:1, backgroundColor: 'blue'}}></View>
      <View style={{height: 100, flex:5, backgroundColor: 'red'}}></View>
      <View style={{height: 100, flex:1, backgroundColor: 'green'}}></View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    
    
  },
});
