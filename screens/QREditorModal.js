import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const QRForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Text> Details </Text>
      <View>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Name" onChangeText={(value) => this.setData(value)}/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Instagram" />
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Snapchat" />
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Phone Number"/>
        <TextInput placeholderTextColor="white" style={styles1.textInputStyle} placeholder="Enter Optional Note"/>
      </View>
    </View>
  );
}

const setData = async () => {
  try {
    await AsyncStorage.setItem('name', 'dark');
  } catch(error) {
    console.log('error', error);
  };
};


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