import React, {useState,useRef,useCallback,useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import BottomSheet, {
    BottomSheetBackdrop,
    useBottomSheetDynamicSnapPoints,
    BottomSheetView,
  } from "@gorhom/bottom-sheet";
 import Clipboard from '@react-native-clipboard/clipboard';
import {renderStatusBar} from '../../utils/functions';
import {components} from '../../components';
import styles from './Styles/DiscountDetailStyles';
import {ProductListItem} from '../../utils/functions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {names} from '../../constants';
import {theme} from '../../constants';
import Wrapper from '../../components/Wrapper';
import ClipboardSvg from '../../svg/ClipboardSvg';

const DiscountDetail = ({route}) => {
  const navigation = useNavigation();

  const {detail, discountData} = route.params || {};
  console.log("detail--", detail);
  console.log("discountData--", discountData);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["62%"], []);

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
    return (
      <components.Header
        title="Discount details"
        goBack={true}
        border={true}
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height: theme.RES_HEIGHT(90, 100, 125),
        }}
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const handleCopy = () => {
    Clipboard.setString(detail?.discount_code);
  };

  const renderContent = () => {
    return (
      <Wrapper style={styles.wrapper}>


        <Image
          style={styles.imgCont}
          source={{
            uri: discountData?.brand_logo_url,
          }}
          
        />
        <Image
          source={{uri: discountData?.brand_image_url}}
          style={styles.bannerCont}
          resizeMode="cover"
        />

<Text style={styles.title}>{discountData?.brand_title}</Text>
<Text style={styles.desc}>{detail?.discount_short_description}</Text>

<components.SecondaryButton
          title={
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>{detail?.discount_code}</Text>
              <ClipboardSvg />
            </View>
          }
          containerStyle={{ marginVertical:theme.MARGINS.hy20 }}
          onPress={handleCopy}
        
        />

<Text style={styles.termsTxt}>Terms & conditions</Text>
<Text numberOfLines={4} style={styles.policy}>{detail?.discount_policy}</Text>

<TouchableOpacity 
 onPress={()=>{
    bottomSheetRef.current?.snapToIndex(0);
   }}
   >
<Text style={styles.readMore}>Read more</Text>
</TouchableOpacity>
        </Wrapper>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>


      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
        
 <View>
<Text style={styles.termsCond}>Terms & conditions</Text>
<Text style={styles.policy}>{detail?.discount_policy}</Text>
</View>

<View >
<components.SecondaryButton
          title='Close'
          onPress={()=>{
            bottomSheetRef.current?.close();
          }}
        
        />

</View>

        </BottomSheetView>
      </BottomSheet>

    </View>
  );
};

export default DiscountDetail;
