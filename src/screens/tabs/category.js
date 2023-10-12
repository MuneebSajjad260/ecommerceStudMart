import React, {useState,useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import useAxios from '../../utils/useAxios';
import {
  Base_Url,
  Consumer_Key,
  Consumer_Secret,
  Payload_Keys,
  endPoints,
} from '../../constants/constants';
import { useSelector,useDispatch } from "react-redux";
import { ProductList } from "../../services/actions/ProductList";
import styles from "./Style/categoryStyle";
import CategoryItem from "../../components/CategoryItem";
import {renderStatusBar} from "../../utils/functions";
import {components} from "../../components";

import {theme} from "../../constants";
import { selectCategorySlice } from "../../store/categorySlice";

const Category = ({route}) => {
  //const {category} = route.params || {} ;
  const dispatch = useDispatch();

  const category = useSelector(selectCategorySlice)
  console.log('category--', category);
  const navigation = useNavigation();
  // const {data, isPending, error} = useAxios(
  //   "get",
  //   Payload_Keys,
  //   Base_Url + endPoints.ProductsList,
  // );
  
  const[data, setData]=useState()
  const [isPending , setIsPending]=useState(false)
  //GETTING PRODUCTS FROM API 
  useEffect(() => {
    setIsPending(true);
    
    dispatch(ProductList())
      .unwrap()
      .then((result) => {
        console.log("product list result", result);
        setData(result);
      })
      .catch((err) => {
        console.log("prod list error---", err);
        // Handle the error appropriately, e.g., display an error message to the user
      })
      .finally(() => {
        setIsPending(false); // Set loading to false after the API call is completed (either success or error)
      });
  }, [dispatch]);


  const renderHeader = () => {
    return (
      <components.Header title='Categories' goBack={false} border={true}  
       containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 100, 125)}} 
       level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };
  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <CategoryItem item={item} navigation={navigation} data={data} />
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Category;
