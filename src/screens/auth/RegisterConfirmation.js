import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderHeaderAuth, renderStatusBar, renderStatusBarLight} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";

const EMAIL = 'someone@mail.com'

const RegisterConfirmation = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.SIZES.height * 0.06,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        {/* <components.Line containerStyle={{marginBottom: 14}} /> */}
        <Text
          style={{
            // textAlign: "center",
            marginBottom: 80,
            // textTransform: "capitalize",
            color: theme.COLORS.black,
            fontSize: theme.FONTS.dF_m,
          }}
        >
          {`A verification email has been sent to your ${EMAIL} account. Please verify your email to continue`} 
        </Text>
        
        <components.SecondaryButton
          title="Browse products"
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.navigate(names.TabNavigator)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 40,
            alignSelf:"center"
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.gray1,
              marginRight: 3,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(names.Login)}>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                color: theme.COLORS.black,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
       
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={{...theme.Main_Container}}>
      {renderStatusBarLight()}
      {renderHeaderAuth('One step away!', 'Verifying your email address', "mail")}
      {/* {renderHeader()} */}
      {renderContent()}
    </View>
  );
};

export default RegisterConfirmation;
