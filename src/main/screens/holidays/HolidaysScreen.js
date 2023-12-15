import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';

const holidayList = [
  {
    id: 1,
    title: 'Good Friday',
    date: 'April 7, 2023',
    day: 'Friday',
  },
  {
    id: 2,
    title: 'Ambedkar Jayanti',
    date: 'April 14, 2023',
    day: 'Friday',
  },
  {
    id: 3,
    title: 'Maharashtra Day / Labour Day',
    date: 'May 1, 2023',
    day: 'Monday',
  },
  {
    id: 4,
    title: 'Bakri EID',
    date: 'June 29, 2023',
    day: 'Thursday',
  },
  {
    id: 5,
    title: 'Independence Day',
    date: 'August 15, 2023',
    day: 'Tuesday',
  },
  {
    id: 6,
    title: 'Ganesh Chaturthi',
    date: 'September 19, 2023',
    day: 'Tuesday',
  },
  {
    id: 7,
    title: 'Mahatma Gandhi Jayanti',
    date: 'October 2, 2023',
    day: 'Monday',
  },
  {
    id: 8,
    title: 'Dussehra',
    date: 'October 24, 2023',
    day: 'Tuesday',
  },
  {
    id: 9,
    title: 'Diwali Balipratipada',
    date: 'November 14, 2023',
    day: 'Tuesday',
  },
  {
    id: 10,
    title: 'Guru Nanak Jayanti',
    date: 'November 27, 2023',
    day: 'Monday',
  },
  {
    id: 11,
    title: 'Christmas',
    date: 'December 25, 2023',
    day: 'Monday',
  },
  {
    id: 12,
    title: 'Republic Day',
    date: 'January 26, 2024',
    day: 'Thursday',
  },
  {
    id: 13,
    title: 'Holi',
    date: 'March 7, 2024',
    day: 'Tuesday',
  },
];

const HolidaysScreen = () => {
  const [commObj, setCommObj] = useState({
    todayDate: moment(new Date()).format('YYYY-MM-DD'),
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#EFF1FE',
        }}>
        <View
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 25,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Holidays List
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={holidayList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 15,
              paddingVertical: 20,
            }}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  key={item.id}
                  style={{
                    backgroundColor: '#fff',
                    paddingVertical: 15,
                    borderRadius: 15,
                    borderLeftColor:
                      moment(item.date).format('YYYY-MM-DD') > commObj.todayDate
                        ? '#3085FE'
                        : 'lightgray',
                    borderLeftWidth: 15,
                    paddingLeft: 10,
                    paddingRight: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingBottom: 10,
                        alignItems: 'center',
                      }}>
                      <Icon name="calendar" size={30} color={'#000'} />
                      <View
                        style={{
                          paddingTop: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                            fontWeight: '500',
                          }}>
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          lineHeight: 21,
                          color: '#777777',
                        }}>
                        {item.day}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingLeft: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#000',
                        fontWeight: 'bold',
                        letterSpacing: 1,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HolidaysScreen;
