import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingStack from './onBoarding-stack-nav';

const GlobalStack = createNativeStackNavigator();

const GlobalStackNav = () => {
  return (
    <GlobalStack.Navigator>
      <GlobalStack.Screen
        name="onBoadingStack"
        component={OnBoardingStack}
        options={{headerShown: false}}
      />
    </GlobalStack.Navigator>
  );
};

export default GlobalStackNav;
