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
import CustomShimmerPlaceHolder from "../../components/CustomShimmerPlaceHolder";

  
const OfferList = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const auth = useSelector(state=>state?.login?.data);
  console.log("auth--",auth)


const [offers ,setOffers] = useState()
const[isPending , setIsPending] = useState(false)

  useEffect(()=>{
    setIsPending(true)
    dispatch(OfferListApi({id:auth?.userid})).unwrap().then(result=>{
      console.log("result offer list--",result)
      setOffers(result)
    }).catch(error=>{
      console.log("error offer list--",error)
    }).finally(() => {
      setIsPending(false); // Set loading to false after the API call is completed (either success or error)
    });
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

<CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' , paddingBottom:theme.MARGINS.hy20}}>
    <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center' ,  marginTop: isPending ? theme.MARGINS.hy20 : 0}}></View>
  </CustomShimmerPlaceHolder> 

  <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' , paddingBottom:theme.MARGINS.hy20}}>
    <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center',marginTop: isPending ? theme.MARGINS.hy20 : 0}}></View>
  </CustomShimmerPlaceHolder> 

  <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' }}>
    <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center',marginTop:isPending ?  theme.MARGINS.hy20 : 0 }}></View>
  </CustomShimmerPlaceHolder> 
  <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' }}>
    <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center',marginTop:isPending ?  theme.MARGINS.hy20 : 0 }}></View>
  </CustomShimmerPlaceHolder> 

  {!isPending && <FlatList
  data={offers}
  contentContainerStyle={{marginTop:theme.MARGINS.hy20}}
  renderItem={({item})=>{
return(

    <OfferCard data={item}  navigation={navigation} dispatch={dispatch}/>

    )
  }}
  />
}

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
