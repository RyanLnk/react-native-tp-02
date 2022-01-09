import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Games from '../screens/Games';
import Apps from '../screens/Apps';
import Movies from '../screens/Movies';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Apps"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'game-controller' : 'game-controller-outline'}
              size={24}
              color={focused ? '#008000' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Apps"
        component={Apps}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'apps' : 'apps-outline'}
              size={24}
              color={focused ? '#4169E1' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie' : 'movie-outline'}
              size={24}
              color={focused ? '#CD5C5C' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
