import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, GameScreen } from './screens/';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import { DictionaryProvider } from './DictionaryContext';

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createStackNavigator();

export const App = () => (
  <ThemeProvider theme={theme}>
    <DictionaryProvider>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </DictionaryProvider>
 </ThemeProvider>
)