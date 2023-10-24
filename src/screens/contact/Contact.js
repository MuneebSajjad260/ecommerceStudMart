import React,{useState,useEffect,useCallback,useRef,useMemo} from "react";
import {View, ScrollView, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/ContactStyles";
import { useDispatch, useSelector } from 'react-redux';
import ContactUs from '../../svg/ContactUsSvg'
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import BottomSheet, {
    BottomSheetBackdrop,
    useBottomSheetDynamicSnapPoints,
    BottomSheetView,
  } from '@gorhom/bottom-sheet';
  import ProfileUpdateSvg from "../../svg/ProfileUpdateSvg";

const Contact = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [subject , setSubject] = useState({value: "", error: ""})
  const [desc , setDesc] = useState({value: "", error: ""})

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


  const renderHeader = () => {
    return <components.Header title="Terms & conditions" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const handleSubmit=()=>{
  bottomSheetRef.current?.snapToIndex(0);
  }

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

<Wrapper>
    <View style={styles.contactIcon}>
<ContactUs/>
</View>

<Text style={styles.heading}>Connect With Us</Text>
<Text style={styles.desc}>Reach out to us for any inquiries, feedback, or assistance. Feel free to connect with us anytime.</Text>

<InputField
            value={subject?.value}
            containerStyle={{marginTop:theme.MARGINS.hy20}}
            title="Enter subject"
            onChangeText={(text) => {
              setSubject({value: text, error: ""});
            }}
          />

<InputField
            value={desc?.value}
            leaveComment={true}
            containerStyle={{marginTop:theme.MARGINS.hy20}}
            title="Description"
            onChangeText={(text) => {
              setDesc({value: text, error: ""});
            }}
          />
</Wrapper>

<components.Button
  
  disable={subject.value == '' || desc.value == ''}

 title="Submit"
 onPress={handleSubmit}
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
        <ProfileUpdateSvg />

          <Text style={styles.bsDescTxt}>Application submitted</Text>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20,paddingHorizontal:theme.MARGINS.hy20}]}>
        
              <components.SecondaryButton
                title={"Close"}
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

export default Contact;
