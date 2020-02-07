import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function VirtualChefScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoVirtualChefView and replace it with your content;
       * we just wanted to provide you with some helpful VirtualChef.
       */}
    </ScrollView>
  );
}

VirtualChefScreen.navigationOptions = {
  title: 'VirtualChef',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
