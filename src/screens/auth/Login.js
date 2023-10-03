import { View, Text, TouchableOpacity, Dimensions, KeyboardAvoidingView,ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState, useCallback, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { renderHeaderAuth, renderStatusBarLight } from "../../utils/functions";
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
// import styles from "./Styles/LoginStyle"
import { components } from "../../components";
import { theme, names } from "../../constants";
import { LoginAction } from "../../services/actions/AuthAction";
import makeStyles from './Styles/LoginStyle'
import { GetProfileAction } from "../../services/actions/ProfileAction";
import { svg } from "../../svg";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import { setScreen } from "../../store/tabSlice";


const screenWidth = Dimensions.get('screen').width
console.log("----screenWidth---22", screenWidth)

const Login = ({ apColors }) => {
  const dispatch = useDispatch()
  const sheetRef = useRef()
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["45%"], []);
  // const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const styles = makeStyles(apColors)

  const signInFtn = () => {


    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    if (!strongRegex.test(email)) {
      let obj = {
        type: "email",
        error: true,
        email: "Email is required."
      }
      setErrorMessage(obj)
      return false;
    } else if (password.length < 8) {
      let obj = {
        type: "password",
        error: true,
        password: "Password must be atleast 8 characters."
      }
      setErrorMessage(obj);
      return false;
    } else {
      setErrorMessage({})
      setIsLoading(true)
      // TODO---
      let data = {
        // email: "usman.ali@devbeans.io",
        // password: 'Pakistan@123@',
        email: email.toLowerCase().toString(),
        password: password.toString(),
      }

      dispatch(LoginAction(data)).unwrap().then((result) => {
        // console.log("----data----", data)
        console.log("----Login screen API----", result)
        if (result?.success || result?.token != null) {

          getProfileAPI(result)

          dispatch(setScreen('Home'))
         // navigation.navigate(names.TabNavigator)

         navigation.reset({
          index: 1,
          routes: [
            {
              name: names.TabNavigator,
            },
          ],
        });

        } 
        
        
        
        else if (!result?.success) {
          let obj = {
            type: "api_error",
            error: true,
            message: result?.message
          }
          setErrorMessage(obj);
          // sheetRef?.current?.open()
          sheetRef.current.open()
          // handleBottomSheet()
        }
        else {
          let obj = {
            type: "api_error",
            error: true,
            message: "Something went wrong!"
          }
          setErrorMessage(obj);
          sheetRef.current.open()
          // handleBottomSheet()
          // console.log("----Login screen API else----", result)
        }
        setIsLoading(false)
      }).catch((error) => {
        console.log("----Login screen API Catch----", error)
        setIsLoading(false)
        
        if (error.message == 'Rejected') {
          let obj = {
            type: "api_error",
            error: true,
            message: 'No Internet'
          }
          setErrorMessage(obj);
          // sheetRef?.current?.open()
          sheetRef.current.open()
          // handleBottomSheet()
        }
        else{
        let obj = {
          type: "api_error 403",
          error: true,
          message: error?.message
        }
        setErrorMessage(obj);
      }
        sheetRef.current.open()
        // handleBottomSheet()
      })
    }
  }

  const getProfileAPI = (result) => {

    dispatch(GetProfileAction(result)).unwrap().then((response) => {
console.log("result login ---",result)
    }).catch((error) => {
      console.log("----Login screen API Catch----", error)
      setIsLoading(false)
      let obj = {
        type: "api_error 403",
        error: true,
        message: error?.message
      }
      setErrorMessage(obj);
    })

  }

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
      {/* <View style={styles.contentContainerStyle}> */}
        <components.InputField
          title="Email"
          placeholder="someone@mail.com"
          containerStyle={styles.inpContainer}
          onChangeText={(val) => {
            setEmail(val)
          }}
          autoFocused={true}
          apColors
        // check={true}
        />
        {errorMessage?.email ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {errorMessage?.email}
          </Text>
        </View> : null}

        <View style={styles.mTop}></View>

        <components.InputField
          title="Password"
          placeholder="••••••••"
          containerStyle={styles.inpContainer}
          eyeOffSvg={true}
          secureTextEntry={true}
          onChangeText={(val) => {
            setPassword(val)
          }}
          apColors
        />

        {errorMessage?.password ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {errorMessage?.password}
          </Text>
        </View> : null}
        <View
          style={styles.forgotPassView1}
        >
          <View
            style={styles.forgotPassView}
          // onPress={() => {
          //   setRememberMe((rememberMe) => !rememberMe);
          // }}
          >
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(names.ForgotPass)}
          >
            <Text
              style={styles.forgotPassTxt}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <components.Button
          title="Sign in"
          containerStyle={{ marginBottom: theme.MARGINS.hy20 }}
          style={{ backgroundColor: (email === "" || password === "") ? apColors.appColorLight : apColors.appColor }}
          disable={email === "" || password === ""}
          loading={isLoading}
          onPress={() => {
            // navigation.navigate(names.TabNavigator)
            signInFtn()
          }
          }
        />

        <components.SecondaryButton
          title="Continue as a guest"
          containerStyle={{ backgroundColor: apColors.white }}
          onPress={() => {
            dispatch(setScreen('Home'))
            //navigation.navigate(names.TabNavigator)
            navigation.reset({
              index: 1,
              routes: [
                {
                  name: names.TabNavigator,
                },
              ],
            });
          }
          }
        />

        {renderFooter()}
      {/* </View> */}
     </KeyboardAwareScrollView> 
    );
  };

  const renderBackdropBottomSheet = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        BackdropPressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const handleBottomSheet = () => {
    console.log("i am self pickup");
    bottomSheetRef.current?.snapToIndex(0);
  };

  const BottomSheet1 = () => {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
          <svg.ErrorSvg />
          <Text style={styles.bsTitleTxt}>Authentication Error!</Text>
          <Text style={styles.bsDescTxt}>{errorMessage?.message}</Text>

          <components.SecondaryButton
            title={'Cancel'}
            containerStyle={{ marginTop: theme.MARGINS.marginXParent_s }}
            onPress={() => bottomSheetRef.current?.close()}
          />

        </BottomSheetView>
      </BottomSheet>
    )
  }

  const renderFooter = () => {

    return (
     
      <View style={styles.signupView}>
        <Text
          style={styles.dontHavAcc}
        >
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(names.Register)}>
          <Text
            style={styles.signupLabel}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    
    )
  }

  const SheetItem = () => {
    return (
      <BottomSheetView style={styles.bsCont}>
        <svg.ErrorSvg />
        <Text style={styles.bsTitleTxt}>Authentication Error!</Text>
        <Text style={styles.bsDescTxt}>{errorMessage?.message}</Text>

        <components.SecondaryButton
          title={'Cancel'}
          containerStyle={{ marginTop: theme.MARGINS.marginXParent_s }}
          onPress={() => sheetRef.current?.close()}
        />

      </BottomSheetView>
    )
  }

  return (
     <View style={styles.mainContainer} >

      {renderStatusBarLight()}
      {renderHeaderAuth('Welcome', 'Sign in to continue')}
      {renderContent()}
      {/* {renderFooter()} */}
      {/* {BottomSheet1()} */}

      <BottomSheetWrapper
        ref={sheetRef}
      >
        <SheetItem />
      </BottomSheetWrapper>
   
    </View>
  );
};

export default Login;
