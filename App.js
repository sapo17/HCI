import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './app/screens/StartScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Start'
          component = {StartScreen}
          options = { { title: 'Welcome' } }
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
