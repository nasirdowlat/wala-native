import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function RecoverPasswordScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoRecoverPasswordView and replace it with your content;
       * we just wanted to provide you with some helpful RecoverPassword.
       */}
    </ScrollView>
  );
}

RecoverPasswordScreen.navigationOptions = {
  header: 'Recover Password',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
