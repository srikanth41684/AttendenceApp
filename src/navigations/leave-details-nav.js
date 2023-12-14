import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowLeavesScreen from '../main/screens/leaveDetails/ShowLeavesScreen';

const LeaveDetailsStack = createNativeStackNavigator();
const LeaveDetailsNav = () => {
  return (
    <LeaveDetailsStack.Navigator>
      <LeaveDetailsStack.Screen
        name="showLeavs"
        component={ShowLeavesScreen}
        options={{headerShown: false}}
      />
    </LeaveDetailsStack.Navigator>
  );
};

export default LeaveDetailsNav;
