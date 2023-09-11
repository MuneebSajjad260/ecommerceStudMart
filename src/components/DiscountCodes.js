import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native';
import {theme} from '../constants';

const DiscountCodes = ({data}) => {

   // console.log("brand data--",data)
  return (

 
     <View style={styles.mainCont}>

<Text>
{data?.brand_title}
</Text>

 <View style={styles.marginLeft}>
<Text style={styles.disVal}>{data?.brand_discount[0]?.discount_value}%</Text>
<Text style={styles.desc}>{data?.brand_discount[0]?.discount_short_description}</Text>
</View>
     </View>


  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex:1,
    height: 120,
    width:320,
    padding:theme.MARGINS.hy20,
    borderWidth:1,
    borderRadius:16,
    borderColor:theme.COLORS.appColor,
    margin: 8,
    borderStyle:'dashed',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'

    // backgroundColor:'red'
  },
 marginLeft:{
    marginLeft:theme.MARGINS.hy20,
 },
 disVal:{
 ...theme.FONTS.H36,
    color:theme.COLORS.appColor,
   
 },
 desc:{
   // marginTop:theme.MARGINS.hy5,
    ...theme.FONTS.H14,
    color:theme.COLORS.black
 }
 
});

export default DiscountCodes;
