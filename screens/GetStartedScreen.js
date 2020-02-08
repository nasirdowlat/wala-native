import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { H1 } from 'native-base';

export default function GetStartedScreen() {
  return (
    <ScrollView style={styles.container}>
      <H1></H1>
    </ScrollView>
  );
}

GetStartedScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
