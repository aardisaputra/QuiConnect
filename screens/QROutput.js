import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

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
      <TouchableOpacity style={styles1.button}>
        <Text>Name: {dict['name']}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.button} onPress={() => Linking.openURL('instagram://user?username=' + dict['instagram'])}>
      <Text>Instagram: {dict['instagram']}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.button} onPress={() => Clipboard.setString(dict['snapchat'])} >
      <Text>Snapchat: {dict['snapchat']}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.button} onPress={() => Clipboard.setString(dict['phone'])}>
      <Text>Phone: {dict['phone']}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.button}>
      <Text>Note: {dict['note']}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles1 = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  textboxfieldd: {
    fontSize: 30,
    color: "white",
  },
  baseText: {
    color: 'green',
   },
});

export default QROutput