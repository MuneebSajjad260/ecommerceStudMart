import {View, Text, ImageBackground} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {useNavigation} from "@react-navigation/native";
// import FastImage from 'react-native-fast-image'

import {renderStatusBarLight} from "../utils/functions";
import {components} from "../components";
import {theme, names} from "../constants";
import { patternBg } from "../constants/images";
import LogoFrameSvg from "../svg/LogoFrameSvg";

const GetStarted = () => {
  const navigation = useNavigation();

  const renderContent = () => {
    return (
      <ImageBackground
      source={patternBg}
      style={[{flex:1}]}
      >
       <SafeAreaView style={{...theme.ALIGN_CENTER}}>
        {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        /> */}

        <View style={{alignSelf:"center"}}>
        <LogoFrameSvg />
        </View>

    {/* -----GET Started----- */}
    <View style={{
        position:"absolute",
        bottom: 30,
        alignSelf:"center",
    }}>
      <View style={{flexDirection:"row", marginBottom: theme.RES_WIDTH(5),}}>
      <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1S,
            textTransform: "capitalize",
            color: theme.COLORS.whiteOnly,
          }}
        >
          {'Welcome to '}
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1S,
            
            fontWeight:"900",
            marginLeft: theme.RES_WIDTH(4),
            textTransform: "capitalize",
            color: theme.COLORS.whiteOnly,
          }}
        >
          {'Qatar’s #1'}
        </Text>
      </View>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1S,
            marginBottom: 26,
            textTransform: "capitalize",
            color: theme.COLORS.whiteOnly,
          }}
        >
          {'Student Marketplace'}
        </Text>
        
        <components.Button
          title="Get Started"
          containerStyle={{marginBottom: 20 }}
          style={{ backgroundColor: theme.COLORS.appColor}}
          textStyle={{ fontSize: 16}}
          onPress={() => navigation.navigate(names.Onboarding)}
        />
        </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };

  return (
    <View style={{...theme.SAFE_AREA}}>
      {renderStatusBarLight()}
      {renderContent()}
    </View>
  );
};

export default GetStarted;
