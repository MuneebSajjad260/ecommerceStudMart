import React, {useRef, useMemo, useCallback,useState} from "react";
import {View, Text, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';

import {PlaceOrderAction} from '../../services/actions/OrderAction';
import {theme, names} from '../../constants';
import Button from "../../components/Button";
import OrderSuccessful from '../../svg/OrderSuccessful';
import {components} from "../../components";
import {renderStatusBar} from "../../utils/functions";
import styles from "./Styles/PaymentScreenStyle";
import {selectUser} from "../../store/userSlice";

const PaymentScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);
  const auth = useSelector(selectUser);
  const [placeOrderId,setPlaceOrderId]=useState();
  console.log('auth-', auth.data.id, "-total-", total);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%'], []);

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

  const {deliveryMethod, inputData} = route.params;
  console.log('delivery method--', deliveryMethod);
  console.log('shippingzone0---', inputData?.shippingZone?.method_id ,'-', inputData?.shippingZone?.method_title ,'- ',inputData?. totalPrice);

  const renderHeader = () => {
    return <components.Header title="Payment" goBack={true} border={true} />;
  };

  const placeOrder = () => {
    console.log('----placeOrder-----', products);

    let lineItemsArray = products.map((item) => {
      return {
        product_id: item.id,
        quantity: item.quantity,
      };
    });

    console.log('-----Array lineItemsArray products-------', lineItemsArray);
    const payload = {
      payment_method: 'bacs',
      payment_method_title: 'Direct bank transfer',
      set_paid: true,
      billing: {
        first_name: inputData.firstName,
        last_name: inputData.lastName,
        address_1: inputData.firstName,
        address_2: '',
        email: inputData.email,
        phone: inputData.phone,
      },
      shipping: {
        first_name: inputData.firstName,
        last_name: inputData.lastName,
        address_1: inputData.firstName,
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: "",
      },
      customer_id: 1,
      line_items: lineItemsArray,
      // [
      //   {
      //     product_id: 93,
      //     quantity: 2,
      //   },
      //   {
      //     product_id: 22,
      //     variation_id: 23,
      //     quantity: 1,
      //   },
      // ],
      shipping_lines: [
        {
          method_id: inputData?.shippingZone?.method_id,
          method_title: inputData?.shippingZone?.title,
          total: inputData?.totalPrice.toString(),
        },
      ],
      meta_data: [
        {
          key: '_zone',
          value: inputData.zone,
        },
        {
          key: '_street',
          value: inputData.street,
        },
        {
          key: '_building',
          value: inputData.building,
        },
        {
          key: '_delivery_method',
          value: true,
        },
        {
          key: '_calling',
          value: inputData.phone,
        },
      ],
    };

    console.log("payload---", payload);
    dispatch(PlaceOrderAction(payload))
      .unwrap()
      .then((result) => {
        console.log('result place order ---', result, "-id-", result.id);
        console.log('result place order billing ---', result.billing);
        // if (result.ok) {
        //   console.log("-----SUCCESS PLACE ORDER----", result);
        setPlaceOrderId(result)
        bottomSheetRef.current?.snapToIndex(0);
        // } else {
        //   console.log("-----failed PLACE ORDER----");
        // }
      })
      .catch((error) => {
        console.log('-----error PLACE ORDER----', error);
      });

    // navigation.navigate(names.Successful)
  };

  //PLACE HOLDER BUTTON
  const renderFooter = () => {
    return (
      <components.Button title="Place Order" onPress={() => placeOrder()} />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderStatusBar()}
        {renderHeader()}
        {/* {browseButton()} */}
        {renderFooter()}
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
          <OrderSuccessful />
          <Text style={styles.bsTitleTxt}>Order successful!</Text>
          <Text style={styles.bsDescTxt}>You have successfully made order</Text>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20}]}>
            <View style={styles.btn}>
              <components.SecondaryButton
                title={"View receipt"}
                onPress={() => {
                  navigation.navigate(names.OrderSummary, {
                    deliveryMethod: deliveryMethod,
                    orderId:placeOrderId.id
                  });
                }}
              />
            </View>

            <View style={[styles.btn, {marginLeft: 18}]}>
              <Button
                title="Shop more"

                //  onPress={() => navigation.navigate(names.TabNavigator)}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default PaymentScreen;
