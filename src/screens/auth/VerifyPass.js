
import React,{useState} from "react";
import { View,Text,Dimensions,TouchableOpacity } from "react-native";
import { EmailValidator } from "../../utils/validation";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";
import makeStyles from "./Styles/VerifyPassStyle";
import {components} from "../../components";
import {theme, names} from "../../constants";
import SignupSvg from "../../svg/SignupSvg";
import MailSvg from "../../svg/MailSvg";
import { useDispatch } from "react-redux";
import {svg} from '../../svg'
import { setScreen } from "../../store/tabSlice";
import ForgotLockSvg from "../../svg/ForgotLockSvg";

const VerifyPass = ({ apColors ,route}) => {
  const navigation = useNavigation();
  const {email} = route.params || {};
  const dispatch = useDispatch()
  const styles = makeStyles(apColors)
  const screenWidth = Dimensions.get('screen').width


  const renderHeaderAuth = (title, subtitle, icon) => {
    return <View style={{ alignSelf: "center" }}>

{/* ///// */}
        
        <View
        style={{
         position: "absolute",
          left: 0,
          bottom:theme.RES_HEIGHT(2, 200, 10),
          alignItems: "center",
          // backgroundColor:"pink",
          // marginTop: level,
          marginLeft:20,
          zIndex:1,
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 50,
        }}
      >
        <TouchableOpacity
          style={{
            paddingLeft:20,
            paddingRight:8,
            paddingBottom:10,
            paddingTop:18
          }}
          onPress={() => navigation.goBack()}
        >
          <svg.GoBackSvg />
        </TouchableOpacity>
      </View>
      
      {/* ///// */}
  

      <svg.WelcomeSvg width={screenWidth} />
      <View style={{ position: "absolute", bottom: theme.MARGINS.hyMax, left: theme.MARGINS.maX_xxxs }}>
        {icon == "signup" &&
          <SignupSvg />
        }
        {icon == "mail" &&
          <MailSvg />
        }
          {/* {icon == "lock" &&
          <ForgotLockSvg />
        } */}
        <Text style={{ ...theme.FONTS.H36, color: theme.COLORS.whiteOnly }}>{title}</Text>
        <Text style={{ ...theme.FONTS.H5, fontWeight: "700", color: theme.COLORS.whiteOnly, bottom: -5 }}>{subtitle}</Text>
      </View>
    </View>;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingVertical: 30,
          justifyContent:'space-between'
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
      
      <View>
     <Text style={styles.desc}>
     An email with a password reset link sent to <Text style={[styles.desc,{color:theme.COLORS.black}]}>{email}</Text> account. Please check the link to reset the password
     </Text>

     <Text style={[styles.desc,{marginTop:theme.MARGINS.hy40}]}>
     Didn’t receive the email yet?
     </Text>
     <TouchableOpacity onPress={()=>{navigation.navigate(names.ForgotPass)}}>
     <Text style={[styles.desc,{marginTop:theme.MARGINS.hy5, color:theme.COLORS.appColor}]}>
     Resend email
     </Text>
     </TouchableOpacity>
     </View>
     <View>
        <components.SecondaryButton
          title="Browse products"
          onPress={() => {    
          dispatch(setScreen('Home'))
          navigation.reset({
            index: 1,
            routes: [
              {
                name: names.TabNavigator,
              },
            ],
          })}}
        />
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
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={styles.mainContainer} >
      {renderStatusBar()}
      {renderHeaderAuth('Forgot password', 'Verifying your email address',"mail")}
      {renderContent()}
      </View >
  );
};

export default VerifyPass;
