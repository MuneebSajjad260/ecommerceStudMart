import { ActivityIndicator, View, ImageBackground,Image, Text, Platform } from "react-native";
import React, { useState } from "react";

import { theme } from "../constants";
import { onboardOutlineCenter, onboardOutlineLeft, onboardOutlineRight } from "../constants/images";
import OnboardOutlineSvg from "../svg/OnboardOutlineSvg";
import OnboardOutline2Svg from "../svg/OnboardOutline2Svg";
const ratio = theme.SIZES.width / 375; //375 is actual image width

const BgImageItem = ({
  item,
  containerStyle,
  children,
  resizeMode,
  borderRadius,
  indicatorBorderRadius,
  imageStyle,
}) => {
  const [loading, setLoading] = useState(true);
  const [elementLoaded, setElementLoaded] = useState(true);

  const onloading = (value) => {
    setLoading(value);
  };
console.log("----D height---", theme.SIZES.dHeight)
  return (
    <View style={{ ...containerStyle }} key={item.index}>
      {/* {loading && (
        <ActivityIndicator
          size="large"
          color={theme.COLORS.lightGray}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.COLORS.lightBlue2,
            borderRadius: indicatorBorderRadius,
          }}
        />
      )} */}
      {/* {item.type =="left"? */}
{/* <OnboardOutlineSvg/> */}
{/* <OnboardOutline2Svg width={theme.SIZES.width}/> */}

      {/* } */}
      <ImageBackground
        style={{ 
          flex:1,
          height: Platform.OS=="ios"? theme.RES_HEIGHT(550,570, 650): theme.RES_HEIGHT(560,585, 620), 
          // height: Platform.OS=="ios"? theme.SIZES.dHeightX1/1.35: theme.SIZES.dHeightX1/1.3, 
          top: -(theme.SIZES.dHeightXN/15),
          width:theme.SIZES.dWidth * 1.005,
          // left:-1,
          alignSelf:"center",
           ...imageStyle,
          //  aspectRatio: 1,
          //  height: undefined,
           }}
        // source={{ uri: item.image }}
        // source={item.image}
        source={item.type==="center"? onboardOutlineCenter: item.type==="right"? onboardOutlineRight:  onboardOutlineLeft}
        onLoadStart={() => onloading(true)}
        onLoadEnd={() => onloading(false)}
        resizeMode={resizeMode}
        borderRadius={borderRadius}
      >
        {loading === false && (
          <View style={{ 
            width: theme.SIZES.dWidth, 
            // height: 425 * ratio
            height: theme.SIZES.height/1.55
            // height: theme.SIZES.rsHeight
             }}>
            {elementLoaded === true && (
              <ActivityIndicator
                size="large"
                color={theme.COLORS.lightGray}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 0,
                  opacity: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            )}
            <Image
              // source={onboardOutlineLeft}
              source={item.image}
              style={{
                // flex:1.2,
                width: theme.SIZES.dWidth * 1.28,
                // height: 425 * ratio, //425 is actual height of image
                // height: theme.SIZES.height/1.6, //425 is actual height of image
                // height: '98%', //425 is actual height of image
                aspectRatio: 5/5,
                // height: theme.SIZES.dHeightX1/1.5,
                height: undefined,
                // height: theme.SIZES.dHeight/1.45, //425 is actual height of image -small
                // justifyContent: "center",
                alignSelf: "center",
              }}
              resizeMode="contain"
              onLoadStart={() => setElementLoaded(true)}
              onLoadEnd={() => setElementLoaded(false)}
            >
              {/* {elementLoaded === false && children} */}
            </Image>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default BgImageItem;
