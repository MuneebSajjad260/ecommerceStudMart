import React, { useState, useMemo } from "react";
import { Dimensions, Platform } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize as rfs
} from "react-native-responsive-dimensions";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { sWidth, sHeight } = Dimensions.get("screen");
const { width, height } = Dimensions.get("window");

const COLORS = {
  appColor: '#00CACD',
  appColorOnly: '#00CACD',
  appColorLight: 'rgba(0, 202, 205, 0.3)',
  appColorXtraLight: 'rgba(0, 202, 205, 0.1)',

  primaryBg: '#6919C7', // purple
  primaryBg2: 'rgba(105, 25, 199, 1)', // purple
  // FrameBackground => secondBg
  secondBg: '#ffffff',
  // appBg: 'rgba(250, 251, 255, 1)',
  appBg: '#FAFBFF',

  backBtn: '#000',
  replyBg: '#FFF',
  inputBorder: "rgba(20, 0, 35, 0.2)",
  // inputBorder: "#140023",
  inputLabel: "rgba(20, 0, 35, 0.5)",
  primaryTxt: "#140023",
  textDark: "rgba(20, 0, 35, 1)",
  whiteOnly: "#FFFFFF",
  border: "#E0E0E0",
  secondryTextColor: '#A7A7A7',
  grayXtraLight: "rgba(20, 0, 35, 0.08)",
  gray2: "rgba(20, 0, 35, 1)",
  lightRed: 'rgba(255, 36, 73, 0.1)',
  darkRed: '#FF5F5F',
  counterGrey: 'rgba(20, 0, 35, 0.08)',
error:'#E03249',
  // ---------------
  black: "#111111",
  white: "#FFFFFF",
  gray1: "rgba(167, 167, 167, 1)", //text secondary
  lightGray: "#BABABA",
  accent: "#F4303C",
  lightBlue1: "#DBE3F5",
  lightBlue2: "#EBF2FC",
  green: "#00824B",
  transparent: "transparent",
  divider: 'rgba(20, 0, 35, 0.07)',



  // categories colors
  redCBg: '#F75C96',
  purpCBg: '#BE31E3',
  blueCBg: '#4C97FD',
  yellowCBg: '#F8BD38',
  greenCBg: '#5ECFB1',
  orangeCBg: '#E9776D',

  shadowCl: '#D2D3D7',

  regularText: '#1E2432', // default regular text
  mediumText: '#1E2432', // default medium text
  boldText: '#1E2432', // default bold text
  heavyText: '#1E2432', // default heavy text

  hText: '#1E2432', // heading text
  tText: '#1E2432', // title text
  taxTitle: '#1E2432', // category/location text
  taxCount: '#B8BBC6', // category/location counter text
  addressText: '#B8BBC6', // address text
  pText: '#1E2432', // paragraph text

  searchText: '#C7C7CC', // text for search box
  searchBg: 'rgba(142,142,147,0.12)', // search box
  avatarIcon: '#979797', // avatar icon

  separator: '#EAECEF', // separator line
  searchIconBg: 'rgba(216,216,216,0.7)', // icon background near result title

  fieldLbl: '#BEC2CE', // input field label
  inputFocus: '#BEC2CE',

  pastDay: '#BEC2CE',
  unavailableDay: '#BEC2CE',

  lMoreText: '#8E8E93',

  buttonPrimaryBg: '#4DB7FE',

  headerNavStyle: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAECEF',
    // height: 80,
  },
  headerTitleStyle: {
    //  fontFamily: boldFontFamily,
    color: '#1E2432',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'center',
  },
  tabBarColors: {
    activeTintColor: '#4DB7FE',
    inactiveTintColor: '#808080',
    style: {
      backgroundColor: '#F2F2F2', // '#FFF',
      borderTopColor: '#EAECEF',
    },
    labelPosition: "below-icon",
  },
  modalBg: '#00000040', // must be 6 or 8 characters color
  modalInner: '#FFF',

};
// To handle Dark mode
export const themedColors = {
  default: {
    ...COLORS,
  },
  light: {
    ...COLORS,
  },
  dark: {
    ...COLORS,

    // dark mode colors
    appColor: '#00CACD',
    appColorOnly: '#00CACD',
    appColorLight: 'rgba(255, 255, 255, 0.2)',
    appColorXtraLight: 'rgba(0, 202, 205, 0.1)',
    primaryBg: '#6919C7',
    counterGrey: 'rgba(20, 0, 35, 0.08)',
    appBg: 'rgba(25, 27, 32, 1)',
    secondBg: 'rgba(30, 33, 39, 1)',
    primaryTxt: "#ffffff",
    // secondBg: 'rgba(255, 255, 255, 0.1)',
    // inputBorder: "rgba(255, 255, 255, 0.1)",
    inputBorder: "#ffffff",
    inputLabel: "rgba(122, 122, 122, 1)",
    backBtn: '#FFF',
    replyBg: '#FFF',
    grayXtraLight: "rgba(20, 0, 35, 0.08)",
    error:'#E03249',
    textDark: "rgba(20, 0, 35, 1)",
    gray2: "rgba(122, 122, 122, 1)",
    border: "#E0E0E0",
    secondryTextColor: '#A7A7A7',
    lightRed: 'rgba(255, 36, 73, 1)',
    darkRed: '#FF5F5F',
    divider: 'rgba(20, 0, 35, 0.07)',

    // ----------
    black: "#ffffff",
    white: "rgba(25, 27, 32, 1)",
    whiteOnly: "#FFFFFF",
    gray1: "rgba(122, 122, 122, 1)",
    lightGray: "#BABABA",
    accent: "#F4303C",
    lightBlue1: "#DBE3F5",
    lightBlue2: "#EBF2FC",
    green: "#00824B",
    transparent: "transparent",

    // categories colors
    redCBg: '#F75C96',
    purpCBg: '#BE31E3',
    blueCBg: '#4C97FD',
    yellowCBg: '#F8BD38',
    greenCBg: '#5ECFB1',
    orangeCBg: '#E9776D',

    shadowCl: '#222831',

    regularText: '#FFF',
    mediumText: '#FFF',
    boldText: '#FFF',
    heavyText: '#FFF',

    hText: '#FFF',
    tText: '#FFF',
    taxTitle: '#FFF',
    taxCount: '#EEE',
    addressText: '#EEE',
    pText: '#FFF',

    searchText: '#FFF',
    searchBg: '#393e46',
    avatarIcon: '#FFF',

    separator: '#393e46',
    searchIconBg: '#393e46', // '#222831',

    fieldLbl: '#EEE',
    inputFocus: '#EEE',

    pastDay: '#EEE',
    unavailableDay: '#EEE',

    lMoreText: '#FFF',

    buttonPrimaryBg: 'tomato',

    headerNavStyle: {
      backgroundColor: '#000',
      borderBottomWidth: 0.5,
      borderBottomColor: '#393e46',
      // height: 80,
    },
    headerTitleStyle: {
      // fontFamily: boldFontFamily,
      color: '#FFF',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '700',
      alignSelf: 'center',
    },
    tabBarColors: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#FFF',
      style: {
        backgroundColor: '#010101', // '#000',
        borderTopColor: '#272729', // '#393e46',
      },
      labelPosition: "below-icon",
    },
    modalBg: '#000000', // must be 6 or 8 characters color
    modalInner: '#222831',
  },
}

