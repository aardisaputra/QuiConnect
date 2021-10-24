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

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <ScanScreen />
      <Modal
          isVisible={isModalVisible}>
          <View>
            <QROutput />
            <View>
              <Button title="Done" onPress={doneFn} />
            </View>
          </View>
      </Modal>
    </View>
    
  );
};

//show qr code
const ShowQR = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

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

    console.log(name)
  }

  return (
    <View>
      <QRCode
        value="http://awesome.link.qr"
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
  const onSuccess = e => {
    //string to dict
    //set asyncstorage
    //modal
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

