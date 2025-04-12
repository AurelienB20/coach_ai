import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('nextScreen' as never); // Change en fonction de ta navigation
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/yourLogo.png')} // Mets ici ton logo CoachAI
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to CoachAI</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={goToNextScreen}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#377DFF',  // Ton bleu principal
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
