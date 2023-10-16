import React from "react";
import {View, ScrollView, Text,FlatList} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/ReviewStyle";
import { useDispatch, useSelector } from 'react-redux';
import ReviewStarSvg from "../../svg/ReviewStarSvg";
import Svg, { Path } from 'react-native-svg';
import ReviewCard from "../../components/ReviewCard";
import Button from "../../components/Button";


const StarIcon = ({ filled }) => {
  const fillColor = filled ? '#FAB247' : theme.COLORS.border;

  return (
   
    <ReviewStarSvg fill={fillColor}/>
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

  
const Review = ({route}) => {

  const {brandData} = route.params || {};
  console.log("brandData--",brandData?.vendor_data?.vendor_rating)

  // Extract the order_rating values and convert them to numbers
const orderRatings = brandData?.vendor_data?.vendor_rating?.map(item => parseFloat(item.rating));

// Calculate the sum of order_ratings
const sumOfRatings = orderRatings?.reduce((acc, rating) => acc + rating, 0);

// Calculate the average
const averageRating = sumOfRatings / orderRatings?.length;

console.log(`Average Order Rating: ${averageRating}`);

  const rating = averageRating; // Replace with your actual rating value

  const renderHeader = () => {
    return <components.Header title={`Reviews(${ brandData?.vendor_data?.vendor_rating ? brandData?.vendor_data?.vendor_rating?.length : 0})`} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

<Text style={styles.rating}>{rating ? rating : 0 }</Text>
<View style={styles.container}>

  <RatingDisplay rating={rating.toFixed(1)} />
    </View>

    <Text style={styles.avgRating}>Average Rating</Text>
  
    <FlatList
  data={brandData?.vendor_data?.vendor_rating}
  contentContainerStyle={{marginTop:theme.MARGINS.hy20}}
  renderItem={({item})=>{
return(

    <ReviewCard data={item}/>

    )
  }}
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

export default Review;
