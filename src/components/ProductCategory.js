import {View, Text, TouchableOpacity, useColorScheme} from "react-native";
import React from "react";

import {theme} from "../constants";
import {svg} from "../svg";
import getThemedColors from "../utils/themeMode";


const ProductCategory = ({title, onPress, containerStyle, visibleRight}) => {
  console.log("----viewRight---", visibleRight)
  const colors = getThemedColors(useColorScheme())

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Text style={{...theme.FONTS.H3, color: theme.COLORS.black}}>
        {title}
      </Text>
      {!visibleRight ?
      <TouchableOpacity onPress={onPress}>
      {/* <svg.ViewAllSvg /> */}
      <Text style={{color: theme.COLORS.inputLabel, ...theme.FONTS.H14}}>View all</Text>
    </TouchableOpacity>
    :
    <View style={{height:16}}>
    </View>
      }
      
    </View>
  );
};

export default ProductCategory;
