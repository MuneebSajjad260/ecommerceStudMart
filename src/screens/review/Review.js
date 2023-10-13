import React from "react";
import {View, ScrollView, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/ReviewStyle";
import { useDispatch, useSelector } from 'react-redux';
import ReviewStarSvg from "../../svg/ReviewStarSvg";

import Button from "../../components/Button";


const StarIcon = ({ filled }) => {
    const fillColor = filled ? 'yellow' : 'gray';
  
    return (
    //   <Svg width={24} height={24} viewBox="0 0 24 24">
    //     <Path
    //       fill={fillColor}
    //       d="M12 2l2.367 7.384h7.633l-6.202 4.524 2.367 7.615-6.135-4.593-6.202 4.593 2.367-7.615-6.202-4.524h7.633z"
    //     />
    //   </Svg>
    <ReviewStarSvg fill={fillColor}/>
    );
  };

  const RatingDisplay = ({ rating }) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      const lowerBound = i - 1;
      const upperBound = i - 0.1;
  
      stars.push(<StarIcon key={i} filled={rating >= lowerBound && rating <= upperBound} />);
    }
  
    return (
      <View style={styles.starRating}>
        {stars}
      </View>
    );
  };
  
  
const Review = ({route}) => {
  const navigation = useNavigation();
  const {profile} = route.params || {};
  const dispatch = useDispatch()
  const rating = 2.5; // Replace with your actual rating value

  const renderHeader = () => {
    return <components.Header title={`Reviews(${23})`} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

<Text style={styles.rating}>{rating}</Text>
<View style={styles.container}>
      <RatingDisplay rating={rating} />
    </View>
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
