import { Text, useColorScheme } from "react-native";
import React from "react";

import { theme } from "../constants";
import getThemedColors from "../utils/themeMode";

const ProductName = ({ item, style }) => {
  const colors = getThemedColors(useColorScheme())

  return (
    <Text
      style={{
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 14,
        color: colors.textDark,
        lineHeight: 14 * 1.7,
        ...style,
      }}
      numberOfLines={1}
    >
      {item.name}
    </Text>
  );
};

export default ProductName;
