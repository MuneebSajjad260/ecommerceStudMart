import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, {useState, useCallback, useRef, useMemo} from "react";
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import { selectUser } from '../../store/userSlice';
import {PlaceOrderAction} from "../../services/actions/OrderAction";

import PriceFooter from '../../components/PriceFooter';
import {renderStatusBar} from '../../utils/functions';
import InputField from '../../components/InputField';
import Info from "../../svg/Info";
import Button from "../../components/Button";
import OrderSuccessful from "../../svg/OrderSuccessful";
import Clock from '../../svg/Clock';
import User from '../../svg/User';
import Location from '../../svg/Location';
import Tick from '../../svg/Tick';
import Ship from '../../svg/Ship';
import Up from '../../svg/Up';
import Down from "../../svg/Down";
import styles from "./Styles/CheckoutStyle";
import Wrapper from '../../components/Wrapper';
import {components} from '../../components';
import ImageItem from '../../components/ImageItem';
import {theme, names} from '../../constants';
import { ShippingZone } from "../../services/actions/ShippingZone";
import { useEffect } from "react";

const Checkout = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["45%"], []);
  const dispatch = useDispatch();
  const pickup = true;
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

  const discount = 0;
  const products = useSelector((state) => state.cart.list);
  // const products = [
  //   {id: 217, name: "Classic Hat", price: "53.00", quantity: 1},
  //   {id: 217, name: "Classic Hat", price: "563.00", quantity: 2},
 
  // ];
  const auth = useSelector(selectUser)
  // console.log("auth-",auth.data)
  // console.log("auth-",auth.data.billing)
  console.log("prod---",products[0].vendorDetail)
  console.log("vendordetail---",products[0].vendorDetail)
  const total = useSelector((state) => state.cart.total);
  const [up, setUp] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("ship");

  //input field states
  const [firstN, setFirstN] = useState({value: "", error: ""});
  const [lastN, setLastN] = useState({value: "", error: ""});
  const [email, setEmail] = useState({value: "", error: ""});
  const [phone, setPhone] = useState({value: "", error: ""});
  const [zone, setZone] = useState({value: "", error: ""});
  const [building, setBuilding] = useState({value: "", error: ""});
  const [street, setStreet] = useState({value: "", error: ""});
  const [placeOrder,setPlaceOrder]=useState();
  const [shippingZone ,  setShipZone ] = useState()
  const [pickupZone , setPickupZone]  = useState()
  //LOADING STATE 
  const [loadingPlaceOrder, setLoadingPlaceOrder] = useState(false);

  useEffect(()=>{

dispatch(ShippingZone(3)).unwrap().then(result=>{
  console.log("result shipping zone--" , result)
  const ship = result.find(item => item.id === 7);
  const pickup =result.find(item => item.id === 4);

  console.log("pickup--",pickup,'-',pickup?.method_id)
  setShipZone(ship)
  setPickupZone(pickup)
}).catch(err=>{
  console.log(' error shipping zone --', err)
})

  },[dispatch])

  const renderHeader = () => {
    return <components.Header title="Checkout" goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  //HANDLING ICON TOGGLE
  const handleIconToggle = () => {
    setUp(!up);
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          marginTop: 14,
          borderBottomWidth: 1,
          borderBottomColor: theme.COLORS.divider,
        }}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.flexDirection,
          {justifyContent: "space-between", marginTop: 16,flex:1},
        ]}
      >
        <View style={[styles.flexDirection, {alignItems: "center",flex:1}]}>
        <View style={styles.imageContainer}>
                      <components.ImageItem
                item={item}
                simpleImage={true}
                key={index}
              //  resizeMode="contain"
              />
                      
                      </View> 
          <View style={styles.productDetailCont}>
            <Text style={styles.prodName}>{item?.name}</Text>
            <Text style={styles.quantity}>{`x${item?.quantity}`}</Text>
          </View>
        </View>
