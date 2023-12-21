import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const ApplyLeavesScreen = () => {
  const customNavigation = useNavigation();
  const [commObj, setCommObj] = useState({
    fromDate: new Date(),
    toDate: new Date(),
    reason: '',
    numberOfDays: 0,
    formDatePicker: false,
    toDatePicker: false,
    maxDate: null,
    leaveData: [],
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#EFF1FE',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 23,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Apply Leave
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            gap: 15,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                formDatePicker: true,
              }));
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'blue',
                borderRadius: 8,
                paddingLeft: 10,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#777777',
                }}>
                Start Date :
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000000',
                }}>
                {moment(commObj.fromDate).format('MMMM DD, YYYY')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                toDatePicker: true,
              }));
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'blue',
                borderRadius: 8,
                paddingLeft: 10,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#777777',
                }}>
                End Date :
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000000',
                }}>
                {moment(commObj.toDate).format('MMMM DD, YYYY')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#777777',
                paddingBottom: 5,
              }}>
              Reason for a leave
            </Text>
            <TextInput
              value={commObj.reason}
              multiline={true}
              numberOfLines={10}
              style={{
                height: 90,
                textAlignVertical: 'top',
                borderWidth: 0.5,
                borderColor: 'blue',
                borderRadius: 8,
                color: '#000',
                paddingLeft: 10,
              }}
              placeholder="Enter reason for a Leave"
              placeholderTextColor="#777777"
              onChangeText={text => {
                setCommObj(prev => ({
                  ...prev,
                  reason: text,
                }));
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#777777',
              }}>
              Number of Days:{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
              }}>
              {commObj.numberOfDays}
            </Text>
          </View>
        </View>
        <DatePicker
          modal
          mode="date"
          date={commObj.fromDate}
          //   minimumDate={new Date(globalData.minDate)}
          //   maximumDate={new Date(globalData.maxDate)}
          open={commObj.formDatePicker}
          title="Select Start Date"
          onConfirm={date => {
            setCommObj(prev => ({
              ...prev,
              fromDate: date,
              formDatePicker: false,
            }));
            if (date >= commObj.toDate) {
              setCommObj(prev => ({
                ...prev,
                toDate: date,
              }));
            }
          }}
          onCancel={() => {
            setCommObj(prev => ({
              ...prev,
              formDatePicker: false,
            }));
          }}
        />
        <DatePicker
          modal
          mode="date"
          //   maximumDate={
          //     commObj.maxDate
          //       ? new Date(
          //           moment(commObj.maxDate)
          //             .subtract(1, 'days')
          //             .format('YYYY-MM-DD'),
          //         )
          //       : new Date(globalData.maxDate)
          //   }
          //   minimumDate={
          //     commObj.fromDate <= commObj.toDate ? commObj.fromDate : null
          //   }
          title="Select End Date"
          date={commObj.toDate}
          open={commObj.toDatePicker}
          onConfirm={date => {
            setCommObj(prev => ({
              ...prev,
              toDate: date,
              toDatePicker: false,
            }));
          }}
          onCancel={() => {
            setCommObj(prev => ({
              ...prev,
              toDatePicker: false,
            }));
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ApplyLeavesScreen;
