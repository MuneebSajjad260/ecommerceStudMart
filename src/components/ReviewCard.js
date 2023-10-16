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
  
  const ReviewCard = ({data}) => {

    console.log("data--",data)
   const imageSource=require('../assets/splash.png');
    return (
  
        <Wrapper
         // key={data?.id}
          style={[
            styles.wrapper,
            // {borderBottomWidth: array.length - 1 === index ? 0 : 1},
          ]}
        >
            <View style={styles.flexDirection}>
          <View style={styles.flexDirection}>
          
          <View style={styles.circularImageContainer}>
        <Image
          style={styles.circularImage}
         //  source={imageSource}
        source={{uri:data?.img_url}}
        />
      </View>

            <View style={{marginLeft:theme.MARGINS.hy10}}>
              <Text style={styles.name}>{data?.username}</Text>
              <Text style={styles.price}>25 May,2023</Text>
            </View>
         
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
<ReviewStarSvg fill={'#FAB247'}/>
            <Text style={styles.rating}>{data?.rating}</Text>

          </View>
          </View>

          <Text style={styles.desc}>{data?.comments}</Text>

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
      marginBottom:theme.MARGINS.hy20,
      marginHorizontal:theme.MARGINS.hy10,
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
    price: {
      ...theme.FONTS.H12,
      color: theme.COLORS.secondryTextColor,
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
      rating:{
        ...theme.FONTS.H12,
      color: theme.COLORS.black,
      marginLeft:theme.MARGINS.hy5
      },
      desc:{
        ...theme.FONTS.H14,
        color:theme.COLORS.black,
        marginTop:theme.MARGINS.hy20
      }
  });
  
  export default ReviewCard;
  