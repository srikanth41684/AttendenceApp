import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from '../main/screens/onBoarding/OnBoardScreen';

const OnBoardingNav = createNativeStackNavigator();

const OnBoardingStack = () => {
  return (
    <OnBoardingNav.Navigator>
      <OnBoardingNav.Screen
        name="onBoard"
        component={OnBoardScreen}
        options={{headerShown: false}}
      />
    </OnBoardingNav.Navigator>
  );
};

export default OnBoardingStack;
