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
import { ChangePasswordApi } from "../../services/actions/ChangePasswordApi";

const ChangePassword = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const auth = useSelector(state=>state?.login?.data);
  console.log("auth--",auth)
  const [currPass , setCurrPass] = useState({value: "", error: ""})
  const [newPass , setNewPass] = useState({value: "", error: ""})
  const [confirmPass , setConfirmPass] = useState({value: "", error: ""})

  const renderHeader = () => {
    return <components.Header title="Change password" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const handleUpdatePassword =()=>{
    const body ={user_id:auth?.userid , old_password:currPass?.value , new_password: newPass?.value}
    console.log("body----",body)
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
