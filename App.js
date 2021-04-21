import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './app/screens/StartScreen';
import SearchResultScreen from './app/screens/SearchResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'StartScreen'
          component = {StartScreen}
          options = { { title: 'Welcome' } }
        >
        </Stack.Screen>
        <Stack.Screen
          name = 'SearchResultScreen'
          component = {SearchResultScreen}
          options = { { title: 'Search Result' } }
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
