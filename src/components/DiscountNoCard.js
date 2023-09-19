import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {theme} from "../constants";
import DeliveryTruck from "../svg/DeliveryTruck";
import Package from "../svg/Package";
import StarSvg from "../svg/StarSvg";
import Wrapper from "./Wrapper";


const DiscountNoCard = ({data, col, onPress, discount}) => {
  console.log('data---', data);

  let sumOfRatings = 0;

  for (let i = 0; i < data?.vendor_data?.reviews?.length; i++) {
    const rating = parseInt(data?.vendor_data?.reviews[i]?.order_rating, 10);
    sumOfRatings += rating;
  }

  const avg = sumOfRatings / data?.vendor_data?.reviews?.length;

  console.log('avg--', avg);

  const mainContWidth = col ? theme.SIZES.width : 172;
  const bannerLeft = col ? theme.SIZES.width / 15 : mainContWidth * 0.15;
  return (
    <TouchableOpacity  onPress={onPress} style={[
        styles.mainCont,
        {
          width: col ? theme.SIZES.width : 172,
         // marginTop: col ? theme.MARGINS.hy20 : theme.MARGINS.hy40,
        },
      ]}>
    <Wrapper
     
    //   style={[
    //     styles.mainCont,
    //     {
    //       width: col ? theme.SIZES.width : 172,
    //      // marginTop: col ? theme.MARGINS.hy20 : theme.MARGINS.hy40,
    //     },
    //   ]}
    >
    
      <Text style={styles.disValue}>
        { data?.discount_value}%
      </Text>
     
      
          <Text numberOfLines={2} style={styles.rating}>
            {data?.discount_short_description}
          </Text>
      
          <Text numberOfLines={2} style={styles.label}>
            {data?.discount_label}
          </Text>
      
    </Wrapper>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    label:{
        marginTop:theme.MARGINS.hy5,
        ...theme.FONTS.H10,
        color:theme.COLORS.secondryTextColor
      },

  mainCont: {
    flex: 1,
    //width: 172, // or 'contain' depending on your preference

    height: "auto",
   // paddingHorizontal: 14,

    //paddingTop: theme.MARGINS.hy20,
    marginBottom: theme.MARGINS.hy20,
    //paddingBottom: theme.MARGINS.hy10,
   // borderWidth: 1,
    borderRadius: 16,
    //borderColor: "rgba(20, 0, 35, 0.1)",
    margin: 8,
    // backgroundColor:'red'
  },
  disValue:{
    ...theme.FONTS.H36,
    color:theme.COLORS.appColor
  },

  rating: {
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.hy20,
  },

  time: {
    justifyContent: 'flex-start',
    ...theme.FONTS.H14,
    color: theme.COLORS.whiteOnly,
  },
  productDetailCont: {
    marginLeft: 12,
  },

});

export default DiscountNoCard;
