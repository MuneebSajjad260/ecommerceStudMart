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

const Category = ({route}) => {
  const {category} = route.params;
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
  const renderHeader = () => {
    return <components.Header title="Categories" goBack={true} border={true} />;
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
    <SafeAreaView style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Category;
