import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

import Background from '../components/layout/Background';

import logoCompact from '../assets/images/logo-compact.png';

export default function SignInScreen() {
  return (
    <Background image="splash5">
      <View style={styles.container}>
        <View style={styles.emptySpace} />
        <Image source={logoCompact} style={styles.logo} />
        <Text style={styles.text}>Welcome to Wala</Text>
      </View>
    </Background>
  );
}

SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptySpace: {
    height: 92,
  },
  logo: {
    width: 100,
    height: 75,
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: 'montserrat',
    fontSize: 16,
    color: '#1D1E2C',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 28,
  },
});
