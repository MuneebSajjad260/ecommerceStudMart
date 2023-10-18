import React,{useState , useEffect} from "react";
import {View, ScrollView, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/ChangePasswordStyles";
import { useDispatch, useSelector } from 'react-redux';
import { PasswordValidator } from "../../utils/validation";
import Button from "../../components/Button";
import { logout } from "../../services/actions/AuthAction";
import { resetUser } from "../../store/loginSlice";
import { ChangePasswordApi } from "../../services/actions/ChangePasswordApi";
import { names } from "../../constants";

const ChangePassword = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const auth = useSelector(state=>state?.login?.data);
  console.log("auth--",auth)
  const [currPass , setCurrPass] = useState({value: "", error: ""})
  const [newPass , setNewPass] = useState({value: "", error: ""})
  const [confirmPass , setConfirmPass] = useState({value: "", error: ""})
  const [passRes ,setPassRes]= useState()
  const [isPending , setIsPending]=useState(false)

  const renderHeader = () => {
    return <components.Header title="Change password" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const handleUpdatePassword =()=>{
    const body ={user_id:auth?.userid , old_password:currPass?.value , new_password: newPass?.value}
    console.log("body----",body)
    setIsPending(true);
    dispatch(ChangePasswordApi(body)).unwrap().then(result=>{
      console.log("result change pass-",result)
      setPassRes(result)

      setCurrPass({value: '', error: ''});
      setNewPass({value: '', error: ''});
      setConfirmPass({value: '', error: ''});

      dispatch(logout());
      dispatch(resetUser());
      // navigation.navigate(names.GetStarted)
      navigation.reset({
        index: 3,
        routes: [{name: names.Login}],
      });

    }).catch(err=>{
      console.log("err change pass -",err)
      setPassRes(err)
    }).finally(() => {
      setIsPending(false); // Set loading to false after the API call is completed (either success or error)
    });
  }

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>
    <View>
<View style={styles.marginBottom}>
<components.InputField
          title="Current Password"
          placeholder="••••••••"
          containerStyle={styles.inpContainer}
          eyeOffSvg={true}
          secureTextEntry={true}
          onChangeText={(val) => {
            setCurrPass({value: val, error: ""});
          }}
       value={currPass?.value}
        />

{passRes?.status == 401 ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
Old password is incorrect
          </Text>
        </View> : null}

</View>

<View style={styles.marginBottom}>
<components.InputField
          title="New Password"
          placeholder="••••••••"
          containerStyle={styles.inpContainer}
          eyeOffSvg={true}
          secureTextEntry={true}
          onChangeText={(val) => {
            setNewPass({value: val, error: PasswordValidator(val)});
          }}
       value={newPass?.value}
       
        />

{newPass?.error ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {newPass?.error}
          </Text>
        </View> : null}

</View>
<components.InputField
          title="Confirm Password"
          placeholder="••••••••"
          containerStyle={styles.inpContainer}
          eyeOffSvg={true}
          secureTextEntry={true}
          onChangeText={(val) => {
            setConfirmPass({value: val, error: ""});
          }}
       value={confirmPass?.value}
        />

{newPass.value != confirmPass.value ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
           Password doesn't match
          </Text>
        </View> : null}

</View>
<View>
<components.Button
          title="Update"
          loading={isPending}
          containerStyle={{ marginBottom: theme.MARGINS.hy20 }}
        //  style={{ backgroundColor: (email === "" || password === "") ? apColors.appColorLight : apColors.appColor }}
           disable={ (currPass.value === "" || newPass.value === "" || confirmPass.value === "") ||  newPass.value != confirmPass.value}
        //   loading={isLoading}
          onPress={() => {
           handleUpdatePassword()
          }
          }
        />
</View>

</ScrollView>
)
  }
  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}

      </View>
  );
};

export default ChangePassword;
