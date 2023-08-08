import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch} from 'react-redux';
import moment from 'moment';

import {RetrieveOrder} from '../../services/actions/RetrieveOrder';
import Wrapper from '../../components/Wrapper';
import {renderStatusBar} from '../../utils/functions';
import styles from './Styles/OrderSummaryStyle';
import {components} from '../../components';
import UserCheck from '../../svg/UserCheck';
import {theme} from '../../constants';
import CreditCard from '../../svg/CreditCard';
import VisaSvg from '../../svg/VisaSvg';
import Card from '../../components/OrderSummaryCard';
import Up from "../../svg/Up";
import Down from '../../svg/Down';
import RatingCardSvg from "../../svg/RatingCardSvg";

const OrderSummary = ({route}) => {
  const dispatch = useDispatch();
  const {deliveryMethod, orderId} = route.params;
  console.log("delivery method--", deliveryMethod);
  console.log('order id --', orderId);

  //STATE
  const [up, setUp] = useState(false);
  const [retrieveOrder, setRetrieveOrder] = useState();
  //Loading State
  const [loading, setLoading] = useState(false);

  //CALLING RETRIEVE ORDER API
  useEffect(() => {
    setLoading(true);
    dispatch(RetrieveOrder(orderId))
      .unwrap()
      .then((result) => {
        console.log('retrieve order result--', result);
        setRetrieveOrder(result);
      })
      .catch((err) => {
        console.log("retrieve order error--", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId, dispatch]);

  //HANDLING ICON TOGGLE
  const handleIconToggle = () => {
    setUp(!up);
  };

  const renderHeader = () => {
    return (
      <components.Header title={`STM-${orderId}`} goBack={true} border={true} 
      containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
      level={theme.RES_HEIGHT(8, 12, 35)}/>
    );
  };

  //DELIVERY TIME CARD

  const deliveryTime = () => {
    return (
      <View style={styles.contentContainer}>
        <Card
          imageSource={require('../../assets/orderSummaryCard.png')}
          heading={
            deliveryMethod == "self" ? "Self pickup" : "Standard delivery"
          }
          Heading2={deliveryMethod == 'self' ? 'Pick up time' : 'Estimated'}
          time="May 08, 2023 06 - 08 pm "
        />
        <Text style={styles.statusTxt}>Status</Text>
        <Text style={styles.status}>{retrieveOrder?.status}</Text>
      </View>
    );
  };

  //DIVIDER
  const renderSeparator = () => {
    return <View style={styles.divider} />;
  };

  ///PRODUCT CARD////

  const productCard = () => {
    return (
      <View style={styles.contentContainer}>
        <Wrapper>
          <View
            style={[styles.flexDirection, {justifyContent: "space-between"}]}
          >
            <Text style={styles.placedBy}>{`Placed on: ${moment(
              retrieveOrder?.date_created,
            ).format('DD MMMM, YYYY')}`}</Text>
            {retrieveOrder?.line_items &&
            retrieveOrder?.line_items.length > 1 ? (
              <TouchableOpacity onPress={handleIconToggle}>
                {up ? <Up /> : <Down />}
              </TouchableOpacity>
            ) : null}
          </View>

          <FlatList
            data={
              up ? retrieveOrder?.line_items : [retrieveOrder?.line_items[0]]
            }
            ItemSeparatorComponent={
              retrieveOrder?.line_items?.length > 1 ? renderSeparator : null
            }
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={[styles.flexDirection, {alignItems: 'center'}]}
                >
                  {/* {console.log("item0-", item)} */}
                  <View style={styles.imageContainer}>
                    <Image
                      key={Number(item?.image?.id)}
                      style={{height: '100%', width: '100%'}}
                      source={{uri: item?.image?.src}}

                      //resizeMode='cover'
                    />
                  </View>
                  <View style={styles.productDetailCont}>
                    <Text style={styles.prodName}>{item?.name}</Text>

                    <View
                      style={[
                        styles.flexDirection,
                        {justifyContent: "space-between", width: "70%"},
                      ]}
                    >
                      <Text
                        style={styles.prodPrice}
                      >{`QAR ${item?.total}`}</Text>
                      <Text
                        style={styles.quantity}
                      >{`x${item?.quantity}`}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </Wrapper>
      </View>
    );
  };

  //RATING CARD

  const ratingCard = () => {
    return (
      <View style={[styles.contentContainer, {marginTop: theme.MARGINS.hy10}]}>
        <Wrapper style={styles.ratingCardCont}>
          <View style={[styles.flexDirection, {alignItems: 'center'}]}>
            <RatingCardSvg />
            <View style={styles.ratingTxtCont}>
              <Text style={styles.leaveRatingTxt}>Please leave a rating</Text>
              <Text style={styles.ratingDesc}>
                Rate your seller and provide feedback to help improve the buying
                experience.
              </Text>
            </View>
          </View>
        </Wrapper>
      </View>
    );
  };

  //SHIPPING DETAILS

  const shippingDetails = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          {deliveryMethod == "self" ? "Pick up details" : "Shipping"}
        </Text>
        <Wrapper>
          <View style={[styles.flexDirection, {alignItems: "center"}]}>
            <View style={styles.userCheck}>
              <UserCheck />
            </View>

            <View style={styles.productDetailCont}>
              <Text style={styles.name}>
                {deliveryMethod == "ship"
                  ? `${retrieveOrder?.billing?.first_name} ${retrieveOrder?.billing?.last_name}`
                  : retrieveOrder?.vendor_detail?.vendor_name}
              </Text>

              <Text style={styles.email}>
                {deliveryMethod == "ship"
                  ? retrieveOrder?.billing?.email
                  : retrieveOrder?.vendor_detail?.email}
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.email,
              {marginLeft: 65, marginTop: theme.MARGINS.hy5},
            ]}
          >
            {deliveryMethod == 'ship'
              ? `${retrieveOrder?.meta_data[0]?.value}, Building no.${retrieveOrder?.meta_data[2]?.value}, Street ${retrieveOrder?.meta_data[1]?.value}`
              : `${retrieveOrder?.vendor_detail?.zone}, Building no.${retrieveOrder?.vendor_detail?.building}, Street ${retrieveOrder?.vendor_detail?.street}`}
          </Text>
          <Text
            style={[
              styles.email,
              {marginTop: theme.MARGINS.hy10, marginLeft: 65},
            ]}
          >
            {deliveryMethod == 'ship'
              ? retrieveOrder?.billing?.phone
              : retrieveOrder?.vendor_detail?.phone}
          </Text>
        </Wrapper>
      </View>
    );
  };

  // Function to remove leading zeros and convert to a number
  function parsePrice(price) {
    return Number(price.replace(/^0+/, ""));
  }
  // Function to calculate the total price
  function calculateTotalPrice(items) {
    let totalPrice = 0;
    items?.forEach((item) => {
      totalPrice += parsePrice(item?.total);
    });
    return totalPrice;
  }

  //PAYMENT DETAILS

  const paymentDetails = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Payment</Text>

        <Wrapper>
          <View style={[styles.flexDirection, {alignItems: 'center'}]}>
            <VisaSvg />
            <Text style={styles.visaTxt}>Visa **8845</Text>
          </View>
          <View style={[styles.priceCont, {marginTop: 0}]}>
            <View style={styles.priceContALLign}>
              <View style={styles.flexDirection}>
                <Text style={styles.orderSummary}>Subtotal</Text>
                <Text
                  style={styles.itemNo}
                >{`(${retrieveOrder?.line_items.length} Item)`}</Text>
              </View>
              <Text style={styles.orderSummary}>{`QAR ${calculateTotalPrice(
                retrieveOrder?.line_items,
              ).toFixed(2)}`}</Text>
            </View>
            <View style={styles.priceContALLign}>
              <Text style={styles.orderSummary}>Discount:</Text>
              <Text style={styles.orderSummary}>QAR 0.00</Text>
            </View>
            <View style={styles.priceContALLign}>
              <Text style={styles.orderSummary}>shipping fee</Text>
              <Text
                style={styles.orderSummary}
              >{`QAR ${retrieveOrder?.shipping_total}`}</Text>
            </View>
            <View
              style={[
                styles.priceContALLign,
                {marginTop: theme.MARGINS.marginXParent_sm},
              ]}
            >
              <Text style={styles.total}>Total</Text>
              <Text
                style={styles.totalPrice}
              >{`QAR ${retrieveOrder?.total}`}</Text>
            </View>
          </View>
        </Wrapper>
      </View>
    );
  };

  //RESPONSIBILTY STATEMENT

  const resposibilityStatement = () => {
    return (
      <View style={styles.contentContainer}>
        <Wrapper
          style={[
            styles.responsibiltyCont,
            {shadowColor: theme.COLORS.whiteOnly},
          ]}
        >
          <Text style={styles.responsibilityText}>
            Responsibility Statement
          </Text>
          <Text style={styles.responsibilityDesc}>
            Please note that we do not take responsibility for any transactions
            that take place on our platform. We encourage buyers and sellers to
            <Text
              style={[styles.responsibilityDesc, {color: theme.COLORS.darkRed}]}
            >
              {' '}
              communicate with each other{' '}
            </Text>
            and conduct their own due diligence before making any transactions.
          </Text>
        </Wrapper>
      </View>
    );
  };

  // BROWSE BUTTON

  const browseButton = () => {
    return (
      <View
        style={[styles.contentContainer, {marginBottom: theme.MARGINS.hy20}]}
      >
        <components.SecondaryButton
          title={'Browse products'}
          onPress={() => {
            console.log(" i am browse button");
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {deliveryTime()}
        {productCard()}
        {retrieveOrder?.status == "completed" ? ratingCard() : null}
        {shippingDetails()}

        {deliveryMethod == "self" ? null : paymentDetails()}

        {deliveryMethod == "self" ? resposibilityStatement() : null}

        {browseButton()}
      </ScrollView>
    </View>
  );
};

export default OrderSummary;
