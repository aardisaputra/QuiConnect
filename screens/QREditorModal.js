import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class QRForm extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: {'name': '', 'instagram': '', 'snapchat': '', 'phone': '', 'note': ''}}
  }
  async getKey() {
    try {
      let name = await AsyncStorage.getItem('name'); 
      let instagram = await AsyncStorage.getItem('instagram'); 
      let snapchat = await AsyncStorage.getItem('snapchat'); 
      let phone = await AsyncStorage.getItem('phone'); 
      let note = await AsyncStorage.getItem('note'); 
      this.setState({userInfo: {'name': name, 'instagram': instagram, 'snapchat': snapchat, 'phone': phone, 'note': note}})
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async setData (key, value) {
    let info = {...this.state.userInfo}
    info[key] = value
    this.setState({userInfo: info})
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  componentDidMount() {
    this.getKey()
  }

  render() {
    return (
    <View style={{backgroundColor: '#fffff0'}}>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Name: </Text>
        <TextInput placeholderTextColor="black" value={this.state.userInfo['name']} style={[styles1.text, styles1.textInput]} onChangeText={(value) => this.setData("name", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Instagram: </Text>
        <TextInput placeholderTextColor="black" value={this.state.userInfo['instagram']} style={[styles1.text, styles1.textInput]} onChangeText={(value) => this.setData("instagram", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Snapchat: </Text>
        <TextInput placeholderTextColor="black" value={this.state.userInfo['snapchat']} style={[styles1.text, styles1.textInput]} onChangeText={(value) => this.setData("snapchat", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Phone Number: </Text>
        <TextInput placeholderTextColor="black" value={this.state.userInfo['phone']} style={[styles1.text, styles1.textInput]}  onChangeText={(value) => this.setData("phone", value)}/>
      </View>
      <View style={styles1.textInputStyle}>
        <Text style={[styles1.text, styles1.textBefore]}>Note: </Text>
        <TextInput placeholderTextColor="black" value={this.state.userInfo['note']} style={[styles1.text, styles1.textInput]} onChangeText={(value) => this.setData("note", value)}/>
      </View>
    </View>
  );
  }
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
    padding: 10,
    // margin: 1
  },
  textInputStyle: {
    flexDirection:"row",
    padding: 1,
    margin: 0.5
   },
  textInput: {
    flex: 1
  }
});

export default QRForm