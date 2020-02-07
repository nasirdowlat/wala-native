import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import UpcomingScreen from '../screens/UpcomingScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VirtualChefScreen from '../screens/VirtualChefScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const UpcomingStack = createStackNavigator(
  {
    Upcoming: UpcomingScreen,
  },
  config
);

UpcomingStack.navigationOptions = {
  tabBarLabel: 'Upcoming',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${
              focused ? '' : '-outline'
            }`
          : 'md-information-circle'
      }
    />
  ),
};

UpcomingStack.path = '';

const CommunityStack = createStackNavigator(
  {
    Community: CommunityScreen,
  },
  config
);

CommunityStack.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${
              focused ? '' : '-outline'
            }`
          : 'md-information-circle'
      }
    />
  ),
};

CommunityStack.path = '';

const ExplorerStack = createStackNavigator(
  {
    Explorer: ExplorerScreen,
  },
  config
);

ExplorerStack.navigationOptions = {
  tabBarLabel: 'Explorer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${
              focused ? '' : '-outline'
            }`
          : 'md-information-circle'
      }
    />
  ),
};

ExplorerStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${
              focused ? '' : '-outline'
            }`
          : 'md-information-circle'
      }
    />
  ),
};

ProfileStack.path = '';

const VirtualChefStack = createStackNavigator(
  {
    VirtualChef: VirtualChefScreen,
  },
  config
);

VirtualChefStack.navigationOptions = {
  tabBarLabel: 'VirtualChef',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${
              focused ? '' : '-outline'
            }`
          : 'md-information-circle'
      }
    />
  ),
};

VirtualChefStack.path = '';

const tabNavigator = createBottomTabNavigator({
  UpcomingStack,
  CommunityStack,
  ExplorerStack,
  ProfileStack,
  VirtualChefStack,
});

tabNavigator.path = '';

export default tabNavigator;
