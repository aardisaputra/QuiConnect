import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const QROutput = async () => {
  let scanName = AsyncStorage.getItem('scanName')
  let scanInstagram = await AsyncStorage.getItem('scanInstagram'); 
  let scanSnapchat = await AsyncStorage.getItem('scanSnapchat'); 
  let scanPhone = await AsyncStorage.getItem('scanPhone'); 
  let scanNote = await AsyncStorage.getItem('scanNote'); 

  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Text> Details </Text>
      <View>
        {/* name */}
        <Text style={styles1.baseText}>{scanName}</Text>
        {/* IG */}
        <Text style={styles1.baseText}>{scanInstagram}</Text>
        {/* Snap */}
        <Text style={styles1.baseText}>{scanSnapchat}</Text>
        {/* Phone */}
        <Text style={styles1.baseText}>{scanPhone}</Text>
        {/* Note */}
        <Text style={styles1.baseText}>{scanNote}</Text>
        
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  textboxfieldd: {
    fontSize: 30,
    color: "white",
  },
  baseText: {
    color: 'green',
   },
});

export default QROutput