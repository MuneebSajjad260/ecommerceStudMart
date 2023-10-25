import React,{useState, useEffect} from "react";
import {View, ScrollView, Text,FlatList} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { renderStatusBar } from "../../utils/functions";
import {components} from '../../components';
import {theme} from '../../constants';
import styles from "./Styles/OfferListStyles";
import { useDispatch, useSelector } from 'react-redux';
import ReviewStarSvg from "../../svg/ReviewStarSvg";
import Svg, { Path } from 'react-native-svg';
import OfferCard from "../../components/OfferCard";
import Button from "../../components/Button";
import { OfferListApi } from "../../services/actions/OfferListApi";


  
const OfferList = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const auth = useSelector(state=>state?.login?.data);
  console.log("auth--",auth)

//   const offers = [
//     {
//     offer_id: 42985666,
//     user_id: 1,
//     user_name: "student Mart",
//     offer_value: 4,
//     status: "Pending",
//     submission_time: 1697007235
// },
// {
//     offer_id: 42985667,
//     user_id: 1,
//     user_name: "student Mart",
//     offer_value: 40,
//     status: "checkout",
//     submission_time: 1697007235
// },
// {
//     offer_id: 42985668,
//     user_id: 1,
//     user_name: "student Mart",
//     offer_value: 14,
//     status: "Pending",
//     submission_time: 1697007235
// }
//   ]
const [offers ,setOffers] = useState()

  useEffect(()=>{

    dispatch(OfferListApi({id:auth?.userid})).unwrap().then(result=>{
      console.log("result offer list--",result)
      setOffers(result)
    }).catch(error=>{
      console.log("error offer list--",error)
    })
  },[])
  const renderHeader = () => {
    return <components.Header title={'My offers'} goBack={true} border={true} 
    containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}/>;
  };

  const renderContent =()=>{
return (
  <ScrollView
  contentContainerStyle={styles.scrollCont}
  showsVerticalScrollIndicator={false}
>

    <FlatList
  data={offers}
  contentContainerStyle={{marginTop:theme.MARGINS.hy20}}
  renderItem={({item})=>{
return(

    <OfferCard data={item}/>

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

export default OfferList;
