import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
    <Header title="Guess a Number"></Header>
    <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
