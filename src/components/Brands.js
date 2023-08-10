import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import DeliveryTruck from '../svg/DeliveryTruck';
import Package from '../svg/Package';
import StarSvg from '../svg/StarSvg'
const Brands = ({data,col,onPress}) => {
    const mainContWidth = col ? theme.SIZES.width : 172;
    const bannerLeft = col ? theme.SIZES.width /15 : mainContWidth * 0.15;
  return (

  <TouchableOpacity onPress={onPress} style={[styles.mainCont,{ width:col ? theme.SIZES.width : 172, marginTop:col ? theme.MARGINS.hy20 : theme.MARGINS.hy40}]}>
     <View
          style={[styles.bannerCont,{left:bannerLeft}]}
        >
             <Text
            style={{
              ...theme.FONTS.Mulish_600SemiBold,
              fontSize: 12,
              // textTransform: "uppercase",
              color: theme.COLORS.black,
              lineHeight: 12 * 1.7,

            }}
          >
           {data?.name}
          </Text>
        </View>
<Text style={styles.heading}>{data?.name}</Text>
<View style={styles.flexDirection}>
<StarSvg/>
<Text style={styles.rating}>{data?.rating}</Text>
</View>
  </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex:1,
    //width: 172, // or 'contain' depending on your preference
   
    height: 'auto',
    paddingHorizontal:14,
    
     paddingTop:34,
    paddingBottom:theme.MARGINS.hy10,
    borderWidth:1,
    borderRadius:16,
    borderColor:'rgba(20, 0, 35, 0.1)',
    margin: 8,
    // backgroundColor:'red'
  },
 
  heading: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
  
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:8
  },
  bannerCont:{
    position: "absolute",
    top: -20,
    left:27,
     width:120,
     height:'auto',
    padding: theme.MARGINS.hy10,
    backgroundColor: theme.COLORS.whiteOnly,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },
  rating: {
  
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginLeft:theme.MARGINS.hy5
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

export default Brands;
