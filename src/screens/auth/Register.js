import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderHeaderAuth, renderStatusBar, renderStatusBarLight} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";

const Register = () => {
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
        {/* <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1,
            marginBottom: 30,
            textTransform: "capitalize",
            color: theme.COLORS.black,
          }}
        >
          Sign up
        </Text> */}
        <components.InputField
          title="Full Name"
          placeholder=""
          containerStyle={{marginBottom: 20}}
          // check={true}
        />
        <components.InputField
          title="Email"
          placeholder=""
          onChangeText={(val)=>{ setEmail(val)
                }}
          // autoFocused={true}
          apColors
          // check={true}
          containerStyle={{marginBottom: 20}}

        />

        {errorMessage?.email?<View style={styles.errorMsg}>
        <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                lineHeight: 12 * 1.5,
                color: apColors.redCBg,
              }}
            >
              {errorMessage?.email}
            </Text>
        </View>:null}
        {/* <components.InputField
          title="password"
          placeholder="••••••••"
          containerStyle={{marginBottom: 20}}
          eyeOffSvg={true}
          secureTextEntry={true}
        />
        <components.InputField
          title="confirm password"
          placeholder="••••••••"
          containerStyle={{marginBottom: 20}}
          eyeOffSvg={true}
          secureTextEntry={true}
        /> */}

       {/* -------STUDENT BENEFITS INFO------ */}

       <View style={{backgroundColor:"#d3d3d3", padding:14, borderRadius: 16, marginBottom:20, marginTop: 20}}>
        <Text style={{fontSize: 16}}>As a student, you'll enjoy exclusive benefits:</Text>
        <Text style={{fontSize: 12, fontWeight: '300', lineHeight: 24}}>Brands discounts</Text>
        <Text style={{fontSize: 12, fontWeight: '300', lineHeight: 24}}>Discount Vouchers</Text>
       </View>

        <components.Button
          title="Next"
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.navigate(names.RegisterConfirm)}
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
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
            <svg.FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
            <svg.TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
            <svg.GoogleSvg />
          </TouchableOpacity>
        </View> */}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={{...theme.Main_Container}}>
      {renderStatusBarLight()}
      {renderHeaderAuth('Personal info', 'Fill the details to continue', "signup")}
      {/* {renderHeader()} */}
      {renderContent()}
    </View>
  );
};

export default Register;
