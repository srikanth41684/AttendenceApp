import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef} from 'react';

const images = new Array(3).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

const OnBoardScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{width: windowWidth, height: '100%'}}
                key={imageIndex}>
                <ImageBackground
                  source={{uri: image}}
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0, 0.7)',
                      paddingHorizontal: 24,
                      paddingVertical: 8,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            width: '100%',
            height: '40%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 25,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[
                    {
                      height: 8,
                      width: 8,
                      borderRadius: 4,
                      backgroundColor: '#3085FE',
                      marginHorizontal: 4,
                    },
                    {width},
                  ]}
                />
              );
            })}
          </View>
          <View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                }}>
                Easy way to confirm your attendence
              </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#777777',
                  textAlign: 'center',
                }}>
                Lorem ipsum dolor sit amet. Et ipsum magnam qui suscipit aperiam
                eum debitis perferendis
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#3085FE',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#fff',
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

export default OnBoardScreen;
