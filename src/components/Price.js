import { View, Text } from "react-native";
import React from "react";

import { theme } from "../constants";

const Price = ({ item, containerStyle, textStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      {item.old_price && (
        <Text
          style={{
            color: theme.COLORS.gray1,
            marginRight: 4,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            lineHeight: 12 * 1.5,
            textDecorationLine: "line-through",
          }}
        >
          QAR {item.old_price}
        </Text>
      )}
      <Text
        style={{
          ...theme.FONTS.Mulish_600SemiBold,
          fontSize: 14,
          lineHeight: 14 * 1.5,
          color: item.old_price ? theme.COLORS.accent : theme.COLORS.black,
          ...textStyle,
        }}
      >
        QAR {item.price}
      </Text>
    </View>
  );
};

export default Price;
