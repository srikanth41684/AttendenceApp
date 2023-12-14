import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../main/screens/dashBoard/HomeScreen';
import LeaveDetailsNav from './leave-details-nav';
import HolidaysScreen from '../main/screens/holidays/HolidaysScreen';
import ProfileStackNav from './profile-stack-nav';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, View} from 'react-native';

const BottomTab = createBottomTabNavigator();

const BottomTabnav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          left: 15,
          right: 15,
          bottom: 15,
          borderRadius: 10,
          height: 60,
          // shadowColor: 'red',
          // shadowOffset: {
          //   width: 0,
          //   height: 10,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.5,
          // elevation: 5,
        },
      }}>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="home"
                size={25}
                color={focused ? '#3085FE' : '#000'}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 19,
                    color: focused ? '#3085FE' : '#000',
                    fontWeight: focused ? 'bold' : '500',
                  }}>
                  Home
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="leaveDetailsStack"
        component={LeaveDetailsNav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="barschart"
                size={25}
                color={focused ? '#3085FE' : '#000'}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 19,
                    color: focused ? '#3085FE' : '#000',
                    fontWeight: focused ? 'bold' : '500',
                  }}>
                  Leaves
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="holiday"
        component={HolidaysScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="calendar"
                size={25}
                color={focused ? '#3085FE' : '#000'}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 19,
                    color: focused ? '#3085FE' : '#000',
                    fontWeight: focused ? 'bold' : '500',
                  }}>
                  Holidays
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="profileStack"
        component={ProfileStackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="user"
                size={25}
                color={focused ? '#3085FE' : '#000'}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 19,
                    color: focused ? '#3085FE' : '#000',
                    fontWeight: focused ? 'bold' : '500',
                  }}>
                  Profile
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabnav;
