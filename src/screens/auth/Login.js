import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import React, {useState, useCallback, useRef, useMemo} from "react";
import { useDispatch } from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {renderHeaderAuth, renderStatusBarLight} from "../../utils/functions";
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
// import styles from "./Styles/LoginStyle"
import {components} from "../../components";
import {theme, names} from "../../constants";
import { LoginAction } from "../../services/actions/AuthAction";
import makeStyles from './Styles/LoginStyle'
import { GetProfileAction } from "../../services/actions/ProfileAction";
import { svg } from "../../svg";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";

const screenWidth = Dimensions.get('screen').width
console.log("----screenWidth---22", screenWidth)

const Login = ({apColors}) => {
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
      let obj ={
        type: "email",
        error: true,
        email: "Email is required."
      }
        setErrorMessage(obj)
        return false;
    } else if (password.length < 8) {
      let obj ={
        type: "password",
        error: true,
        password: "Password must be atleast 8 characters."
      }
        setErrorMessage(obj);
        return false;
    }else{
      setErrorMessage({})
      setIsLoading(true)
      // TODO---
      let data ={
         email: "usman.ali@devbeans.io",
         password: 'Pakistan@123@',
        // email: email.toLowerCase().toString(),
        // password:password.toString(),
      }

      dispatch(LoginAction(data)).unwrap().then((result)=>{
        console.log("----data----", data)
        console.log("----Login screen API----", result)
        if(result?.success || result?.token != null){

          getProfileAPI(result)

          navigation.navigate(names.TabNavigator)
        }else if(!result?.success){
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
        else{
          let obj = {
            type: "api_error",
            error: true,
            message: "Something went wrong!"
          }
          setErrorMessage(obj);
          sheetRef.current.open()
          // handleBottomSheet()
          console.log("----Login screen API else----", result)
        }
        setIsLoading(false)
      }).catch((error)=>{
        console.log("----Login screen API Catch----", error)
        setIsLoading(false)
        let obj = {
          type: "api_error 403",
          error: true,
          message: error?.message
        }
        setErrorMessage(obj);
        sheetRef.current.open()
        // handleBottomSheet()
      })
    }
}

const getProfileAPI=(result)=>{

  dispatch(GetProfileAction(result)).unwrap().then((response)=>{

  }).catch((error)=>{
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

  // const renderHeaderAuth = () => {
  //   return   <View style={{alignSelf:"center"}}>
  //   <svg.WelcomeSvg width={screenWidth}/>
  //   <View style={{position:"absolute", bottom: theme.MARGINS.hyMax, left: theme.MARGINS.maX_xxxs}}>
  //     <Text style={{...theme.FONTS.H36, color: apColors.whiteOnly }}>Welcome</Text>
  //     <Text style={{...theme.FONTS.H5, fontWeight:"700", color: apColors.whiteOnly, bottom:-5 }}>Sign in to continue</Text>
  //   </View>
  //   </View>;
  // };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={{alignSelf:"center"}}>
        <svg.WelcomeSvg/>
        </View> */}
        {/* <components.Line containerStyle={{marginBottom: 14}} /> */}
        {/* <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1,
            marginBottom: 14,
            textTransform: "capitalize",
            color: apColors.black,
          }}
        >
          Welcome Back!
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 30,
            lineHeight: 16 * 1.7,
            color: apColors.gray1,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
          }}
        >
          Sign in to continue
        </Text> */}
        <components.InputField
          title="Email"
          placeholder="xyz@mail.com"
          onChangeText={(val)=>{ setEmail(val)
                }}
          autoFocused={true}
          apColors
          // check={true}
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

        <components.InputField
          title="Password"
          placeholder="••••••••"
          containerStyle={{marginTop: theme.MARGINS.hy20 }}
          eyeOffSvg={true}
          secureTextEntry={true}
          onChangeText={(val)=>{ setPassword(val)
            }}
          apColors
        />

        {errorMessage?.password?<View style={styles.errorMsg}>
        <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                lineHeight: 12 * 1.7,
                color: apColors.redCBg,
              }}
            >
              {errorMessage?.password}
            </Text>
        </View>:null}
        <View
          style={styles.forgotPassView1}
        >
          <View
            style={styles.forgotPassView}
            // onPress={() => {
            //   setRememberMe((rememberMe) => !rememberMe);
            // }}
          >
            {/* <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 5,
                borderWidth: 0,
                borderColor: apColors.lightBlue1,
                marginRight: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            > */}
              {/* {rememberMe == true && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: apColors.lightBlue1,
                    borderRadius: 2,
                  }}
                />
              )} */}
            {/* </View> */}
            {/* <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: apColors.gray1,
              }}
            >
              Remember me
            </Text> */}
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

        {/* {errorMessage?.message?
        <View style={styles.errorMsg}>
        <Text
              style={styles.apiError}
            >
              {errorMessage?.message}
            </Text>
        </View>:null} */}
        <components.Button
          title="Sign in"
          containerStyle={{marginBottom: theme.MARGINS.hy20}}
          disable={email==="" || password===""}
          loading={isLoading}
          onPress={() => {
            // navigation.navigate(names.TabNavigator)
                signInFtn()
          }
        }
        />

        <components.SecondaryButton
          title="Continue as a guest"
          containerStyle={{marginBottom: theme.MARGINS.hy20}}
          onPress={() => navigation.navigate(names.TabNavigator)}
        />
        <View
          style={styles.signupView}
        >
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

        {/* ------Social Logins----- */}
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

  const BottomSheet1 = () =>{
    return(
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
        <svg.ErrorSvg/>
        <Text style={styles.bsTitleTxt}>Authentication Error!</Text>
        <Text style={styles.bsDescTxt}>{errorMessage?.message}</Text>

        <components.SecondaryButton
          title={'Cancel'}
          containerStyle={{marginTop: theme.MARGINS.marginXParent_s}}
         onPress={()=> bottomSheetRef.current?.close() }
        />

        </BottomSheetView>
      </BottomSheet>
    )
  }

  const SheetItem = () =>{
    return(
      <BottomSheetView style={styles.bsCont}>
        <svg.ErrorSvg/>
        <Text style={styles.bsTitleTxt}>Authentication Error!</Text>
        <Text style={styles.bsDescTxt}>{errorMessage?.message}</Text>

        <components.SecondaryButton
          title={'Cancel'}
          containerStyle={{marginTop: theme.MARGINS.marginXParent_s}}
         onPress={()=> sheetRef.current?.close() }
        />

        </BottomSheetView>
    )
  }

  return (
    <View style={{flex:1}}>
      {renderStatusBarLight()}
      {renderHeaderAuth()}
      {renderContent()}
      {/* {BottomSheet1()} */}

      <BottomSheetWrapper
      ref={sheetRef}
      >
        <SheetItem/>
      </BottomSheetWrapper>

    </View>
  );
};

export default Login;
