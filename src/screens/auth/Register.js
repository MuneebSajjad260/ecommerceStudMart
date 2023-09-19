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
      setIsLoading(true)
      let data = {
        email: email,
        name: name
      }
      navigation.navigate(names.RegisterConfirm, { email: email })

      try {
        dispatch(SignupAction(data)).unwrap().then((result) => {
          // console.log("result", result)
          if (result?.success) {
            setErrorMessage({})
            navigation.navigate(names.RegisterConfirm, { email: email })

          } else {
            let obj = {
              error: true,
              message: result?.message
            }
            setErrorMessage(obj)
          }
          setIsLoading(false)

        }).catch((error) => {
          // console.log("--signup error--", error?.response?.data?.message)
          setIsLoading(false)
          let obj = {
            error: true,
            message: error?.response?.data?.message
          }
          setErrorMessage(obj)

        })
      } catch (error) {
        console.log("--signup error--", error)
        setIsLoading(false)

      }
    } else {
      // Kindly fill all the feilds
      let obj = {
        error: true,
        message: "Fill all feilds."
      }
      setErrorMessage(obj)
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

        <View style={{ backgroundColor: 'rgba(20, 0, 35, 0.03)', padding: 14, borderRadius: 16, marginBottom: 20, marginTop: 20 }}>
          <Text style={{ ...theme.FONTS.H5  , color: theme.COLORS.black}}>As a student, you'll enjoy exclusive benefits:</Text>
          <Text style={{ ...theme.FONTS.H12 , color: theme.COLORS.black , marginTop:theme.MARGINS.hy5 }}>Brands discounts</Text>
          <Text style={{ ...theme.FONTS.H12 , color: theme.COLORS.black }}>Discount Vouchers</Text>
        </View>

        <View style={styles.footerView}>
          {errorMessage?.error ? <View style={styles.errorMsg}>
            <Text
              style={styles.errorText}
            >
              {errorMessage?.message}
            </Text>
          </View> : null}
          <components.Button
            title="Next"
            containerStyle={{ marginVertical: theme.MARGINS.hy20 }}
            style={{ backgroundColor: (email === "" || name === "") ? apColors.appColorLight : apColors.appColor }}
            onPress={() => handleSignup()}
            disable={email === "" || name === ""}
            loading={isLoading}
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
    <View style={styles.mainContainer}>
      {renderStatusBarLight()}
      {renderHeaderAuth('Personal info', 'Fill the details to continue', "signup")}
      {renderContent()}
    </View>
  );
};

export default Register;
