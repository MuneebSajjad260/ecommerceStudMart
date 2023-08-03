import {View, Text, ScrollView} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBarLight} from "../utils/functions";

import {theme, onboardingData, names} from "../constants";
import {components} from "../components";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useRef } from "react";
import {svg} from "../svg";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Onboarding = () => {
  const navigation = useNavigation();
  const scrollV = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  console.log("---text---", responsiveFontSize(1))
  console.log("---text rH---", responsiveHeight(1))
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    // console.log("----contentOffsetX----", contentOffsetX, "---", theme.SIZES.width)
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const slideNext = () => {
    if(currentSlideIndex >= 2){
      navigation.navigate(names.Login)
    }else{
      let index = currentSlideIndex
      const currentIndex = Math.round(theme.SIZES.width * (index+1));
      setCurrentSlideIndex(index+1)
      scrollV.current.scrollTo({x: currentIndex, y: 0, animated: false})
    }
  }

  const slideBack = () => {
    if(currentSlideIndex == 0){
      return;
    }else{
      let index = currentSlideIndex
      const currentIndex = Math.round(theme.SIZES.width * (index-1));
      setCurrentSlideIndex(index-1)
      scrollV.current.scrollTo({x: currentIndex, y: 0, animated: false})
    }
  }

  const renderContentNext = () => {
    return(
      <View 
      style={{
      flexDirection:"row", 
      justifyContent:"space-between", 
      width: theme.SIZES.width/1.2,
      position:"absolute",
      bottom: theme.MARGINS.hy40,
      alignSelf:"center",
      alignItems:"center",
    }}
      >
        {/* ----Back---- */}
        {currentSlideIndex!=0? 
        (<Pressable  
        onPress={()=>{slideBack()}}
        style={{
          zIndex:1, 
          flex:0.5, 
          justifyContent:"flex-start",
          flexDirection:"row",
          // alignItems:"center"
          }}>
          <svg.ArrowLeftSvg/>

        <Text
           style={{
                          ...theme.FONTS.H3,
                          color: theme.COLORS.white,
                          justifyContent:"center",
                          marginLeft: theme.RES_WIDTH(10),
                        }}
                      >
                        Back
                      </Text>
        </Pressable>):
        (<View style={{zIndex:1, flex:0.5 }}></View>)
        }
        <View style={{zIndex:1, flex:0.6}}>
        <Indicators/>
        </View>

        {/* ----Next---- */}
        <Pressable 
        onPress={()=>{slideNext()}}
        style={{ 
          zIndex:1, 
          flex:0.5, 
          // alignSelf:"flex-end", 
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-end"
          }}>
              <Text
                style={{
                  ...theme.FONTS.H3,
                  color: theme.COLORS.white,
                  justifyContent:"center",

                  marginRight: theme.RES_WIDTH(10),
                }}
              >
                Next
              </Text>
              <svg.ArrowRightSvg />
      </Pressable>
      </View>
    )
  }

  const Indicators = () => {
    return (<View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {onboardingData.map((_, index) => {
        return (
          <View
            key={index}
            style={[
              {
                width: 14,
                height: 7,
                marginHorizontal: 5,
                borderRadius: 50,
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
              currentSlideIndex == index && {
                width: 23,
                height: 7,
                backgroundColor: theme.COLORS.appColor,
              },
            ]}
          />
        );
      })}
    </View>)
  }

  const renderContent = () => {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
        ref={scrollV}
        style={{backgroundColor: theme.COLORS.primaryBg}}
      >
        {onboardingData.map((item, index) => {
          return (
            <View key={index}>
            <components.BgImageItem
              key={index}
              item={item}
              containerStyle={{
                flex: Platform.OS=="ios"? theme.SIZES.dHeightFlexIOS: theme.SIZES.dHeightFlexAndroid ,
                // height: Platform.OS=="ios"? theme.RES_HEIGHT(530,580,650) : theme.RES_HEIGHT(560,570,650),
                width: theme.SIZES.width,
              }}
              // imageStyle={{justifyContent: "flex-end"}}
              resizeMode={'contain'}
              >
              </components.BgImageItem>
              
              {/* <View style={{
                height: 10,
                width: theme.SIZES.width,
              borderBottomWidth:2, 
              borderBottomColor:"orange", 
              borderBottomRightRadius: 150,
              borderBottomLeftRadius: 150,
              transform: [{scaleY:4}]
              }}>
              </View> */}
              
              {/* <components.Line containerStyle={{marginBottom: 4}} /> */}
              <View 
              // style={{height: theme.MARGINS.hx1}}
              >
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.H2L,
                  color: theme.COLORS.white,
                  marginBottom: theme.MARGINS.hy40,
                  width: theme.SIZES.width
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.Font_l,
                  color: theme.COLORS.white,
                  // marginBottom: 34,
                  width: theme.SIZES.width/1.15,
                  alignSelf:"center",
                }}
              >
                {item.description}
              </Text>
              </View>
              {/* <components.Button
                title="Get Started"
                containerStyle={{
                  marginBottom: 30,
                  paddingHorizontal: theme.SIZES.width * 0.17,
                }}
                onPress={() => navigation.navigate(names.Login)}
              /> */}
              {/* <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                {onboardingData.map((_, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        {
                          width: 6,
                          height: 6,
                          marginHorizontal: 5,
                          borderRadius: 50,
                          borderWidth: 2,
                          borderColor: theme.COLORS.black,
                          backgroundColor: theme.COLORS.black,
                        },
                        currentSlideIndex == index && {
                          width: 22,
                          height: 8,
                          backgroundColor: theme.COLORS.transparent,
                        },
                      ]}
                    />
                  );
                })}
              </View> */}
            
              </View>
          );
        })}
      </ScrollView>
    );
  };

  const renderSkip =()=>{
    return(
      <Pressable 
      onPress={() => navigation.navigate(names.Login)}
      style={{
        position:"absolute",
        top: 50,
        right: 30,
        alignSelf:"flex-end",
        }}>
        <Text 
        style={{ 
          color: theme.COLORS.whiteOnly,
          ...theme.FONTS.H3,
        }}
          >Skip</Text>
      </Pressable>
    )

  }

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.primaryBg}}>
      {renderStatusBarLight()}
      {renderContent()}
      {renderContentNext()}
      {renderSkip()}
    </View>
  );
};

export default Onboarding;
