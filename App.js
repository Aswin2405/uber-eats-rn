import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from "./components/Home"
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{backgroundColor:"gray",height:"100vh"}}>
     <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