const font = rfs(1)
const resFont = (fSize) => {

  let s = fSize / font.toFixed(0);
  console.log("---resres---", s)

  if (Platform.OS === "ios" && responsiveHeight(100) > 690) {
    s = s.toFixed(2) * 1.1;
  }

  if (Platform.OS === "android" && responsiveHeight(100) > 690) {
    s = s.toFixed(2) / 1.12;
  }

  return rfs(s)

}

const FONTS = {

  // ----size res_d (dF = dimensions font) ----
  dF_xxs: resFont(8), //8
  dF_xs: resFont(10), //10
  dF_s: resFont(12), //12
  dF_sm: resFont(14), //14
  dF_m: resFont(16),//16
  dF_l: resFont(18),//18
  dF_xl: resFont(20), //20
  dF_xxl: resFont(22), //22
  dF_xxxl: resFont(24), //24

  // ----Weight----
  weight_s: 300,
  weight_m: 400,
  weight_l: 500,
  weight_xl: 600,

  H1: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(32),
    lineHeight: resFont(32) * 1.25,
  },
  H36: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(36),
    lineHeight: resFont(36) * 1.25,
  },
  H1S: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(28),
    lineHeight: resFont(28) * 1.25,
  },
  H2L: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(24), //24
    lineHeight: resFont(24) * 1.25,
  },
  H2: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(22),
    lineHeight: resFont(22) * 1.25,
  },
  H3: {
    fontFamily: "Mulish-Bold",
    fontSize: resFont(20), //20
    lineHeight: resFont(20) * 1.25,
  },
  H4: {
    fontFamily: "Mulish-SemiBold",
    fontSize: resFont(18),
    lineHeight: resFont(18) * 1.25,
  },
  Font_l: {
    fontFamily: "Mulish-Regular",
    fontSize: resFont(18), // 18
    lineHeight: 18 * 1.3,
  },
  H5: {
    fontFamily: "Mulish-SemiBold",
    fontSize: resFont(16),
    lineHeight: resFont(16) * 1.25,
  },
  H12: {
    fontFamily: "Mulish-Regular",
    fontSize: resFont(12),
    lineHeight: resFont(12) * 1.25,
  },
  H14: {
    fontFamily: "Mulish-Regular",
    fontSize: resFont(14),
    lineHeight: resFont(14) * 1.25,
  },
  H10: {
    fontFamily: "Mulish-Regular",
    fontSize: resFont(10),
    lineHeight: resFont(10) * 1.25,
  },

  Mulish_400Regular: {
    fontFamily: "Mulish-Regular",
  },
  Mulish_600SemiBold: {
    fontFamily: "Mulish-SemiBold",
  },
  Mulish_700Bold: {
    fontFamily: "Mulish-Bold",
  },
};

