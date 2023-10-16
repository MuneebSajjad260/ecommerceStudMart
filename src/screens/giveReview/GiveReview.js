import React from "react";
import {View, ScrollView, Text,FlatList} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/GiveReviewStyles";
import { useDispatch, useSelector } from 'react-redux';
import ReviewStarSvg from "../../svg/ReviewStarSvg";
import Svg, { Path } from 'react-native-svg';
import ReviewCard from "../../components/ReviewCard";
import Button from "../../components/Button";
import GiveReviewCard from "../../components/GiveReviewCard";


const GiveReview = ({route}) => {

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
    return <components.Header title={"Give a Review"} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

<GiveReviewCard/>

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
