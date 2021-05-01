import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import StartScreen from './app/screens/StartScreen';
import SearchResultScreen from './app/screens/SearchResultScreen';
import FavouritesScreen from './app/screens/FavouritesScreen';
import Color from './app/config/Color';
import GlobalStyles from './app/styles/GlobalStyles';

const Stack = createStackNavigator();

// The app contains 3 available screens:
// StartScreen: Home
// SearchResultScreen: Found Artist Info
// FavouritesScreen: Favourite Artists & Albums
export default function App() {
  let navStyle = [
    GlobalStyles.BackgroundColor, GlobalStyles.ShadowColor
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'StartScreen'
          component = {StartScreen}
          options = {{ 
            title: 'Home',
            headerStyle: navStyle,
            headerTintColor: Color.FOREGROUND,
          }}
        >
        </Stack.Screen>
        <Stack.Screen
          name = 'SearchResultScreen'
          component = {SearchResultScreen}
          options = {{ 
            title: 'Search Result',
            headerStyle: navStyle,
            headerTintColor: Color.FOREGROUND,
          }}
        >
        </Stack.Screen>
        <Stack.Screen
          name = 'FavouritesScreen'
          component = {FavouritesScreen}
          options = {{ 
            title: 'My Favourites',
            headerStyle: navStyle,
            headerTintColor: Color.FOREGROUND,
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
