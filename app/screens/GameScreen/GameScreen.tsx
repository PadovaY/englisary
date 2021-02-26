import React from "react"
import { TextInput, Text, StyleSheet } from "react-native"
import styled from "styled-components/native"

export const GameScreen = () => {
    return (
        <Container behavior="padding">
         <Title >enter your first word</Title>
         <WordInput />
        </Container>
    )
  }
  
  const Container = styled.KeyboardAvoidingView(({theme}) => ({
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    alignItems:'center'
  }));

  const Title = styled.Text(({theme}) => ({
    fontSize: 32,
    color: theme.colors.common.white
  }));

  const WordInput = styled.TextInput(({theme})=>({
    width:'80%', 
    height: 32,
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  }));