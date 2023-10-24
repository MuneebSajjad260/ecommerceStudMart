import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import {removeFromWishlist} from "../store/wishlistSlice";
import {removeFromWishlistHandler} from "../utils/functions";
import React from "react";
import getThemedColors from "../utils/themeMode";
import getRandomColor from '../utils/randomColor';
import {theme} from "../constants";
import {names} from "../constants";
import {components} from ".";
import Wrapper from "./Wrapper";
import {svg} from "../svg";
import ReviewStarSvg from "../svg/ReviewStarSvg";
import Tick from "../svg/Tick";
import CheckoutSvg from '../svg/CheckoutSvg'

const OfferCard = ({data}) => {
  console.log('data--', data);
  const imageSource = require('../assets/splash.png');
  return (
    <Wrapper style={[styles.wrapper]}>
      <View style={styles.flexDirection}>
        <Text style={styles.offerPrice}>
          Offered price: <Text style={styles.price}>QAR 280</Text>
        </Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Tick />
          <Text style={styles.accepted}>Accepted</Text>
        </View>
      </View>

      <Text style={styles.sentOn}>Sent on: 25 May,2023</Text>

      <View style={styles.flexDirection}>
        <View style={styles.prodDetailCont}>
          <View style={styles.imageContainer}>
            <Image
              style={{height: "100%", width: "100%"}}
              // source={{uri: item?.image?.src}}
            />
          </View>
          <View style={styles.productDetailCont}>
            <Text style={styles.prodName}>Wireless charger</Text>

            <View
              style={[{flexDirection: "row", justifyContent: "space-between"}]}
            >
              <Text style={styles.prodPrice}>{`QAR ${204}`}</Text>

                    </View>

                  </View>
        </View>
        <View style={{  alignSelf: "flex-end",flexDirection:'row',alignItems:'center'}}>
<CheckoutSvg/>
        <Text style={styles.checkout}>Checkout</Text>
        </View>
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: theme.SIZES.rsWidth / 2.35,
    height: theme.SIZES.rsHeight / 10,
    paddingHorizontal: theme.MARGINS.hy10,
    paddingVertical: theme.MARGINS.hy20,
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 14,
    marginBottom: 14,
  },
  wrapper: {
    borderColor: theme.COLORS.lightBlue1,
    marginBottom: theme.MARGINS.hy20,
    marginHorizontal: theme.MARGINS.hy10,
  },
  name: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    flex: 1,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgCont: {
    width: 42,
    height: 42,

    borderRadius: 20,
    backgroundColor: theme.COLORS.whiteOnly,
    alignItems: "center",
    justifyContent: "center",
  },
  productLength: {
    ...theme.FONTS.H12,
    marginTop: 4,
    color: theme.COLORS.secondryTextColor,
  },
  // flexDirection: {
  //   flexDirection: "row",
  // },
  imgCont: {width: "25%", height: 80, marginRight: 14},
  name: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,

    //marginBottom: theme.MARGINS.hy10,
  },

  circularImageContainer: {
    width: 40, // Adjust the width and height as needed
    height: 40,
    borderRadius: 50, // Half of the width and height to make it circular
    overflow: 'hidden',
  },
  circularImage: {
    width: '100%',
    height: '100%',
  },
  rating: {
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginLeft: theme.MARGINS.hy5,
  },
  desc: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.hy20,
  },
  offerPrice: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  price: {
    ...theme.FONTS.H14,
    color: theme.COLORS.appColor,
  },
  accepted: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginLeft: theme.MARGINS.hy5,
  },
  sentOn: {
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
    marginTop: theme.MARGINS.hy5,
  },
  imageContainer: {
    // width:'auto',
    // height:'auto',
    width: 53,
    height: 51,
    padding: 12,
    backgroundColor: theme.COLORS.counterGrey,
    borderRadius: 8,
  },
  userCheck: {
    width: 53,
    height: 51,
    padding: 12,
  },
  productDetailCont: {
    marginLeft: 12,
  },
  prodName: {
    ...theme.FONTS.H5,
    justifyContent: "flex-start",
    flex: 1,

    color: theme.COLORS.black,

    width: theme.SIZES.rsWidth / 2,
  },

  prodPrice: {
    ...theme.FONTS.H5,
    color: theme.COLORS.appColor,
  },
  prodDetailCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.MARGINS.hy10,
    flex:1
  },
  checkout: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
    marginLeft:theme.MARGINS.hy5
   
  },
});

export default OfferCard;
