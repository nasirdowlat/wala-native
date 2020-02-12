import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Background from '../components/layout/Background';

export default function SignInScreen() {
  return (
    <Background image="splash1">
      <Text>hello</Text>
    </Background>
  );
}

SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
