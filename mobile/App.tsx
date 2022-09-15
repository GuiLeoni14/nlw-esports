import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Mobile Developer
      </Text>
      <Button text='opa' />
      <StatusBar style="auto" backgroundColor='red' />
    </View>
  );
}

interface ButtonProps {
  text: string;
}
function Button({ text}: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
