import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const goToEditProfile = () => {
    navigation.navigate('editProfile' as never ); // Remplace par le nom de ta page d'édition
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>30</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>135 lbs</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.value}>5'11'' 10 in</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Level</Text>
          <Text style={styles.value}>Intermediate</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={goToEditProfile}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#377DFF',
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
