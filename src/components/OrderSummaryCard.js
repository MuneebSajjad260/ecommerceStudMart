import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {theme} from '../constants';
import DeliveryTruck from '../svg/DeliveryTruck';
import Package from '../svg/Package';

const Card = ({imageSource, heading, Heading2, time}) => {
  return (
    <ImageBackground source={imageSource} style={styles.backgroundImage}>
      <View style={styles.card}>
        <View style={styles.flexDirection}>
          <DeliveryTruck />
          <Text style={styles.heading}>{heading}</Text>
        </View>

        <View
          style={[styles.flexDirection, {alignItems: "center", marginTop: 6}]}
        >
          <View style={styles.userCheck}>
            <Package />
          </View>

          <View style={styles.productDetailCont}>
            <Text style={styles.belowHeading}>{Heading2}</Text>

            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%', // or 'contain' depending on your preference
    height: 94,
    // backgroundColor:'red'
  },
  card: {
    paddingVertical: theme.MARGINS.hy10,
    paddingHorizontal: theme.MARGINS.hy20,
  },
  heading: {
    ...theme.FONTS.H12,
    color: theme.COLORS.whiteOnly,
    marginLeft: 8,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCheck: {
    height: 40,
    paddingVertical: 12,
  },
  belowHeading: {
    justifyContent: "flex-start",
    flex: 1,
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
  },
  time: {
    justifyContent: "flex-start",
    ...theme.FONTS.H14,
    color: theme.COLORS.whiteOnly,
  },
  productDetailCont: {
    marginLeft: 12,
  },
});

export default Card;
