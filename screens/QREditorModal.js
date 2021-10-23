import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

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
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Text> Details </Text>
      <View>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Name" onChangeText={(value) => setData("name", value)}/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Instagram" onChangeText={(value) => setData("instagram", value)}/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Snapchat" onChangeText={(value) => setData("snapchat", value)}/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Phone Number" onChangeText={(value) => setData("phone", value)}/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Optional Note" onChangeText={(value) => setData("note", value)}/>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  textboxfieldd: {
    fontSize: 30,
    color: "white",
  },
  textInputStyle: {
    color: 'green',
   },
});

export default QRForm