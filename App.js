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
import QROutput from './screens/QROutput';

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
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <View>
      <ScanScreen />
    </View>
  );
};

//show qr code
const ShowQR = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({'name': '', 'instagram': '', 'snapchat': '', 'phone': '', 'note': ''})
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  React.useEffect(() => {
    // Some initialization logic here
    updateUserInfo()
  }, []);

  const updateUserInfo = async () => {
    console.log('updateUserInfo')
    let name = await AsyncStorage.getItem('name'); 
    let instagram = await AsyncStorage.getItem('instagram'); 
    let snapchat = await AsyncStorage.getItem('snapchat'); 
    let phone = await AsyncStorage.getItem('phone'); 
    let note = await AsyncStorage.getItem('note'); 
    setUserInfo({'name': name, 'instagram': instagram, 'snapchat': snapchat, 'phone': phone, 'note': note})
  }

  const doneFn = () => {
    setIsModalVisible(!isModalVisible);
    updateUserInfo()
  }

  const dictToString = (dict) => {
    let result = ''
    Object.entries(dict).forEach(([key, value]) => {
      if (value == null) value = ''
      result += (value + '|');
    });
    if (result.length) {
      result = result.substr(0, result.length - 1) // get rid of the last comma
    }
    return result
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <QRCode
        value={dictToString(userInfo)}
        size={300}
        style={{flex: 1}}
      />

      <Button title="Click here to change" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible} style={{flex: 1}}>
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
  const [successDict, setSuccessDict] = React.useState({});
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => {
    if (isModalVisible) {
      // dismissing, should reactivate scanner
      this.scanner.reactivate()
    }
    setIsModalVisible(!isModalVisible);
  };

  const stringToDict = (str) => {
    let labels = ['name', 'instagram', 'snapchat', 'phone', 'note']
    let result = {}
    let splitted = str.split('|')
    for(let i = 0; i < splitted.length; i++) {
      result[labels[i]] = splitted[i]
    }
    return result
  }

  const onSuccess = async e => {
    // convert string to dictionary and show modal
    console.log(e.data)
    setSuccessDict(stringToDict(e.data))
    toggleModal();
  };


  return (
    <View >
      <View style={{justifyContent: 'center', margin: "7%"}}>
      <Text style={[styles.centerText, styles.textBold]}>
            Scan a QuiConnect QR code!
      </Text>
      </View>
      <QRCodeScanner onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off} 
        ref={(node) => { this.scanner = node }}
      />
      <View>
        <Text style={[styles.bottomScanText, styles.centerText, styles.textBold]}>
        Ask your friend to open QuiConnect and show their QR code.
      </Text>
      </View>
      <Modal isVisible={isModalVisible}>
        <View>
          <QROutput dict={successDict} />
          <View>
            <Button title="Done" onPress={toggleModal} style={{fontWeight: "bold"}}/>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    // flex: 1,
    textAlign: "center",
    fontSize: 20,
    padding: 30,
    // color: '#777',
    color: 'black'
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
  },
  bottomScanText: {
    marginBottom: "3%",
    textAlign: "center",
    fontSize: 20,
    padding: 30,
  }

});


export default App;

