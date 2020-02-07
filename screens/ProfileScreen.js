import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoProfileView and replace it with your content;
       * we just wanted to provide you with some helpful Profile.
       */}
    </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
