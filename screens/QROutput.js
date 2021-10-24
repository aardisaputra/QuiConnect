import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const QROutput = ({dict}) => {
//   let successRead = await AsyncStorage.getItem('successRead');
//   console.log(successRead);

//   let keyValuePairs = successRead.split(',');
  
//   let readName = keyValuePairs[0].split(':')[1];
//   console.log(readName);
//   let readIG = keyValuePairs[1].split(':')[1];
//   console.log(readIG);
//   let readSnap = keyValuePairs[2].split(':')[1];
//   console.log(readSnap);
//   let readPhone = keyValuePairs[3].split(':')[1];
//   console.log(readPhone);
//   let readNote = keyValuePairs[4].split(':')[1];

//   let successReadDict = stringToDict(successRead);
//   console.log(successReadDict["name"]);

  

  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Text>Name: {dict['name']}</Text>
      <Text>Instagram: {dict['instagram']}</Text>
      <Text>Snapchat: {dict['snapchat']}</Text>
      <Text>Phone: {dict['phone']}</Text>
      <Text>Note: {dict['note']}</Text>
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