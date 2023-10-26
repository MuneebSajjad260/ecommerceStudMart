import { View, Text, TouchableOpacity, ActivityIndicator, useColorScheme } from "react-native";
import React from "react";
import getThemedColors from "../utils/themeMode";

import { theme } from "../constants";

const Button = ({ title, onPress, containerStyle,style, textStyle, disable, loading }) => {

  const colors = getThemedColors(useColorScheme())

  return (
    <View style={{ ...containerStyle, width: "100%" }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
         backgroundColor: !disable? colors.appColor : colors.appColorLight,
          ...style
        }}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (<Text
          style={{
            color: colors.whiteOnly,
            // textTransform: "capitalize",
            ...theme.FONTS.Mulish_600SemiBold,
            fontSize: 16,
            fontWeight: '800',
            letterSpacing: 1.2,
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
