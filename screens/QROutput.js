import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const QROutput = async () => {
  let successRead = await AsyncStorage.getItem('successRead');
  let successReadDict = stringToDict(successRead);
  console.log(successReadDict["name"]);

  const stringToDict = (str) => {
    let result = {}
    let keyValuePairs = str.split(',')
    keyValuePairs.forEach((keyValueStr) => {
      let keyValueArray = keyValueStr.split(':')
      result[keyValueArray[0]] = keyValueArray[1]
    })
    return result
  }

  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Text> Details </Text>
      <View>
        {/* name */}
        <Text style={styles1.baseText}>{successReadDict["name"]}</Text>
        {/* IG */}
        <Text style={styles1.baseText}>{successReadDict["instagram"]}</Text>
        {/* Snap */}
        <Text style={styles1.baseText}>{successReadDict["snapchat"]}</Text>
        {/* Phone */}
        <Text style={styles1.baseText}>{successReadDict["phone"]}</Text>
        {/* Note */}
        <Text style={styles1.baseText}>{successReadDict["note"]}</Text>
        
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