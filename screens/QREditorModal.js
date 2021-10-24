import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const QRForm = () => {
  const [value, setValue] = useState(0);

  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  return (
    <View style={{backgroundColor: '#fffff0'}}>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Name: </Text>
        <TextInput placeholderTextColor="black" style={[styles1.textInputStyle, styles1.text]} onChangeText={(value) => setData("name", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Instagram: </Text>
      <TextInput placeholderTextColor="black" style={[styles1.textInputStyle, styles1.text]} onChangeText={(value) => setData("instagram", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Snapchat: </Text>
      <TextInput placeholderTextColor="black" style={[styles1.textInputStyle, styles1.text]} onChangeText={(value) => setData("snapchat", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Phone Number: </Text>
      <TextInput placeholderTextColor="black" style={[styles1.textInputStyle, styles1.text]}  onChangeText={(value) => setData("phone", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Optional Note: </Text>
      <TextInput placeholderTextColor="black" style={[styles1.textInputStyle, styles1.text]} onChangeText={(value) => setData("note", value)}/>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  textboxfieldd: {
    fontSize: 30,
    color: "white",
  },
  text: {
    color: 'black',
    fontSize: 17, 
    // justifyContent: "center",
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontStyle: 'italic',
    fontWeight: "bold",
  },
  textBefore: {
    fontWeight: "bold",
    fontFamily: 'AppleSDGothicNeo-Medium',
    padding: 2,
    margin: 1
  },
  textInputStyle: {

    flexDirection:"row",
    color:'red',
    padding: 1,
    margin: 0.5
   },
});

export default QRForm