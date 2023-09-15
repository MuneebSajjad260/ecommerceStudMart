import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import React, {useState,useRef,useCallback,useMemo} from "react";
import {useNavigation} from "@react-navigation/native";
import Modal from "react-native-modal";
import {renderStatusBar} from "../../utils/functions";
import { StackActions } from '@react-navigation/native';
import styles from "./Style/ProfileStyle";
import {components} from "../../components";
import {theme, names, tabNames} from "../../constants";
import {svg} from "../../svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/userSlice";
import { setScreen } from "../../store/tabSlice";
import Wrapper from "../../components/Wrapper";
import OrderHistorySvg from "../../svg/OrderHistorySvg";
import OfferSvg from "../../svg/OfferSvg";
import Heart1Svg from "../../svg/Heart1Svg";
import LockSvg from "../../svg/LockSvg";
import SecuredSvg from "../../svg/SecuredSvg";
import DocumentSvg from "../../svg/DocumentSvg";
import ContactSvg from "../../svg/ContactSvg";
import LogOutSvg from "../../svg/LogOutSvg";
import {logout} from '../../services/actions/AuthAction'
import {resetUser} from '../../store/loginSlice'
import Logout from "../../svg/Logout";
import Button from "../../components/Button";

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const loginData = useSelector(selectUser);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["42%"], []);

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
  const [showModal, setShowModal] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(true);

  const renderHeader = () => {
    return (
      <components.Header
        title={'Profile'}
        goBack={false}
        border={true}
        containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 110, 125)}} 
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollCont}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.allignItem}>
        <TouchableOpacity
          style={{width: 126, height: 126, marginBottom: 20, }}
          onPress={() => navigation.navigate(names.EditProfile)}
        >
          {avatarLoading && (
            <ActivityIndicator
              size="small"
              color={theme.COLORS.lightGray}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 0,
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EBF2FC",
                borderRadius: 126 / 2,
              }}
            />
          )}
          <Image
            source={{
              uri: "https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0",
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 63,
              borderWidth: 6,
              borderColor: theme.COLORS.lightBlue1,
            }}
            onLoadStart={() => setAvatarLoading(true)}
            onLoadEnd={() => setAvatarLoading(false)}
          />
          <View style={{position: "absolute", right: 6, bottom: 6}}>
            <svg.ProfileEditSvg />
          </View>
        </TouchableOpacity>

        <Text style={{...theme.FONTS.H3, color: theme.COLORS.black}}>
          Kristin Watson
        </Text>
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 14,
            color: theme.COLORS.gray1,
            lineHeight: 14 * 1.7,
            marginBottom: 22,
          }}
        >
          kristinwatson@mail.com
        </Text>

        </View>
        <Wrapper style={{flex:1 , marginHorizontal:14}}>
       
          <components.ProfileCategory
            title="Order history"
            icon={<OrderHistorySvg/>}
            onPress={() => navigation.navigate(names.History)}
          />

<View style={styles.divider}/>
        
          <components.ProfileCategory
            title="My Offers"
            icon={<OfferSvg/>}
            onPress={() => navigation.navigate(names.Method)}
          />
          
          <View style={styles.divider}/>

          <components.ProfileCategory
            title="Wishlist"
            icon={<Heart1Svg/>}
            categoryNavigation={false}
            onPress={() =>  navigation.navigate(names.Wishlist)}
          />
      
        </Wrapper>
        <Wrapper style={{flex:1 , marginHorizontal:14 , marginTop:theme.MARGINS.hy20}}>
       
          <components.ProfileCategory
            title="Change Password"
            icon={<LockSvg/>}
            onPress={() => navigation.navigate(names.History)}
          />
          <View style={styles.divider}/>

          <components.ProfileCategory
            title="Privacy & Policy"
            icon={<SecuredSvg />}
            onPress={() => navigation.navigate(names.Method)}
          />
          <View style={styles.divider}/>
          <components.ProfileCategory
            title="Terms & conditions"
            icon={<DocumentSvg />}
            onPress={() => navigation.navigate(names.Address)}
          />
        
      
        </Wrapper>

        <Wrapper style={{flex:1 , marginHorizontal:14 , marginTop:theme.MARGINS.hy20}}>
       
       <components.ProfileCategory
         title="Contact us"
         icon={<ContactSvg/>}
         onPress={() => navigation.navigate(names.History)}
       />
      
     </Wrapper>

     <TouchableOpacity style={styles.logoutCont}
     
     onPress={()=>{
      bottomSheetRef.current?.snapToIndex(0);
     }}
     > 
     <LogOutSvg/>
      <Text style={styles.logout}>
        Logout
      </Text>
     </TouchableOpacity>


      </ScrollView>
    );
  };

  const renderModal = () => {
    return (
      <View style={{alignSelf: "center"}}>
        <Modal
          isVisible={showModal}
          onBackdropPress={() => setShowModal(false)}
          hideModalContentWhileAnimating={true}
          backdropTransitionOutTiming={0}
          style={{margin: 0}}
          animationIn="zoomIn"
          animationOut="zoomOut"
        >
          <View
            style={{
              width: 335,
              height: 335,
              backgroundColor: theme.COLORS.transparent,
              borderRadius: 200,
              borderWidth: 4,
              borderColor: theme.COLORS.white,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                width: 292,
                height: 292,
                backgroundColor: theme.COLORS.white,
                borderRadius: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <components.Line />
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.H3,
                  paddingHorizontal: 30,
                  marginVertical: 20,
                  color: theme.COLORS.black,
                }}
              >
                Are you sure you want{"\n"}to sign out ?
              </Text>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.COLORS.black,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setShowModal(false);
                  dispatch(setUser({}))
                  dispatch(setScreen(tabNames.Home))
                  navigation.navigate(names.Login);
                }}
              >
                <Text
                  style={{
                    color: theme.COLORS.white,
                    textTransform: "uppercase",
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 14,
                    paddingHorizontal: 51,
                    textAlign: "center",
                  }}
                >
                  sure
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text
                  style={{
                    color: theme.COLORS.black,
                    textTransform: "uppercase",
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderContent()}
      {renderModal()}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
          <Logout />
        
          <Text style={styles.bsDescTxt}>Are you sure you want to logout?</Text>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20}]}>
            <View style={{width: "40%"}}>
              <components.SecondaryButton
                title={'Cancel'}
                 onPress={()=>{
                  bottomSheetRef.current?.close();
                 }}
              />
            </View>

            <View style={[{width: "40%"}, {marginLeft: 18}]}>
              <Button
                title="Log out"
                onPress={() => {
                  dispatch(logout())
                  dispatch(resetUser())
                  navigation.navigate(names.GetStarted)
                }}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  );
};

export default Profile;
