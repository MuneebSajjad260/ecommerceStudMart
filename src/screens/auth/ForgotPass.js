import {Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";

const ForgotPass = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header title="Forgot password" goBack={true} />;
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
            lineHeight: 16 * 1.7,
            marginBottom: 40,
          }}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <components.InputField
          title="Email"
          placeholder="kristinwatson@mail.com"
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title="send"
          onPress={() => navigation.navigate(names.NewPass)}
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

export default ForgotPass;
