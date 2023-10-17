import React,{useState,useEffect} from "react";
import {View, ScrollView, Text,FlatList,TouchableOpacity,Pressable,Image} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {names, theme} from '../../constants';
import styles from "./Styles/ViewReviewStyles";
import { useDispatch, useSelector } from 'react-redux';
import Svg, { Path } from 'react-native-svg';
import ReviewStarSvg from "../../svg/ReviewStarSvg";
import AddImageSvg from "../../svg/AddImageSvg";
import Wrapper from "../../components/Wrapper";
import { launchImageLibrary } from "react-native-image-picker";
import { GiveReviewPost } from "../../services/actions/GiveReviewPost";
import { GetSingleRating } from "../../services/actions/GetSingleRating";


const StarIcon = ({ filled }) => {
  const fillColor = filled ? '#FAB247' : theme.COLORS.border;

  return (
   
    <ReviewStarSvg fill={fillColor} width={50} height={50}/>
  );
};

const RatingDisplay = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} filled={rating >= i} />);
  }

  return (
    <View style={styles.starRating}>
      {stars}
    </View>
  );
};



const ViewReview = ({route}) => {
  const dispatch = useDispatch();
  const navigation=useNavigation()
  const {orderId,vendor_id,deliveryMethod} = route.params || {};
  const auth = useSelector(state=>state?.login?.data);
  console.log("orderId,vendor_id-------",orderId,vendor_id)
  console.log("auth---",auth?.userid)


 
  const [review , setReview] =useState()

  const renderHeader = () => {
    return <components.Header title={"Review"} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  useEffect(()=>{
    const body ={orderId:orderId , vendorId:vendor_id}
  
    console.log("body--",body)
dispatch(GetSingleRating(body)).unwrap().then(result=>{
  console.log("single rating result--",result)
  setReview(result?.review[0])
}).catch(err=>{
  console.log("single rating error--",err)
})

  },[dispatch,orderId,vendor_id])

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

<Wrapper
         // key={data?.id}
          style={[
            styles.wrapper,
          ]}
        >
          
<Text style={styles.name}>Rating</Text>

 <RatingDisplay rating={review?.rating} />
       
        <components.InputField
        editable={false}
containerStyle={{marginTop:theme.MARGINS.hy40}}
         leaveComment={true}
         title="Comment"
        value={review?.comments}
       />

       <View style={styles.addImgCont}>

       
              <View style={styles.imgCont}>
                <Image
                  source={{ uri: review?.img_url}}
                  style={styles.receiptImg}
                />
            
              </View>
             
       </View>

        </Wrapper>



</ScrollView>
)
  }
  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    
      </View>
  );
};

export default ViewReview;
