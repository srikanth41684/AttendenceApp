import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../main/screens/dashBoard/HomeScreen';
import LeaveDetailsNav from './leave-details-nav';
import HolidaysScreen from '../main/screens/holidays/HolidaysScreen';
import ProfileStackNav from './profile-stack-nav';

const BottomTab = createBottomTabNavigator();

const BottomTabnav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="leaveDetailsStack"
        component={LeaveDetailsNav}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="holiday"
        component={HolidaysScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="profileStack"
        component={ProfileStackNav}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabnav;
