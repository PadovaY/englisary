import React, { useState, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text } from "react-native"
import styled from "styled-components/native"
import { DictionaryContext } from "../../DictionaryContext";

export const GameScreen = () => {
    const [word, setWord] = useState<undefined | string>();
    const [translation, setTranslation] = useState<undefined | string>();
    const { addWord } = useContext(DictionaryContext);
    const onSubmit = () => {
        addWord(word!, translation!)
    }

    return (
        <Container behavior="padding">
         <Title >full your word and translation</Title>
         <WordInput  value={word} placeholder="word" onChange={({nativeEvent:{ text }}) => setWord(text)}/>
         <WordInput  value={translation} placeholder="translation"onChange={({nativeEvent:{ text }}) => setTranslation(text)}/>
         <SubmitButton onPress={onSubmit}>
            <Text> submit</Text>
         </SubmitButton>
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
    fontSize: 24,
    marginVertical: 24,
    padding: 8,
    color:'white',
    borderBottomColor: theme.colors.supportive,
    borderBottomWidth: StyleSheet.hairlineWidth
  }));

  const SubmitButton = styled.Pressable(({theme})=>({
    backgroundColor: theme.colors.secondary,
    fontSize: 24,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12
  }));