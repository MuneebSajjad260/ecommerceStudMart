import React, {Component} from "react";
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
import { useSelector } from "react-redux";
import styles from "./Style/categoryStyle";
import CategoryItem from "../../components/CategoryItem";
import {renderStatusBar} from "../../utils/functions";
import {components} from "../../components";
import FashionSvg from "../../svg/categories/FashionSvg";
import FurnitureSvg from "../../svg/categories/FurnitureSvg";
import BooksSvg from "../../svg/categories/BooksSvg";
import AccessoriesSvg from "../../svg/AccessoriesSvg";
import SportsSvg from "../../svg/SportsSvg";
import CosmeticSvg from "../../svg/CosmeticSvg";
import {theme} from "../../constants";
import { selectCategorySlice } from "../../store/categorySlice";

const Category = ({route}) => {
  //const {category} = route.params || {} ;

  const category = useSelector(selectCategorySlice)
  console.log('category--', category);
  const navigation = useNavigation();
  const {data, isPending, error} = useAxios(
    "get",
    Payload_Keys,
    Base_Url + endPoints.ProductsList,
  );
  // const product=[
  //     {id:1 , name:"fashion" , img:<FashionSvg/>},
  //     {id:2 , name:"Mobile phone", img:<FurnitureSvg/>},
  //     {id:3 , name:"Accessories", img:<AccessoriesSvg/>},
  //     {id:4 , name:"Books", img:<BooksSvg/>},
  //     {id:5 , name:"Sports", img:<SportsSvg/>},
  //     {id:6 , name:"Cosmetics", img :<CosmeticSvg/>},

  // ]
  // const renderHeader = () => {
  //   return (
  //     <components.Header
  //       title={"Categories"}
  //       // bag={true}
  //      // goBack={products.length > 0 ? true : false}
  //      goBack={true} border={true}
  //       containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 110, 125)}} 
  //   level={theme.RES_HEIGHT(8, 12, 35)}
  //     />
  //   );
  // };
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
