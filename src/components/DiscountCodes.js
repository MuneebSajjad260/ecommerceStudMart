import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../constants';

const DiscountCodes = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.mainCont} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.imgMainCont}>
          <Image
            style={styles.imgCont}
            source={{
              uri: data?.brand_logo_url
            }}
            resizeMode="contain" // Set resizeMode to "contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.disVal}>{data?.brand_title}</Text>
          <Text numberOfLines={2} style={styles.desc}>{data?.brand_discount[0]?.discount_short_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    height: 120,
    width: 325,
    paddingVertical: 10,
    paddingHorizontal: 20, // Horizontal padding of 20
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.COLORS.appColor,
    margin: 8,
    borderStyle: 'dashed',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginLeft: theme.MARGINS.hy20,
    width: '70%', // Adjust the width as needed
  },
  disVal: {
    ...theme.FONTS.H1S,
    color: theme.COLORS.appColor,
    
  },
  desc: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.hy10,
    height:50,
  
  },
  imgCont: {
    width: 50, // Fixed width for the image
    height: 50, // Fixed height for the image
  },
  imgMainCont: {
    borderRadius: 40,
    borderColor: theme.COLORS.border,
    borderWidth: 1,
    width: 70, // Increase the size of imgMainCont here
    height: 70, // Increase the size of imgMainCont here
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DiscountCodes;
