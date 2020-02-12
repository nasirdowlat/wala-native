// Native Modules
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Expo
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// Environment
import getEnvVars from './environment';
const { apiUrl } = getEnvVars();

// Native Base
import { Root, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

// Navigation
import AppNavigator from './navigation/AppNavigator';

// GraphQL Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

const httpLink = createUploadLink({
  uri: apiUrl,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(
    false
  );

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() =>
          handleFinishLoading(setLoadingComplete)
        }
      />
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <StyleProvider style={getTheme(material)}>
          <Root>
            {Platform.OS === 'ios' && (
              <StatusBar barStyle="default" />
            )}
            <AppNavigator />
          </Root>
        </StyleProvider>
      </ApolloProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/robot-dev.png'),
      // require('./assets/images/robot-prod.png'),
      require('./assets/splash.png'),
      require('./assets/images/logo-compact.svg'),
      require('./assets/images/splash1.png'),
      require('./assets/images/splash2.png'),
      require('./assets/images/splash3.png'),
      require('./assets/images/splash4.png'),
      require('./assets/images/splash5.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include Fonts we need because we use it in throughout the app.
      playfairdisplay: require('./assets/fonts/playfair-display/PlayfairDisplay-Regular.otf'),
      'playfairdisplay-bold': require('./assets/fonts/playfair-display/PlayfairDisplay-Bold.otf'),
      montserrat: require('./assets/fonts/montserrat/Montserrat-Regular.otf'),
      'dincondensed-bold': require('./assets/fonts/dincondensed/DINCondensed-Bold.ttf'),
      'wala-icons': require('./assets/fonts/wala/icomoon.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
