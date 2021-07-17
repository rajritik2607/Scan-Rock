import React,{useState} from 'react';
import { StyleSheet, Button, SafeAreaView, PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import {Camera} from 'react-native-camera-kit';



export default function TabOneScreen() {
  const openCamera =() => {
<View style={styles.cam}>
        <Camera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        />
      </View>
  }
  return (
    <View style={styles.container}>
      <Button title = 'scan' onPress = {openCamera}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cam: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
