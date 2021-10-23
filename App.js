import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert , TouchableOpacity, Linking} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import t from 'tcomb-form-native';
import {Picker} from '@react-native-picker/picker';

import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ShowQRStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Form = t.form.Form;


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Scan" component={Scanner} options={{tabBarShowLabel: true}} />
        <Tab.Screen name="Show" component={ShowQRScreen} />
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

//show qr page
const ShowQRScreen = ({ navigation }) => {
  return (
    //qr code shower
    //button to edit page
    <ShowQRStack.Navigator>
      <ShowQRStack.Screen name="ShowQR" component={ShowQR}/>
      <ShowQRStack.Screen name="EditQR" component={EditQR}/>
    </ShowQRStack.Navigator>   
  );
};

//show qr code
const ShowQR = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <QRCode
        value="http://awesome.link.qr"
        size={200}
      />
      <Button
        title="Edit QR Code"
        onPress={() =>
          navigation.navigate('EditQR')
        }
      />
    </View>
    
  );
};

//edit info 
const EditQR = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Form type={User} />
    </View>
  );
};

// user info
// const User = t.struct({
//   name: t.String,
//   instagram: t.String,
//   snapchat: t.String,
// });

//QR SCANNER COMPONENT
const ScanScreen = () => {
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

