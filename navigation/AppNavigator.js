import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import AuthStack from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator,
  })
);
