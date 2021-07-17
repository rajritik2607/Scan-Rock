import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID: </Text>
      <Text style={styles.title}>Name: </Text>
      <Text style={styles.title}>Email: </Text>
      <Text style={styles.title}>No. of Documents: </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});