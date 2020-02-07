import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ExplorerScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoExplorerView and replace it with your content;
       * we just wanted to provide you with some helpful Explorer.
       */}
    </ScrollView>
  );
}

ExplorerScreen.navigationOptions = {
  title: 'Explorer',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
