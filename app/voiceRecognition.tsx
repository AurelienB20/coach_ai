import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceRecognitionScreen = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event : any) => {
    const spokenText = event.value[0];
    setText(spokenText);
  };

  const startListening = async () => {
    setIsListening(true);
    try {
      await Voice.start('fr-FR');
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parlez, je vous écoute...</Text>
      <Text style={styles.text}>{text}</Text>

      <Button
        title={isListening ? 'Stop' : 'Start'}
        onPress={isListening ? stopListening : startListening}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default VoiceRecognitionScreen;