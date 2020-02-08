import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';

const AuthStack = createStackNavigator({
  GetStarted: GetStartedScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
  RecoverPassword: RecoverPasswordScreen,
});

export default AuthStack;
