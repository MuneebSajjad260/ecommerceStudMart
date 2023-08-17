import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ProductListItem, renderStatusBar} from "../../utils/functions";
import {ProductsOfCategory} from '../../services/actions/ProductsOfCategory';

import { ProductList } from "../../services/actions/ProductList";
import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";

const ShopFilter = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {title,category} = route.params || {};
  const {filter} = route.params || false;
  console.log("filter data ----", filter);
  //STATES
  const[products , setProducts] = useState()

  //CALLING PRODUCT LIST API
useEffect(()=>{

  const ids = filter.category.map(item => item.id);
  const filterIds = ids.join(',');
  id =`category=${filterIds}`
  console.log("ids---",id)
dispatch(ProductList(id)).unwrap().then(result=>{
  console.log("product list result--",result,'-length-',result.length)
  setProducts(result)
}).catch(err=>{
  console.log("product list error--",err)
})
},[dispatch])
  const renderHeader = () => {
    return (
      <components.Header
        border={true}
        title={'All Products'}
        goBack={true}
        searchIcon={true}
       
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height:theme.RES_HEIGHT(90, 100, 125),
        }}
        level={ theme.RES_HEIGHT(8, 12, 35) }
      />
    );
};

  const renderFilterAndSort = () => (
    <View
      style={{
        marginTop:12,
        marginBottom: 9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{flexDirection: "row", alignItems: "center"}}
        onPress={() => navigation.navigate(names.Filter, {title: title})}
      >
        <svg.SettingsSvg />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}>
        <svg.SortingSvg />
      </TouchableOpacity>
    </View>
  );

  const renderProductsList = () => (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        marginHorizontal: 6,
        marginTop: 8,
        paddingBottom: 200,
      }}
      numColumns={2}
      columnWrapperStyle={{justifyContent: "space-between"}}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ProductListItem(item, navigation)}
    />
  );




    return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.appBg}}>
     
        <View>
          {renderHeader()}
          {renderFilterAndSort()}
          {/* {renderProducts()} */}
          {renderProductsList()}
        </View>
      
    </View>
  );
};

export default ShopFilter;

