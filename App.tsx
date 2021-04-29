import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import Routes from './src/routes';

export default function App() {
  let fontLoaded = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontLoaded) {
    <AppLoading />
  }
  return (
      
    <Routes />
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
