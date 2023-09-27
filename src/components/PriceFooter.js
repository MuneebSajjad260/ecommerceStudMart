import { View, Text,StyleSheet } from "react-native";
import React from "react";

import { theme } from "../constants";
import Button from "./Button";

const PriceFooter = ({ btnName , price,disable,onPress ,loading, shipping , deliveryMethod}) => {
 console.log("deliveryMethod--",deliveryMethod)
  return (
    <View style={styles.shadow}>
        <View style={styles.allignPriceCont}>
  <Text style={styles.headings}>Total</Text>
  <Text style={styles.headings}> { deliveryMethod == 'ship' ? shipping ?  `QAR ${price + shipping }` : `QAR ${price}`  : `QAR ${price}`  }</Text>
  </View>


  <Button
          title={btnName}
          loading={loading}
          containerStyle={{marginVertical: theme.MARGINS.  hy10}}
          disable={ disable }
          onPress={ onPress }
        
        />

  </View>
    );
};
const styles = StyleSheet.create({
   
      shadow: {
        // backgroundColor:'red',
        width:'auto',
        height:'auto',
        padding:theme.MARGINS.marginXParent_sm,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        // borderRadius: 8,
        backgroundColor: theme.COLORS.whiteOnly,
      },
      allignPriceCont:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      headings:{
       ... theme.FONTS.H4,
       color:theme.COLORS.black
      }
    
    });

   


  

export default PriceFooter;