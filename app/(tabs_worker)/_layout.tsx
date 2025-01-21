import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import JobsScreen from './jobs';
import ConversationScreen from './conversation';
import AccountWorkerScreen from './account_worker';
import CroissanceScreen from './croissance';
import { Entypo } from '@expo/vector-icons';
import AddJobScreen from './addJob';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string; }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIconEntypo(props: { name: React.ComponentProps<typeof Entypo>['name']; color: string; }) {
  return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2f95dc', // Personnaliser la couleur active des icônes
      }}>
      <Tab.Screen
        name="Croissance"
        component={CroissanceScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIconEntypo name="bar-graph" color={color} />
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="addJob"
        component={AddJobScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tab.Screen
        name="Conversation"
        component={ConversationScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
        }}
      />
      <Tab.Screen
        name="Account_Worker"
        component={AccountWorkerScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      
    </Tab.Navigator>
  );
}