const RES_HEIGHT = (small, medium, large) => {

  let size = responsiveHeight(1)

  if (responsiveHeight(100) < 690) {
    let scale = small / size.toFixed(0);
    return responsiveHeight(scale)
  }
  else if (responsiveHeight(100) > 690 && responsiveHeight(100) < 990) {
    let scale = medium / size.toFixed(0);
    return responsiveHeight(scale)
  }
  else {
    let scale = large / size.toFixed(0);
    return responsiveHeight(scale)
  }

}

const RES_WIDTH = (small) => {
  let size = responsiveWidth(1)
  let scale = small / size.toFixed(0);
  return responsiveWidth(scale)
}



const SIZES = {
  width,
  height,
  sWidth,
  sHeight,
  dWidth: responsiveHeight(100) < 690 ? responsiveWidth(100) : responsiveWidth(100) > 880 ? responsiveWidth(100) : responsiveWidth(100),
  dHeightXN: responsiveHeight(100) < 690 ? responsiveHeight(190) : responsiveHeight(100) > 880 ? responsiveHeight(40) : responsiveHeight(40),
  dHeightX1: responsiveHeight(100) < 690 ? responsiveHeight(107) : responsiveHeight(90), //onboarding
  dHeightFlexAndroid: responsiveHeight(100) < 690 ? 0.85 : responsiveHeight(100) > 880 ? 0.75 : 0.82, //onboarding Android
  dHeightFlexIOS: responsiveHeight(100) < 690 ? 0.85 : responsiveHeight(100) > 880 ? 0.8 : 0.82, //onboarding IOS
  dHeightX2: responsiveHeight(100) < 690 ? responsiveHeight(105) : responsiveHeight(100) > 820 ? responsiveHeight(85) : responsiveHeight(85),
  dHeight: responsiveHeight(100),
  rsWidth: wp('100%'),
  rsHeight: hp('100%'),
};

