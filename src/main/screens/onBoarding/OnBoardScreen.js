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
import {useNavigation} from '@react-navigation/native';

// const images = new Array(3).fill(
//   'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
// );

const images = [
  {
    id: 1,
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw1JYkmpsWww9VcE70JrLjzK&ust=1702463834143000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDWtZTaiYMDFQAAAAAdAAAAABAE',
    title: 'Easy way to confirm your attendence',
    description:
      'Lorem ipsum dolor sit amet. Et ipsum magnam qui suscipit aperiameum debitis perferendis',
  },
  {
    id: 2,
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw1JYkmpsWww9VcE70JrLjzK&ust=1702463834143000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDWtZTaiYMDFQAAAAAdAAAAABAE',
    title: 'Disciplinary in your hand',
    description:
      'Lorem ipsum dolor sit amet. Et ipsum magnam qui suscipit aperiameum debitis perferendis',
  },
  {
    id: 3,
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw1JYkmpsWww9VcE70JrLjzK&ust=1702463834143000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDWtZTaiYMDFQAAAAAdAAAAABAE',
    title: 'Reduce the workload of Manager',
    description:
      'Lorem ipsum dolor sit amet. Et ipsum magnam qui suscipit aperiameum debitis perferendis',
  },
];

const OnBoardScreen = () => {
  const customNavigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sliderState, setSliderState] = React.useState({currentPage: 0});

  const {width: windowWidth} = useWindowDimensions();
  const {currentPage: pageIndex} = sliderState;

  function onScrollHandler() {
    let screenIndex = pageIndex + 1;
    scrollX.current?.scrollTo({
      x: windowWidth * screenIndex,
      animated: true,
    });
  }
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
          ref={scrollX}
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
                  source={{uri: image.src}}
                  resizeMode="contain"
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray',
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
                <View
                  style={{
                    width: '100%',
                    height: '30%',
                    paddingTop: 20,
                  }}>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                      }}>
                      {image.title}
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
                      {image.description}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              customNavigation.navigate('employeeType');
            }}>
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

{
  // <View
  //   style={{
  //     position: 'absolute',
  //     bottom: 0,
  //     backgroundColor: '#fff',
  // width: '100%',
  // height: '40%',
  //     borderTopLeftRadius: 20,
  //     borderTopRightRadius: 20,
  //     padding: 25,
  //     justifyContent: 'space-between',
  //   }}>
  //   <View
  //     style={{
  //       width: '100%',
  //       flexDirection: 'row',
  //       justifyContent: 'center',
  //     }}>
  //     {images.map((image, imageIndex) => {
  //       const width = scrollX.interpolate({
  //         inputRange: [
  //           windowWidth * (imageIndex - 1),
  //           windowWidth * imageIndex,
  //           windowWidth * (imageIndex + 1),
  //         ],
  //         outputRange: [8, 16, 8],
  //         extrapolate: 'clamp',
  //       });
  //       return (
  //         <View key={imageIndex}>
  //           <Animated.View
  //             key={imageIndex}
  //             style={[
  //               {
  //                 height: 8,
  //                 width: 8,
  //                 borderRadius: 4,
  //                 backgroundColor: '#3085FE',
  //                 marginHorizontal: 4,
  //               },
  //               {width},
  //             ]}
  //           />
  //           <View>
  //             <View style={{}}>
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: 'bold',
  //                   color: '#000',
  //                   textAlign: 'center',
  //                 }}>
  //                 {image.title}
  //               </Text>
  //             </View>
  //             <View
  //               style={{
  //                 paddingTop: 10,
  //               }}>
  //               <Text
  //                 style={{
  //                   fontSize: 14,
  //                   fontWeight: 'normal',
  //                   color: '#777777',
  //                   textAlign: 'center',
  //                 }}>
  //                 {image.description}
  //               </Text>
  //             </View>
  //           </View>
  //         </View>
  //       );
  //     })}
  //   </View>
  // <TouchableWithoutFeedback>
  //   <View
  //     style={{
  //       backgroundColor: '#3085FE',
  //       alignItems: 'center',
  //       paddingVertical: 10,
  //       borderRadius: 8,
  //     }}>
  //     <Text
  //       style={{
  //         fontSize: 16,
  //         lineHeight: 23,
  //         color: '#fff',
  //       }}>
  //       Next
  //     </Text>
  //   </View>
  // </TouchableWithoutFeedback>
  // </View>;
}
