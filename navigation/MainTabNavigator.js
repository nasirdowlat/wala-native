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
    <TabBarIcon focused={focused} name="ic_tab_upcoming" />
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
    <TabBarIcon focused={focused} name="ic_tab_news" />
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
    <TabBarIcon focused={focused} name="ic_tab_explorer" />
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
    <TabBarIcon focused={focused} name="ic_tab_profile" />
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
      name="ic_tab_virtual_chef"
    />
  ),
};

VirtualChefStack.path = '';

const tabNavigator = createBottomTabNavigator({
  UpcomingStack,
  ExplorerStack,
  VirtualChefStack,
  CommunityStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
