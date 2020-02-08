import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function SignUpScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoSignUpView and replace it with your content;
       * we just wanted to provide you with some helpful SignUp.
       */}
    </ScrollView>
  );
}

SignUpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
