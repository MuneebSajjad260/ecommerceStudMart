
import React,{useState} from "react";
import { View,Text,Dimensions,TouchableOpacity } from "react-native";
import { EmailValidator } from "../../utils/validation";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBarLight} from "../../utils/functions";
import makeStyles from "./Styles/ForgotStyle";
import {components} from "../../components";
import {theme, names} from "../../constants";
import SignupSvg from "../../svg/SignupSvg";
import MailSvg from "../../svg/MailSvg";
import {svg} from '../../svg'
import { ForgotPassApi } from "../../services/actions/ForgotPassApi";
import ForgotLockSvg from "../../svg/ForgotLockSvg";
import { useDispatch } from "react-redux";

const ForgotPass = ({ apColors }) => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const styles = makeStyles(apColors)
  const screenWidth = Dimensions.get('screen').width

  const [email , setEmail] = useState({value: "", error: ""})
  const [forgetRes, setForgetRes]=useState()
  const [isPending , setIsPending]=useState(false)

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

  const submitSend=()=>{

    setIsPending(true);
    dispatch(ForgotPassApi({user_email:email.value})).unwrap().then(result=>{
      console.log("forgot pass api result--",result)
  setForgetRes(result)
  if(result?.status == 200) {
    navigation.navigate(names.verifyPass,{email:email.value})
  }
    }).catch(err=>{
      console.log("forgot pass err--",err)
  setForgetRes(err)
    }).finally(() => {
      setIsPending(false); // Set loading to false after the API call is completed (either success or error)
    });

  }

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
          <components.InputField
         
            error={email.error}
            title="Email address"
            onChangeText={(text) => {
              setEmail({ value: text, error: EmailValidator(text) });
            }}
            value={email?.value}
          />
             {email?.error ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {email?.error}
          </Text>
        </View> : null}

        {forgetRes?.status == 404 ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {forgetRes?.message}
          </Text>
        </View> : null}

        </View>
        <components.Button
         loading={isPending}
         disable={(email.value === '' || email.error !== '') ? true : false}
          title="send"
          onPress={submitSend}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={styles.mainContainer} >
      {renderStatusBarLight()}
      {renderHeaderAuth('Forgot password', 'Enter your registered email',"mail")}
      {renderContent()}
      </View >
  );
};

export default ForgotPass;