// X == Horizontal, Y == Vertical
const MARGINS = {
  // ---Parent Container Margins---
  marginXParent_xxxs: 6,
  marginXParent_xxs: 8,
  marginXParent_xs: 10,
  marginXParent_s: 12,
  marginXParent_sm: 14,
  marginXParent_m: 16,
  marginXParent_l: 18,
  marginXParent_xl: 20,
  marginXParent_xxl: 22,
  marginXParent_xxxl: 24,

  hx1: wp('60%'),
  hx2: responsiveHeight(60),
  hx3: wp('40%'),
  hyMax: responsiveHeight(100) < 690 ? responsiveHeight(14) : responsiveHeight(10), //Welcome
  hyMax2: responsiveHeight(100) < 690 ? responsiveHeight(10) : responsiveHeight(6), //subtitle

  // Height (Y- axis)
  hy5: responsiveHeight(0.5),
  hy10: responsiveHeight(100) < 690 ? responsiveHeight(1) : responsiveHeight(1.5),
  hy20: responsiveHeight(100) < 690 ? responsiveHeight(2.3) : responsiveHeight(2.6),
  hy30: responsiveHeight(100) < 690 ? responsiveHeight(2) : responsiveHeight(3.5),
  hy40: responsiveHeight(100) < 690 ? responsiveHeight(3) : responsiveHeight(5),
  hy50: responsiveHeight(50),
  hy60: responsiveHeight(60),

  // hy1: responsiveWidth(),

  // ---Margin Horizontal---
  maX_xxxs: responsiveWidth(5),
  maX_xxs: responsiveWidth(8),
  maX_xs: responsiveWidth(10),
  maX_s: responsiveWidth(12),
  maX_m: responsiveWidth(16),
  maX_l: responsiveWidth(18),
  maX_xl: responsiveWidth(20),
  maX_xxl: responsiveWidth(22),
  maX_xxxl: responsiveWidth(24),
  maX_xxxl3: responsiveWidth(30),


};

const ALIGN_CENTER = {
  flex: 1,
  alignItem: "center",
  justifyContent: "center",
};

const PARENT_ALIGN_CENTER = {
  alignItem: "center",
  justifyContent: "center"
};

const ALIGN_CENTER_BTW = {
  alignItem: "center",
  justifyContent: "space-between"
};

const PARENT_CONTAINER_STYLE = {
  marginHorizontal: MARGINS.marginXParent_xl,
  justifyContent: "space-between"
};

const SAFE_AREA = {
  flex: 1,
  backgroundColor: COLORS.white,
};

const Main_Container = {
  flex: 1,
  backgroundColor: COLORS.appBg,
};

const theme = {
  COLORS,
  FONTS,
  SIZES,
  MARGINS,
  SAFE_AREA,
  Main_Container,
  ALIGN_CENTER,
  ALIGN_CENTER_BTW,
  PARENT_CONTAINER_STYLE,
  PARENT_ALIGN_CENTER,
  RES_HEIGHT,
  RES_WIDTH,
};

export { theme };


/**
 * iphone 13 pro —8.7300395258817  (20 -> 2.29 )S6 — 7.34  (20-> 2.7)A71— 8.39  (20-> 2.38)

** 20/8 = 2.5
** —Font size—>8.5 == 2.29  --iphone 13
->8.0 == 2.3 // A71 
->7.5 == >7.0 == 2.7 -- S6  */

/**
resHeight(1)=> 8.44 --iphone 14
resHeight(1)=> 9.26 --iphone 13 pro max
resHeight(1)=> 8.12 --iphone 11 pro
resHeight(1)=> 8.44 --iphone 12
resHeight(1)=> 6.67 --iphone 8
*/