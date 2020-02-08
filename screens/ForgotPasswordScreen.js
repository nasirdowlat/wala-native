import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoForgotPasswordView and replace it with your content;
       * we just wanted to provide you with some helpful ForgotPassword.
       */}
    </ScrollView>
  );
}

ForgotPasswordScreen.navigationOptions = {
  title: 'Forgot Password',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
