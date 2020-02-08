import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function SignInScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoSignInView and replace it with your content;
       * we just wanted to provide you with some helpful SignIn.
       */}
    </ScrollView>
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
