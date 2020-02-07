import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// test icons
import WalaIcon from '../components/WalaIcon';

export default function UpcomingScreen() {
  return (
    <ScrollView style={styles.container}>
      <WalaIcon
        name="ic_calories"
        size={32}
        color="black"
      />
    </ScrollView>
  );
}

UpcomingScreen.navigationOptions = {
  title: 'Upcoming',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
