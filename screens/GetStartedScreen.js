import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

import { Button, Text, H1 } from 'native-base';

import { default as Constants } from '../constants/Layout';

const backgrounds = {
  splash0: require('../assets/images/splash1.png'),
  splash1: require('../assets/images/splash2.png'),
  splash2: require('../assets/images/splash3.png'),
  splash3: require('../assets/images/splash4.png'),
  splash4: require('../assets/images/splash5.png'),
};

export default function GetStartedScreen() {
  const [backgroundImage, setBackgroundImage] = useState(
    'splash0'
  );
  return (
    <>
      <ImageBackground
        source={backgrounds[backgroundImage]}
        imageStyle={{
          resizeMode: 'contain',
        }}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <View style={styles.emptySpace} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Swiper
            style={styles.wrapper}
            paginationStyle={styles.pagination}
            dotStyle={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
            activeDotStyle={{
              backgroundColor: 'rgba(254.0,152.0,112.0,1)',
              width: 24,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
            onIndexChanged={index =>
              setBackgroundImage(`splash${index}`)
            }
            showsButtons={false}>
            <View style={styles.slide}>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Fresh
              </H1>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Ingredients
              </H1>
              <Text style={styles.text}>
                Fresh ingredients for tasty, home-cooked
                dinners.
              </Text>
            </View>
            <View style={styles.slide}>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Delivery
              </H1>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Service
              </H1>
              <Text style={styles.text}>
                Delivery 7 days a week. Pause or skip
                anytime.
              </Text>
            </View>
            <View style={styles.slide}>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Discovery
              </H1>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Tips
              </H1>
              <Text style={styles.text}>
                Cook perfect meals with professional tips.
              </Text>
            </View>
            <View style={styles.slide}>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Perfect
              </H1>
              <H1
                style={{
                  fontFamily: 'playfairdisplay-bold',
                }}>
                Meals
              </H1>
              <Text style={styles.text}>
                Tasty home cooked meals, without all the
                fuss.
              </Text>
            </View>
          </Swiper>
        </View>
        <Button
          style={styles.getStartedButton}
          full
          rounded
          success>
          <Text>Get Started</Text>
        </Button>
        <View style={styles.bottomText}>
          <Text style={styles.bottomTextStyle}>
            Have an Account?
          </Text>
          <Text
            style={{
              ...styles.bottomTextStyle,
              color: '#FE9870',
            }}>
            {' '}
            Log In
          </Text>
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
    height: 174,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  pagination: {
    bottom: undefined,
    left: 0,
    top: 194,
    right: 0,
  },
  backgroundImage: {
    width: Constants.window.width,
    height: Constants.window.width + 30,
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  getStartedButton: {
    marginTop: 70,
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: 'montserrat',
    fontSize: 16,
    color: '#1D1E2C',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 28,
  },
  bottomTextStyle: {
    fontFamily: 'montserrat',
    fontSize: 14,
    color: '#1D1E2C',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 28,
  },
});
