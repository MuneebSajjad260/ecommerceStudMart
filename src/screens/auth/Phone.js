import {Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";

import {theme, names} from "../../constants";
import {components} from "../../components";

const Phone = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header title="Verify your phone number" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingVertical: 30,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            lineHeight: 25,
            marginBottom: 40,
          }}
        >
          We have sent you an SMS with a code to number +17 0123456789.
        </Text>
        <components.InputField
          title="phone number"
          placeholder="+17123456789"
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title="confirm"
          onPress={() => navigation.navigate(names.Code)}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{...theme.SAFE_AREA}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Phone;
