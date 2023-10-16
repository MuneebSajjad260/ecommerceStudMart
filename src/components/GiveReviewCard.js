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
  import { useState,useEffect } from "react";
  import {removeFromWishlist} from "../store/wishlistSlice";
  import {removeFromWishlistHandler} from "../utils/functions";
  import React from "react";
  import getThemedColors from "../utils/themeMode";
  import getRandomColor from '../utils/randomColor';
  import {theme} from "../constants";
  import {names} from "../constants";
  import {components} from ".";
  import Wrapper from "./Wrapper";
  import AddImageSvg from "../svg/AddImageSvg.js";
  import {svg} from "../svg";
  import { launchImageLibrary } from 'react-native-image-picker';
import ReviewStarSvg from "../svg/ReviewStarSvg";
  

const StarIcon = ({ filled, index, rating }) => {
    const fillColor = rating >= index ? '#FAB247' : theme.COLORS.border;
  
    return (
      <ReviewStarSvg fill={fillColor} width={50} height={50} />
    );
  };
  
  const RatingDisplay = () => {
    const [rating, setRating] = useState(0);
  
    const handleStarClick = (index) => {
      setRating(index);
    };
  
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarClick(i)}>
           { console.log("rating22--",rating)}
          <StarIcon filled={true} index={i} rating={rating} />
        </TouchableOpacity>
      );
    }
  
    return (
      <View style={styles.starRating}>
        {stars}
      </View>
    );
  };
  


  const GiveReviewCard = ({data}) => {

    const [comment , setComment] = useState({value: "" , error: ""})
    const [photo, setPhoto] = useState();

      //////UPLOAD PHOTO//////////
  const handlechoosephoto = () => {
    const options = {
      noData: true
    };
    launchImageLibrary(options, response => {
      try{
        setPhoto( response?.assets[0]?.uri);
        console.log('response22---,', response);

        // let formData =new FormData();
        // formData.append('image', {
        //   uri: response?.assets[0]?.uri,
        //   name: response?.assets[0]?.fileName,
        //   type: response?.assets[0]?.type,
        // });

        // dispatch(DayPassUpload(formData)).unwrap().then(result=>{
        //   console.log('result---',result);
        // }).catch(error=>{
        //   console.log('upload error--',error);
        // });

      }
      catch(error){
        setPhoto( null);
      }
    });
  };


  const clearImg=()=>{
    setPhoto(null);
  };


    return (
  
        <Wrapper
         // key={data?.id}
          style={[
            styles.wrapper,
          ]}
        >
          
<Text style={styles.name}>Give your rating</Text>
 <RatingDisplay rating={4} />
       
        <components.InputField
containerStyle={{marginTop:theme.MARGINS.hy40}}
         leaveComment={true}
         title="Leave a comment"
         onChangeText={(text) => {
           setComment({ value: text, error: ""});
         }}
        
         comment={comment.value}
       />

       <View style={styles.addImgCont}>

       {photo ? 
              <View style={styles.imgCont}>
                <Image
                  source={{ uri: photo}}
                  style={styles.receiptImg}
                />
                <TouchableOpacity
                  accessibilityLabel='removeReceipt'
                  style={styles.removeContainer}
                  onPress={()=>{ 
                    clearImg();
                  }}>
           
                  <Text style={styles.removeTxt}>x</Text>
             
                </TouchableOpacity>
              </View>
              :
       <Pressable

       style={[styles.allignRow,{flex:1,justifyContent:'center'}]}
                accessibilityLabel='uploadReceipt'
                onPress={()=>{
                  handlechoosephoto();
                }}>

<AddImageSvg/>
<Text style={styles.addImg}>Add image</Text>
</Pressable>
 } 
       </View>

        </Wrapper>
    
    );
  };
  const styles = StyleSheet.create({

   
    wrapper: {
      borderColor: theme.COLORS.lightBlue1,
      marginBottom:theme.MARGINS.hy20,
      marginHorizontal:theme.MARGINS.hy10,
      padding:theme.MARGINS.hy20
    },
    name: {
      ...theme.FONTS.Font_l,
      color: theme.COLORS.black,
      marginBottom:theme.MARGINS.hy30
      
    
    },
    flexDirection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    allignRow:{
        flexDirection: "row",
        alignItems: "center",
    },
    imgCont: {
      width: 42,
      height: 42,
  
      borderRadius: 20,
      backgroundColor: theme.COLORS.whiteOnly,
      alignItems: "center",
      justifyContent: "center",
    },

    addImgCont: {
        height: 80,
        width: "100%",
        borderWidth: 1,
       marginTop:theme.MARGINS.hy20,
       padding:theme.MARGINS.hy20,
        borderRadius: 16,
       // justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        borderColor: theme.COLORS.border,
        borderStyle: 'dashed'
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
      },
      starRating: {
        flexDirection: 'row',
   alignSelf:'center'
      },
      addImg:{
        ...theme.FONTS.H12,
        color: theme.COLORS.black,
        marginLeft:theme.MARGINS.hy10,
    
      },
      imgCont:
      {justifyContent:'flex-start',alignItems:'center',backgroundColor:theme.COLORS.lightBlue2,width:60,height:50,borderRadius:12},
      receiptImg:
      {
        width:30,
        height:30,
        alignSelf:'center',
        marginTop:theme.MARGINS.hy10
      },
      removeContainer:{
     position:'absolute',
     width:20,
     height:20,
     alignItems:'center',
     justifyContent:'center',
backgroundColor:theme.COLORS.black,
borderRadius:20,

     right:-10,
     top:-10
      },
      removeTxt:{
    ...theme.FONTS.H12,
        color:theme.COLORS.white,
        lineHeight:theme.MARGINS.hy10,
      },
  });
  
  export default GiveReviewCard;
  