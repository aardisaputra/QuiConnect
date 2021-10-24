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
      <TextInput placeholderTextColor="black" style={styles1.textInputStyle} placeholder="Enter Name:" onChangeText={(value) => setData("name", value)}/>

      <TextInput placeholderTextColor="black" style={styles1.textInputStyle} placeholder="Enter Instagram:" onChangeText={(value) => setData("instagram", value)}/>

      <TextInput placeholderTextColor="black" style={styles1.textInputStyle} placeholder="Enter Snapchat:" onChangeText={(value) => setData("snapchat", value)}/>

      <TextInput placeholderTextColor="black" style={styles1.textInputStyle} placeholder="Enter Phone Number:" onChangeText={(value) => setData("phone", value)}/>

      <TextInput placeholderTextColor="black" style={styles1.textInputStyle} placeholder="Enter Optional Note:" onChangeText={(value) => setData("note", value)}/>

    </View>
  );
}

const styles1 = StyleSheet.create({
  textboxfieldd: {
    fontSize: 30,
    color: "white",
  },
  textInputStyle: {
    color: 'black',
    fontSize: 18, 
    justifyContent: "center",
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontStyle: 'italic',
    fontWeight: "bold",
    paddingHorizontal: 10, 
    padding: 2,
    margin: 1
   },
});

export default QRForm