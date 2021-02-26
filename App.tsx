import React from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation:StackNavigationProp<RootStackParamList, 'Home'>}) => {
  return (
      <Container>
       <Text style={{fontSize: 24}}>this will be Roetm's english app home page!</Text>
       <Pressable onPress={() => navigation.navigate('Game')}>
         <Text>go to game</Text>
       </Pressable>
      </Container>
  )
}

const GameScreen = () => {
  return (
      <Container>
       <Text style={{fontSize: 24}}>this will be Roetm's english game page!</Text>
      </Container>
  )
}


export const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

const Container = styled.View({
  flex: 1,
  backgroundColor: 'rgba(134,164, 154, 0.7)',
  justifyContent:'center',
  alignItems:'center'
})