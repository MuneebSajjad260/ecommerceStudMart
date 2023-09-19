import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native';
import {theme} from '../constants';

const DiscountCodes = ({data,onPress}) => {

   // console.log("brand data--",data)
  return (

 
     <TouchableOpacity style={styles.mainCont} onPress={onPress}>

<View style={styles.imgMainCont}>
<Image  
              style={styles.imgCont}
               source={{
          uri: data?.brand_logo_url
        }}/>
</View>

 <View style={styles.marginLeft}>
<Text style={styles.disVal}>{data?.brand_title}</Text>
<Text style={styles.desc}>{data?.brand_discount[0]?.discount_short_description}</Text>
</View>
     </TouchableOpacity>


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
    width:'90%'
 },
 disVal:{
 ...theme.FONTS.H36,
    color:theme.COLORS.appColor,
   
 },
 desc:{
   // marginTop:theme.MARGINS.hy5,
    ...theme.FONTS.H14,
    color:theme.COLORS.black
 },
 imgCont:
  {
    width: 30,
    height: 30,
  },
 imgMainCont:{
  
 }
});

export default DiscountCodes;
