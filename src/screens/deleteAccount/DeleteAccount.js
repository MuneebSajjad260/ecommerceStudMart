import React,{useState , useEffect, useRef,useCallback,useMemo} from "react";
import {View, ScrollView, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/DeleteAccountStyles";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteApi } from "../../services/actions/DeleteApi";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import { logout } from "../../services/actions/AuthAction";
import { resetUser } from "../../store/loginSlice";
import { names } from "../../constants";
import BottomSheet, {
    BottomSheetBackdrop,
    useBottomSheetDynamicSnapPoints,
    BottomSheetView,
  } from '@gorhom/bottom-sheet';

const DeleteAccount = ({route}) => {
  const navigation = useNavigation();
  const {profile} = route.params || {};
  const dispatch = useDispatch()

  const [isPending , setIsPending]=useState(false)

  const auth = useSelector(state=>state?.login?.data);
  console.log("auth--",auth)

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['28%'], []);

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


  const points = [
    'Your account is queued for deletion.',
    'Your personal and professional information will be deleted from all of our data storages',

  ];
  const renderHeader = () => {
    return <components.Header title="Delete Account" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const submitDelete =()=>{

    const body ={id:auth?.userid }
    console.log("body----",body)
    setIsPending(true);
    dispatch(DeleteApi(body)).unwrap().then(result=>{
      console.log("result change pass-",result)
     
      dispatch(logout());
      dispatch(resetUser());
      // navigation.navigate(names.GetStarted)
      navigation.reset({
        index: 3,
        routes: [{name: names.Login}],
      });

    }).catch(err=>{
      console.log("err change pass -",err)
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
<Text style={styles.heading}>Sorry to see you go!</Text>
<Wrapper style={styles.wrapper} >

<View style={styles.cardTitleContainer}>
              <Text style={styles.cardHeading}>What happens next?</Text>
            </View>
            {/* Points */}
            <View>
              {points.map((item, index) => {
                return (
                  <View
                    style={[styles.defAlignment, styles.pointContainer]}
                    key={index}>
                    <View style={styles.dot} />
                    <Text style={styles.pointTxt}>{item}</Text>
                  </View>
                );
              })}
            </View>

</Wrapper>
</View>
<components.SecondaryButton
          title={'Delete & Logout'}
          textStyle={{color:theme.COLORS.error}}
          containerStyle={{marginBottom:theme.MARGINS.hy20}}
          style={{borderColor:theme.COLORS.error}}
          onPress={()=>{
            bottomSheetRef.current?.snapToIndex(0);
          }}
        />
</ScrollView>
)
  }
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
         
          <Text style={styles.bsTitleTxt}>Delete Account</Text>
          <Text style={styles.bsDescTxt}>Are you sure you want to delete your account? You will not be able to recover the account once it has been deleted.</Text>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20}]}>
            <View style={{width: "40%"}}>
              <components.SecondaryButton
                title={'No'}
                onPress={()=>{
                    bottomSheetRef.current?.close();
                }}
              />
            </View>

            <View style={[{width: "40%"}, {marginLeft: 18}]}>
              < Button
                title="Yes,Log Out"
               loading={isPending}
                  onPress={submitDelete}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>


      </View>
  );
};

export default DeleteAccount;
