import React,{useState,useEffect} from "react";
import {View, ScrollView, Text,FlatList,TouchableOpacity,Pressable,Image} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {names, theme} from '../../constants';
import styles from "./Styles/GiveReviewStyles";
import { useDispatch, useSelector } from 'react-redux';
import Svg, { Path } from 'react-native-svg';
import ReviewStarSvg from "../../svg/ReviewStarSvg";
import AddImageSvg from "../../svg/AddImageSvg";
import Wrapper from "../../components/Wrapper";
import { launchImageLibrary } from "react-native-image-picker";
import { GiveReviewPost } from "../../services/actions/GiveReviewPost";


const StarIcon = ({ filled, index, rating }) => {
  const fillColor = rating >= index ? '#FAB247' : theme.COLORS.border;

  return (
    <ReviewStarSvg fill={fillColor} width={50} height={50} />
  );
};

const RatingDisplay = ({onRatingChange}) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
    onRatingChange(index); // Call the callback function with the updated rating
  };

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <TouchableOpacity key={i} onPress={() => handleStarClick(i)}>
         {/* { console.log("rating22--",rating)} */}
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

const GiveReview = ({route}) => {
  const dispatch = useDispatch();
  const navigation=useNavigation()
  const {orderId,vendor_id,deliveryMethod} = route.params || {};
  const auth = useSelector(state=>state?.login?.data);
  console.log("orderId,vendor_id-------",orderId,vendor_id)
  console.log("auth---",auth?.userid)


  const renderHeader = () => {
    return <components.Header title={"Give a Review"} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const [comment , setComment] = useState({value: "" , error: ""})
  const [photo, setPhoto] = useState();
  const [image,setImage]= useState();
  const [rating, setRating] = useState(0); // Define the rating state

    //////UPLOAD PHOTO//////////
const handlechoosephoto = () => {
  const options = {
    noData: true
  };
  launchImageLibrary(options, response => {
    try{
      setPhoto( response?.assets[0]?.uri);
      setImage(response?.assets[0])
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

const submitData=()=>{

  console.log("data---", photo,'-',rating,'-',comment.value,'-',orderId,'-',vendor_id,'-',auth?.userid)

  console.log("image----",image)
 const formData = new FormData();

  // Append your data to the formData object
  formData.append('image',{
    uri: image?.uri,
    name: image?.fileName,
    type: image?.type,
  });
  formData.append('term_id', vendor_id);
  formData.append('ratings', rating);
  formData.append('comments', comment.value);
  formData.append('user_id', auth?.userid);
  formData.append('order_id', orderId);
 
  dispatch(GiveReviewPost(formData)).unwrap().then(result=>{
    console.log('result---',result);
    navigation.navigate(names.OrderSummary,{
      deliveryMethod:deliveryMethod,
      orderId:orderId,
      review: true
    })
  }).catch(error=>{
    console.log('upload error--',error);
  });

}

const handleRatingChange = (newRating) => {
  // console.log("Rating in GiveReview component:", newRating);
  setRating(newRating); // Update the rating state
};

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
          
<Text style={styles.name}>Give your rating</Text>
 <RatingDisplay rating={4} onRatingChange={handleRatingChange} />
       
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

<components.Button
        title="Submit"
        disable={rating ? false : true}
        onPress={submitData}
      />

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

export default GiveReview;
