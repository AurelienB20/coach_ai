import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigation = useNavigation();
  
  const goToUserTabs = async () => {
    navigation.navigate('(tabs)' as never);
  };

  const goToWorkerTabs = async () => {
    navigation.navigate('(tabs_worker)' as never);
  };
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/maison.png')}
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/loupe.png')}
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          )
        }}
      />  
      
      <Tabs.Screen
        name="ia"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="brain" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="conversation"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
  name="account"
  options={{
    title: '',
    tabBarButton: (props) => (
      <Pressable
        {...props}
        onLongPress={() => {setPopupVisible(true), console.log(123), console.log(isPopupVisible)}
        
      }
        onPress={props.onPress} // conserve la navigation
        style={props.style}
      >
        <Ionicons name="person" size={28} color={props.accessibilityState?.selected ? Colors[colorScheme ?? 'light'].tint : 'gray'} />
      </Pressable>
    ),
  }}
/>
      
    </Tabs>
    <Modal
  animationType="slide"
  transparent
  visible={isPopupVisible}
  onRequestClose={() => setPopupVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Pressable onPress={goToUserTabs}>
        <View style={styles.changeContainer}>
          <Text style={styles.modalText}>compte user</Text> 
        </View>
      </Pressable>
      <Pressable onPress={goToWorkerTabs}>
        <View style={styles.changeContainer}>
          <Text style={styles.modalText}>compte worker</Text> 
        </View>
      </Pressable>
      <Pressable onPress={() => setPopupVisible(false)}>
        <Text style={styles.closeButton}>Fermer</Text>
      </Pressable>
    </View>
  </View>
</Modal>
    </>
    
  );
}
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    width : '100%'
  },

  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },

  closeButton: {
    marginTop : 10,
    fontSize: 16,
    color: 'blue',
    fontWeight : 'bold'
  },

  changeContainer : {
    
    margin: 10,
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 20,
    width : 200,
    backgroundColor : '#CCC'
  }
});

