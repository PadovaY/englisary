import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../App';

export const HomeScreen = ({ navigation }: { navigation:StackNavigationProp<RootStackParamList, 'Home'>}) => {
    return (
        <Container>
         <Text style={{fontSize: 56, textAlign:'center', color:'white'}}>ENGLOSSARY</Text>
         <StartButton onPress={() => navigation.navigate('Game')}>
           <Text style={{fontSize: 18}} >Start!</Text>
         </StartButton>
        </Container>
    )
  }
  
  const Container = styled.View(({ theme }) =>{ 
    return ({
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    alignItems:'center'
  })});
  
  const StartButton = styled.Pressable(({ theme }) => ({
    borderRadius: 15,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 24
  }));