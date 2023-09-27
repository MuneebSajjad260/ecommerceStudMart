import React, {useState, useEffect, useRef, useCallback, useMemo} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {renderStatusBar} from '../../utils/functions';
import styles from './Styles/EditProfileStyle';
import InputField from '../../components/InputField';
import {components} from '../../components';
import {theme} from '../../constants';
import {svg} from '../../svg';
import { EmailValidator,PhoneNumberValidator  } from '../../utils/validation';
import PencilSvg from '../../svg/PencilSvg';
import SchoolSvg from '../../svg/SchoolSvg';
import { UpdateProfile } from '../../services/actions/UpdateProfile';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import ProfileUpdateSvg from "../../svg/ProfileUpdateSvg";
import Button from "../../components/Button";

const EditProfile = ({route}) => {
  const navigation = useNavigation();
  const {profile} = route.params || {};
  const dispatch = useDispatch()

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['38%'], []);

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

       console.log("profile-",profile)
       const loginData = useSelector((state) => state.login?.data);

  const [fn , setFn] = useState({value: profile?.user_info?.first_name , error: ""})
  const [ln , setLn] = useState({value: profile?.user_info?.last_name, error: ""})
  const [phone , setPhone] = useState({value: profile?.user_info?.billing_phone, error: ""})
  const [email , setEmail] = useState({value: profile?.user_info?.user_email, error: ""})
  const [add , setAdd] = useState({value: profile?.user_info?.billing_address_1, error: ""})
  const [zone , setZone] = useState({value: profile?.user_info?.zone, error: ""})
  const [building , setBuilding] = useState({value: profile?.user_info?.building, error: ""})
  const [street , setStreet] = useState({value: profile?.user_info?.street, error: ""})

  const renderHeader = () => {
    return <components.Header title="Profile" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

    //CALLING UPDATE PROFILE API
    const handleEditedName = (profileDetails) => {

      const data ={Id:profile?.user_info?.ID , profileData:profileDetails , token:loginData?.token} ;
      console.log('data---',data);
      dispatch(UpdateProfile(data)).unwrap().then(result=>{
        console.log(' update profile result---',result);
        bottomSheetRef.current?.snapToIndex(0);
      }).catch(err=>{
        console.log('update Profile err--',err);
      });
  
  
    };


  const renderContent = () => {
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.imgCont}
        >
          <components.SingleImageItem
            source={{
            //  uri: 'https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0',
            }}
            borderRadius={126 / 2}
            containerStyle={styles.img}
            imageStyle={styles.imgStyle}
          />

          {/* HIDE FOR NOW  */}

          {/* <View style={styles.camCont}>
            <svg.CameraSvg />
          </View> */}

        </TouchableOpacity>

        <View
          style={styles.personalInfoCont}
        >
          <PencilSvg />
          <Text
            style={styles.personalInfoTxt}
          >
            Personal information{" "}
          </Text>
        </View>

        <View style={styles.paddingHor}>
          <components.InputField
            containerStyle={{marginTop:theme.MARGINS.hy20,marginBottom:theme.MARGINS.hy20}}
            title="First name"
            onChangeText={(text) => {
              setFn({value: text, error: ""});
            }}
            value={fn?.value}
        
          />
          <components.InputField
            containerStyle={styles.marginBottom}
            title="Last name"
            onChangeText={(text) => {
              setLn({value: text, error: ""});
            }}
            value={ln?.value}
          />

<View style={styles.marginBottom}>
          <components.InputField
          
            title="Phone number"
            onChangeText={(text) => {
              setPhone({value: text, error: PhoneNumberValidator(text)});
            }}
            value={phone?.value}
          />

{phone?.error ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {phone?.error}
          </Text>
        </View> : null}

        </View>

          <View style={styles.marginBottom}>
          <components.InputField
         
            error={email.error}
            title="Email"
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
         
        </View>

        <View
          style={styles.addressCont}
        >
          <SchoolSvg />
          <Text
            style={styles.addressTxt}
          >
            Address
          </Text>
        </View>

        <View style={styles.paddingHor}>

        <View
          style={styles.allignRow}
        >
          <InputField

          value={add?.value}

            title="Address"
            onChangeText={(text) => {
              setAdd({value: text, error: ""});
            }}
          />
       
        </View>
        <View
          style={styles.allignRow}
        >
          <InputField
           value={zone?.value}
            title="Zone"
            containerStyle={styles.width}
            onChangeText={(text) => {
              setZone({value: text, error: ""});
            }}
          />
          <InputField
            value={building?.value}
            title="Building no"
            containerStyle={styles.width}
            onChangeText={(text) => {
              setBuilding({value: text, error: ""});
            }}
          />
        </View>
      

        <View
          style={styles.allignRow}
        >
          <InputField
            value={street?.value}
            title="Street no"
            onChangeText={(text) => {
              setStreet({value: text, error: ""});
            }}
          />
        </View>

         
          
        </View>

        <View style={styles.btnCont}>

        <components.Button
   disable={(fn.value === '' || ln.value === '' || (email.value === '' || email.error !== '') 
   || (phone.value === '' || phone.error !== '') 
   || add.value  === '' || zone.value === '' || building.value === '' || street.value === '') ? true : false
  }
 title="Update"
 onPress={() =>{
  handleEditedName({  

    first_name:fn.value,
    last_name:ln.value,
    billing_phone:phone.value,
    user_email:email.value,
    billing_address_1:add.value,
    shipping_address_1:add.value,
    zone:zone.value,
    building:building.value,
    street:street.value 
  
  });
}}
          />

        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}

      
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
        <ProfileUpdateSvg />

          <Text style={styles.bsDescTxt}>Profile updated successfully</Text>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20,paddingHorizontal:theme.MARGINS.hy20}]}>
        
              <components.SecondaryButton
                title={"Cancel"}
                onPress={() => {
                  bottomSheetRef.current?.close();
                }}
              />
    
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  );
};

export default EditProfile;
