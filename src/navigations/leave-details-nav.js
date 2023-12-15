import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowLeavesScreen from '../main/screens/leaveDetails/ShowLeavesScreen';
import ApplyLeavesScreen from '../main/screens/leaveDetails/ApplyLeavesScreen';

const LeaveDetailsStack = createNativeStackNavigator();
const LeaveDetailsNav = () => {
  return (
    <LeaveDetailsStack.Navigator>
      <LeaveDetailsStack.Screen
        name="showLeavs"
        component={ShowLeavesScreen}
        options={{headerShown: false}}
      />
      <LeaveDetailsStack.Screen
        name="applyLeave"
        component={ApplyLeavesScreen}
        options={{headerShown: false}}
      />
    </LeaveDetailsStack.Navigator>
  );
};

export default LeaveDetailsNav;
