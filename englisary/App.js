import React from 'react';
import { View, Text } from 'react-native';

export const App = () => {
  return (
    <View style={{
      flex: 1,
       backgroundColor: 'rgba(134,164, 154, 0.7)',
       justifyContent:'center',
       alignItems:'center'
       }}>
      <Text style={{fontSize: 24}}>this will be Roetm's english app!</Text>
    </View>
  )
}