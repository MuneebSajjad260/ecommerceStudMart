import { View, Text, TouchableOpacity,ActivityIndicator, useColorScheme } from "react-native";
import React from "react";

import getThemedColors from "../utils/themeMode";
import { theme } from "../constants";

const Button = ({ title, onPress, containerStyle, style, textStyle, disable,loading }) => {
  const colors = getThemedColors(useColorScheme())

  return (
    <View style={{ ...containerStyle, width: "100%" }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 50,
          borderWidth:1,
          borderColor: colors.inputBorder,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:  colors.white ,
          ...style
        }}
        onPress={onPress}
      >
          {loading ? (
          <ActivityIndicator color={colors.white} />
        ) :(
        <Text
          style={{
            color: colors.black,
            // textTransform: "capitalize",
            ...theme.FONTS.Mulish_600SemiBold,
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1.1,           
             ...textStyle,
          }}
        >
          {title}
        </Text>)}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
