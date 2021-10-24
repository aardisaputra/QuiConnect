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
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <View >
      <View>
      <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Name" onChangeText={(value) => setData("name", value)}/>
      </View>
      <View>
      <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Instagram" onChangeText={(value) => setData("instagram", value)}/>
      </View>
      <View>
      <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Snapchat" onChangeText={(value) => setData("snapchat", value)}/>
      </View>
      <View>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Phone Number" onChangeText={(value) => setData("phone", value)}/>
      </View>
      <View>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Optional Note" onChangeText={(value) => setData("note", value)}/>
      </View>
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
    color: 'grey',
    fontSize: 18, 
    justifyContent: "center",
    fontFamily: 'Apple Color Emoji',
    fontStyle: 'italic',
    fontWeight: "bold",
    paddingHorizontal: 10, 
    padding: 2,
    // margin: 1
   },
});

export default QRForm