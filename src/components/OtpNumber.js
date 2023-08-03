import { View, TextInput } from "react-native";
import React from "react";

import { theme } from "../constants";

const OtpNumber = () => {
  return (
    <View
      style={{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.COLORS.lightBlue1,
      }}
    >
      <TextInput
        style={{
          textAlign: "center",
          paddingHorizontal: 22,
          paddingVertical: 14.5,
          fontSize: 24,
          ...theme.FONTS.Mulish_400Regular,
          color: theme.COLORS.black,
        }}
        keyboardType="number-pad"
        maxLength={1}
      />
    </View>
  );
};

export default OtpNumber;