<View style={styles.prodPriceCont}>
        <Text style={styles.prodPrice}>{`QAR ${Number(item?.price) + Number(shippingZone?.settings?.cost?.value)}`}</Text>
        </View>
      </View>
    );
  };

  //ORDER SUMMARY CONTENT
  const renderOrderSummary = () => {
    return (
      <View style={styles.contentContainer}>
        <Wrapper >
          <View
            style={[
              styles.flexDirection,
              {justifyContent: "space-between", alignItems: "center"},
            ]}
          >
            <Text style={styles.heading}>Order summary</Text>

            <TouchableOpacity onPress={handleIconToggle}>
              {up ? <Up /> : <Down />}
            </TouchableOpacity>
          </View>

          <FlatList
            data={up ? products : [products[0]]}
            ItemSeparatorComponent={
              products.length > 1 ? renderSeparator : null
            }
            renderItem={renderItem}
          />

          {up ? (
            <View style={styles.priceCont}>
              <View style={styles.priceContALLign}>
                <View style={styles.flexDirection}>
                  <Text style={styles.orderSummary}>Subtotal</Text>
                  <Text
                    style={styles.itemNo}
                  >{`(${products.length} Item)`}</Text>
                </View>
                <Text style={styles.orderSummary}>{`QAR ${total + Number(shippingZone?.settings?.cost?.value)}`}</Text>
              </View>
              <View style={styles.priceContALLign}>
                <Text style={styles.orderSummary}>Discount:</Text>
                <Text style={styles.orderSummary}>{discount}</Text>
              </View>
              {/* <View style={styles.priceContALLign}>
                <Text style={styles.orderSummary}>Tax:</Text>
                <Text style={styles.orderSummary}>QAR 1,200</Text>
              </View> */}
            </View>
          ) : null}
        </Wrapper>
      </View>
    );
  };

  //DELIVERY METHOD CONTENT

  const renderDeliveryMethod = () => {
    return (
      <View style={styles.deliveryContainer}>
        <Wrapper>
          <Text style={styles.heading}>Delivery method</Text>
          <View style={styles.deliveryMethodsAllign}>
            {/* SHIP */}

            <TouchableOpacity
              style={[
                styles.deliveryTab,
                {
                  borderColor:
                    deliveryMethod == "ship"
                      ? theme.COLORS.appColor
                      : theme.COLORS.border,
                },
              ]}
              onPress={() => {
                setDeliveryMethod("ship");
              }}
            >
              <View style={[styles.flexDirection, {alignItems: "center"}]}>
                <View style={[styles.flexDirection, {alignItems: "center"}]}>
                  <Ship
                    fill={
                      deliveryMethod == "ship"
                        ? theme.COLORS.appColor
                        : theme.COLORS.border
                    }
                  />
                  <Text style={styles.shipText}>Ship</Text>
                </View>

                <View style={styles.tickCont}>
                  {deliveryMethod === "ship" ? <Tick /> : null}
                </View>
              </View>
            </TouchableOpacity>

            {/* SELF PICKUP */}
            {products[0]?.vendorDetail?.enable_self_pickup ? (
              <TouchableOpacity
                style={[
                  styles.deliveryTab,
                  {
                    borderColor:
                      deliveryMethod == 'self'
                        ? theme.COLORS.appColor
                        : theme.COLORS.border,
                  },
                ]}
                onPress={() => {
                  setDeliveryMethod('self');
                }}
              >
                <View style={[styles.flexDirection, {alignItems: 'center'}]}>
                  <View style={[styles.flexDirection, {alignItems: 'center'}]}>
                    <User
                      stroke={
                        deliveryMethod == 'self'
                          ? theme.COLORS.appColor
                          : theme.COLORS.border
                      }
                    />
                    <Text style={styles.shipText}>Self pickup</Text>
                  </View>
                  <View style={styles.tickCont}>
                    {deliveryMethod === 'self' ? <Tick /> : null}
                  </View>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>

          {deliveryMethod == "ship" ? (
            <View style={styles.shippingChargesCont}>
              <Info />
              <Text style={styles.shippingChargesText}>
                Shipping charges will be QAR {shippingZone?.settings?.cost?.value}
              </Text>
            </View>
          ) : null}
        </Wrapper>
      </View>
    );
  };

  //SHIPPING DETAILS OR SELF PICKUP DETAILS

  const deliveryDetail = () => {
    return (
      <View style={[styles.deliveryContainer, {marginBottom: 140}]}>
        <Wrapper>
          {deliveryMethod == "ship" ? (
            <View>
              <Text style={styles.heading}>Shipping details</Text>

              <View style={styles.fieldCont}>
                <InputField
                  title="First name"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setFirstN({value: text, error: ""});
                  }}
                />
                <InputField
                  title="Last name"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setLastN({value: text, error: ""});
                  }}
                />
              </View>
              <View style={styles.fieldCont}>
                <InputField
                  title="Email"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setEmail({value: text, error: ""});
                  }}
                />
                <InputField
                  title="Phone number"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setPhone({value: text, error: ""});
                  }}
                />
              </View>
              <View style={styles.fieldCont}>
                <InputField
                  title="Zone"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setZone({value: text, error: ""});
                  }}
                />
                <InputField
                  title="Building #"
                  containerStyle={styles.input}
                  onChangeText={(text) => {
                    setBuilding({value: text, error: ""});
                  }}
                />
              </View>

              <View style={styles.fieldCont}>
                <InputField
                  title="Street #"
                  onChangeText={(text) => {
                    setStreet({value: text, error: ''});
                  }}
                />
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.heading}>Order pickup place & time.</Text>
              <Text style={styles.sellerDetail}>
                You will receive the seller details and contact information via
                Email after placing the order.{" "}
              </Text>

              <View style={styles.locationCont}>
                <View style={styles.location}>
                  <Location />
                </View>

                <View style={styles.locationContent}>
                  <Text style={styles.pickupHeading}>Pickup location </Text>
                  <Text style={styles.pickupDesc}>{ products[0].vendorDetail ? `${products[0].vendorDetail?.zone}, Building no.${products[0].vendorDetail?.building}, Street ${products[0].vendorDetail?.street}` : ''}</Text>
                </View>
              </View>

              <View style={styles.locationCont}>
                <View style={styles.location}>
                  <Clock />
                </View>

                <View style={styles.locationContent}>
                  <Text style={styles.pickupHeading}>Time </Text>
                  <Text style={styles.pickupDesc}>10 am - 2 pm </Text>
                </View>
              </View>
            </View>
          )}
        </Wrapper>
      </View>
    );
  };

  const checkoutFooter = () => {
    return (
      <PriceFooter
      shipping={Number(shippingZone?.settings?.cost?.value)}
      loading={loadingPlaceOrder}
        price={total}
        btnName={"Checkout"}
        disable={
          deliveryMethod === "ship"
            ? email.value === "" ||
              firstN.value === "" ||
              lastN.value === "" ||
              phone.value === "" ||
              zone.value === "" ||
              building.value === "" ||
              street.value === ""
            : false
        }
        onPress={() => {
          deliveryMethod === "ship"
            ? !(
                email.value === "" ||
                firstN.value === "" ||
                lastN.value === "" ||
                phone.value === "" ||
                zone.value === "" ||
                building.value === "" ||
                street.value === ""
              )
              ? handleDeliveryCheckout()
              : null
            : handleSelfCheckout();
        }}
      />
    );
  };

  //LOGIC FOR HANDLING BUTTON IN CASE OF SELF PICKUP
  const handleSelfCheckout = () => {
    console.log("i am self pickup");

    let lineItemsArray = products.map((item) => {
      return {
        product_id: item.id,
        quantity: item.quantity,
      };
    });

    console.log("-----Array lineItemsArray products-------", lineItemsArray);
    const payload = {
      payment_method: "bacs",
      payment_method_title: "this is self pickup",
      set_paid: true,
      billing: {
        first_name: auth.data.billing.first_name,
        last_name: auth.data.billing.last_name,
        address_1: '',
        address_2: '',
        email: auth.data.billing.email,
        phone: '',
      },
      shipping: {
        first_name: auth.data.billing.first_name,
        last_name: auth.data.billing.last_name,
        address_1:'',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
      },
      customer_id: auth.data.id,
      line_items: lineItemsArray,
      //  [
      //   {
      //     "product_id": 93,
      //     "quantity": 2
      //   },
      //   {
      //     "product_id": 22,
      //     "variation_id": 23,
      //     "quantity": 1
      //   }
      // ],
      shipping_lines: [
        {
          method_id: pickupZone?.method_id,
          method_title:pickupZone?.title,
          total: '0',
        },
      ],
      meta_data: [
        {
          key: "_zone",
          value: ""
        },
         {
          key: "_street",
          value: ""
        },
         {
          key: "_building",
          value: ""
        },
        {
          key: "_delivery_method",
          value: false
        },
     
      ]
    };
    setLoadingPlaceOrder(true); // Set loading to true before making the API call
    dispatch(PlaceOrderAction(payload))
      .unwrap()
      .then((result) => {
        console.log("result place order ---", result);
        // if (result.ok) {
        //   console.log("-----SUCCESS PLACE ORDER----", result);
        setPlaceOrder(result)
        bottomSheetRef.current?.snapToIndex(0);
        // } else {
        //   console.log("-----failed PLACE ORDER----");
        // }
      })
      .catch((error) => {
        console.log("-----error PLACE ORDER----", error);
      }) .finally(() => {
        setLoadingPlaceOrder(false); // Set loading to false after the API call is completed (either success or error)
      });
  };

  //LOGIC FOR HANDLING BUTTON IN CASE OF DELIVERY

  const handleDeliveryCheckout = () => {
    console.log("i am delivery");
    navigation.navigate(names.Payment, {
      deliveryMethod: deliveryMethod,
      inputData: {
        firstName: firstN.value,
        lastName: lastN.value,
        email: email.value,
        phone: phone.value,
        zone: zone.value,
        building: building.value,
        street: street.value,
        shippingZone: shippingZone,
        totalPrice:Number(shippingZone?.settings?.cost?.value)
      },
    });
  };

  //VIEW RECEIPT
  const viewReceipt=()=>{
  
console.log("pO id-",placeOrder.id)

      navigation.navigate(names.OrderSummary, {
        deliveryMethod: deliveryMethod,
        orderId:placeOrder.id
      });

  }

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
        {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.scrollView}
      >
        
        {renderOrderSummary()}
        {renderDeliveryMethod()}
        {deliveryDetail()}
      </ScrollView>

      <View style={styles.footer}>{checkoutFooter()}</View>

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
            <View style={{width: "40%"}}>
              <components.SecondaryButton
                title={'View receipt'}
                onPress={viewReceipt}
              />
            </View>

            <View style={[{width: "40%"}, {marginLeft: 18}]}>
              <Button
                title="Shop more"

                //  onPress={() => navigation.navigate(names.TabNavigator)}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Checkout;
