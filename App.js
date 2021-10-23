import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert , TouchableOpacity, Linking, TextInput, useState} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Click here to change" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <QRForm />
          <View>
            <Button title="Done" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
    
  );
};

//QR SCANNER COMPONENT
const ScanScreen = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  return (
    <QRCodeScanner onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
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

