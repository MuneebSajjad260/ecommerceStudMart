/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity, Keyboard, useColorScheme } from "react-native";
import React, { useState } from "react";

import { theme } from "../constants";
import { svg } from "../svg";
import getThemedColors from "../utils/themeMode";

const InputField = ({
  title,
  placeholder,
  icon,
  containerStyle,
  secureTextEntry,
  keyboardType,
  check,
  eyeOffSvg = false,
  isFocus = false,
  onChangeText,
  autoFocused,
  value
}) => {
  const colors = getThemedColors(useColorScheme())

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [colorINP, setColorINP] = useState({
    // eslint-disable-next-line prettier/prettier
    border: colors.inputBorder,
    text: colors.inputLabel,
    opacity: 0.2,
  });

  return (
    <View
      style={{
        paddingLeft: 30,
        height: 50,
        width: "100%",
        borderWidth: 1,
        // opacity: colorINP.opacity,
        borderRadius: 16,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
        borderColor: colorINP.border,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          ...theme.FONTS.Mulish_400Regular,
          fontSize: 16,
          color: colors.black
        }}
        autoFocus={autoFocused}
        onFocus={() => { setColorINP({ border: colors.appColor, text: colors.appColor }) }}
        onBlur={() => { setColorINP({ border: colors.inputBorder, text: colors.inputLabel }) }}
        selectionColor={colors.appColor}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && passwordVisible}
        placeholderTextColor={colors.lightGray}
        onChangeText={(val) => onChangeText(val)}
        value={value}
      />
      {title && (
        <View
          style={{
            position: "absolute",
            top: -12,
            left: 20,
            paddingHorizontal: 10,
            backgroundColor: colors.appBg,
            // opacity: 1
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_600SemiBold,
              fontSize: 12,
              // textTransform: "uppercase",
              color: colorINP.text,
              lineHeight: 12 * 1.7,
              // opacity: 0.8

            }}
          // opacity={1}
          >
            {title}
          </Text>
        </View>
      )}
      {check && <View style={{ paddingHorizontal: 20 }}>{<svg.CheckSvg />}</View>}
      {eyeOffSvg && (
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!passwordVisible);
            Keyboard.dismiss();
          }}
          style={{ paddingHorizontal: 20 }}>
          {passwordVisible ?
            <svg.EyeOffSvg stroke={colors.gray2} /> :
            <svg.EyeOnSvg stroke={colors.gray2} />
          }
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(InputField);
