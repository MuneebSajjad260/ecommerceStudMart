
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

import ForgotLockSvg from "../../svg/ForgotLockSvg";

const ForgotPass = ({ apColors }) => {
  const navigation = useNavigation();
  const styles = makeStyles(apColors)
  const screenWidth = Dimensions.get('screen').width

  const [email , setEmail] = useState({value: "", error: ""})

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
        </View>
        <components.Button
          title="send"
          onPress={() => navigation.navigate(names.verifyPass)}
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
