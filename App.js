import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert , TouchableOpacity, Linking, TextInput, useState} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import Modal from 'react-native-modal';
import QRForm from './screens/QREditorModal';

import AsyncStorage from '@react-native-community/async-storage';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Scan" component={Scanner} options={{tabBarShowLabel: true}} />
        <Tab.Screen name="Show" component={ShowQR} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//scanner homescreen
const Scanner = ({ navigation }) => {
  return (
    <ScanScreen />
  );
};

//show qr code
const ShowQR = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({'name': '', 'instagram': '', 'snapchat': '', 'phone': '', 'note': ''})

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const doneFn = async () => {
    setIsModalVisible(!isModalVisible);
    let name = await AsyncStorage.getItem('name'); 
    let instagram = await AsyncStorage.getItem('instagram'); 
    let snapchat = await AsyncStorage.getItem('snapchat'); 
    let phone = await AsyncStorage.getItem('phone'); 
    let note = await AsyncStorage.getItem('note'); 
    setUserInfo({'name': name, 'instagram': instagram, 'snapchat': snapchat, 'phone': phone, 'note': note})
  }

  const dictToString = (dict) => {
    let result = ''
    Object.entries(dict).forEach(([key, value]) => {
      if (value == null) value = ''
      result += (key + ':' + value + ',');
    });
    if (result.length) {
      result = result.substr(0, result.length - 1) // get rid of the last comma
    }
    return result
  }

  return (
    <View>
      <QRCode
        value={dictToString(userInfo)}
        size={200}
      />

      <Button title="Click here to change" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <QRForm />
          <View>
            <Button title="Done" onPress={doneFn} />
          </View>
        </View>
      </Modal>
    </View>
    
  );
};

//QR SCANNER COMPONENT
const ScanScreen = () => {

  const stringToDict = (str) => {
    let result = {}
    let keyValuePairs = str.split(',')
    keyValuePairs.forEach((keyValueStr) => {
      let keyValueArray = keyValueStr.split(':')
      result[keyValueArray[0]] = keyValueArray[1]
    })
    return result
  }

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  return (
    <QRCodeScanner onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={[styles.centerText, styles.textBold]}>
          Scan a QuiConnect QR code!
        </Text>
      }
      bottomContent={
          <Text style={styles.centerText}>Ask your friend to open QuiConnect and show their QR code. </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }

});


export default App;

