import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 
import axios from 'axios';

const VoiceGenerationScreen = () => { 
    const [text, setText] = useState(''); 
    const navigation = useNavigation();

const generateVoice = async () => { 
    try { 
        const response = await axios.post('https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY', { input: { text: text }, voice: { languageCode: 'fr-FR', name: 'fr-FR-Neural2-B' }, audioConfig: { audioEncoding: 'MP3' }, });

        const audioContent = response.data.audioContent;
        // Ici tu peux stocker l'audio ou le jouer directement selon ton setup
        console.log('Audio généré avec succès');
    } catch (error) {
        console.error('Erreur lors de la génération vocale :', error);
    }
};

return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>Entre ton texte :</Text>

        <TextInput
            style={styles.input}
            placeholder="Écris quelque chose..."
            placeholderTextColor="grey"
            value={text}
            onChangeText={setText}
        />

        <TouchableOpacity style={styles.confirmButton} onPress={generateVoice}>
            <Text style={styles.buttonText}>Générer la voix</Text>
        </TouchableOpacity>
    </View>

); };

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 20, 
        justifyContent: 'center', 
        backgroundColor: '#fff', 
    },

        title: { 
            fontSize: 20, 
            fontWeight: 'bold', 
            marginBottom: 20, 
            textAlign: 'center', 
            color: 'black', 
        }, 
            
        input: { 
            height: 50, 
            borderColor: 'gray', 
            borderWidth: 1, 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            fontSize: 16, 
            color: 'black', 
            backgroundColor: 'white', 
        }, 
        
        confirmButton: { 
            marginTop: 20, 
            backgroundColor: '#70FF70', 
            paddingVertical: 10, 
            paddingHorizontal: 20, 
            borderRadius: 20, 
        }, 
        
        buttonText: { 
            fontSize: 16, 
            fontWeight: 'bold', 
            color: 'black', 
            textAlign: 'center', 
        }, 
    });

export default VoiceGenerationScreen;