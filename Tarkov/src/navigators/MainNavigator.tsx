import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen, HomeScreen, WeaponsScreen} from '../screens';

import {WELCOME_SCREEN, HOME_SCREEN, WEAPONS_SCREEN} from '../Labels';

export type MainStackParamList = {
  [WELCOME_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  [WEAPONS_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'WelcomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={WEAPONS_SCREEN} component={WeaponsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
