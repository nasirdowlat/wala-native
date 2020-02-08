import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

import { Button, Text, H1 } from 'native-base';

import { default as Constants } from '../constants/Layout';

export default function GetStartedScreen() {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/getstarted-bg1.png')}
        imageStyle={{
          resizeMode: 'contain',
        }}
        style={{
          width: Constants.window.width,
          height: Constants.window.width + 20,
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}
      />
      <View style={styles.container}>
        <View style={styles.emptySpace} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Swiper
            style={styles.wrapper}
            height={100}
            paginationStyle={{
              bottom: undefined,
              left: 0,
              top: undefined,
              right: 0,
            }}
            showsButtons={false}>
            <View style={styles.slide1}>
              <H1>Fresh</H1>
              <H1>Ingredients</H1>
              <Text style={styles.text}>
                Fresh ingredients for tasty, home-cooked
                dinners.
              </Text>
            </View>
            <View style={styles.slide2}>
              <H1>Delivery</H1>
              <H1>Service</H1>
              <Text style={styles.text}>
                Delivery 7 days a week. Pause or skip
                anytime.
              </Text>
            </View>
            <View style={styles.slide3}>
              <H1>Discovery</H1>
              <H1>Tips</H1>
              <Text style={styles.text}>
                Cook perfect meals with professional tips.
              </Text>
            </View>
          </Swiper>
        </View>
        <Button>
          <Text>Get Started</Text>
        </Button>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text>Have an Account?</Text>
          <Text style={{ color: 'red' }}> Log In</Text>
        </View>
      </View>
    </>
  );
}

GetStartedScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: 32,
    paddingRight: 32,
  },
  emptySpace: {
    height: 184,
  },
  wrapper: {
    height: 100,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});
