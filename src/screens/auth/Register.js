import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { renderHeaderAuth, renderStatusBarLight } from "../../utils/functions";
import { useDispatch } from "react-redux";
import { components } from "../../components";
import { theme, names } from "../../constants";
import { SignupAction } from "../../services/actions/AuthAction";
import makeStyles from "./Styles/SignupStyle";

const Register = ({ apColors }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const styles = makeStyles(apColors)

  const handleSignup = () => {

    if (email != "" && name != "") {
      let data = {
        email: email
      }
      navigation.navigate(names.RegisterConfirm, { email: email })

      console.log("----Email Signup -----", email)
      // try {
      //   dispatch(SignupAction(data)).unwrap().then((result) => {
      //     console.log("result", result)
      //     if (result?.success) {
      //       navigation.navigate(names.RegisterConfirm, { email: email })

      //     } else {
      //       console.log("--signup else errr--")
      //     }

      //   })
      // } catch (error) {
      //   console.log("--signup error--", error)
      // }
    } else {

    }
  }

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentScroll}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        {/* <components.Line containerStyle={{marginBottom: 14}} /> */}

        <components.InputField
          title="Full Name"
          placeholder=""
          containerStyle={{ marginBottom: 20 }}
          onChangeText={(val) => { setName(val) }}
        />
        <components.InputField
          title="Email"
          placeholder=""
          onChangeText={(val) => { setEmail(val) }}
          apColors
          containerStyle={{ marginBottom: 20 }}
        />

        {errorMessage?.email ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorText}
          >
            {errorMessage?.email}
          </Text>
        </View> : null}

        {/* -------STUDENT BENEFITS INFO------ */}

        <View style={{ backgroundColor: "#d3d3d3", padding: 14, borderRadius: 16, marginBottom: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 16 }}>As a student, you'll enjoy exclusive benefits:</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', lineHeight: 24 }}>Brands discounts</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', lineHeight: 24 }}>Discount Vouchers</Text>
        </View>

        <View style={styles.footerView}>
          <components.Button
            title="Next"
            containerStyle={styles.btnNext}
            onPress={() => handleSignup()}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 0,
              alignSelf: "center"
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
                style={styles.signinText}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={{ ...theme.Main_Container }}>
      {renderStatusBarLight()}
      {renderHeaderAuth('Personal info', 'Fill the details to continue', "signup")}
      {renderContent()}
    </View>
  );
};

export default Register;
