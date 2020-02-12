import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

import { default as Constants } from '../../constants/Layout';

const backgrounds = {
  splash0: require('../../assets/images/splash1.png'),
  splash1: require('../../assets/images/splash2.png'),
  splash2: require('../../assets/images/splash3.png'),
  splash3: require('../../assets/images/splash4.png'),
  splash4: require('../../assets/images/splash5.png'),
  splash5: require('../../assets/images/splash6.png'),
  splash6: require('../../assets/images/splash7.png'),
};

export default function Background({ children, image }) {
  const [backgroundImage, setBackgroundImage] = useState(
    image ? image : 'splash0'
  );

  const changeImage = image => {
    setBackgroundImage(image);
  };
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
        {typeof children === 'function'
          ? children(changeImage)
          : children}
      </View>
    </>
  );
}

Background.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: 32,
    paddingRight: 32,
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
});
