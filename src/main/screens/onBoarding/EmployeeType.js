import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const EmployeeType = () => {
  const customNavigation = useNavigation();
  const [commObj, setCommObj] = useState({
    userType: null,
  });

  useEffect(() => {
    console.log('commObj------>', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#EFF1FE',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 25,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Select The Role
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 20,
            paddingTop: 20,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                userType: 'manager',
              }));
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor:
                  commObj.userType == 'manager' ? '#B4FFB7' : '#fff',
                borderWidth: 1,
                borderColor: commObj.userType == 'manager' ? '#00BE08' : '#fff',
                height: 150,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: '500',
                }}>
                Manager
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                userType: 'employee',
              }));
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor:
                  commObj.userType == 'employee' ? '#B4FFB7' : '#fff',
                borderWidth: 1,
                borderColor:
                  commObj.userType == 'employee' ? '#00BE08' : '#fff',
                height: 150,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: '500',
                }}>
                Employee
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            paddingBottom: 20,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (commObj.userType !== null) {
                customNavigation.navigate('bottomTab');
              }
            }}>
            <View
              style={{
                backgroundColor:
                  commObj.userType !== null ? '#3085FE' : '#9bbff2',
                paddingVertical: 10,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#fff',
                  fontWeight: '500',
                }}>
                Next
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmployeeType;
