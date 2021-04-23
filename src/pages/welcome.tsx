import React from 'react';
import { Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
const wateringImage = '../assets/watering.png';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>
      <Image 
        source={require(wateringImage)} 
        style={styles.image}
        resizeMode="contain"
        
      />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text>
          <Feather
            name="chevron-right" 
            style={styles.buttonIcon}
          />
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title:{
    fontSize:32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle:{
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  }
});
