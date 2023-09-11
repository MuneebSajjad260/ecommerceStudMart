import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

import styles from './Styles/ShopStyle';
import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {ProductListItem, renderStatusBar} from '../../utils/functions';
import {ProductsOfCategory} from "../../services/actions/ProductsOfCategory";
import {BrandProduct} from "../../services/actions/BrandProduct";
import {components} from '../../components';
import {theme, names} from '../../constants';
import {svg} from '../../svg';
import {ProductList} from '../../services/actions/ProductList';

const Shop = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const {
    title,
    products,
    categoryId,
    categoryData,
    brandData,
    universityData,
    filter,
  } = route.params || {};
  const {category} = route.params || false;
  const {university} = route.params || false;
  const {isFilter} = route.params || false;
  const {brand} = route.params || false;
  
  console.log("filter data ----", filter);
  console.log("IsFilte ----", isFilter);
  console.log(
    "CATEGORY DETAILS--",
    category,
    "-",
    categoryId,
    "--",
    categoryData,
  );
  console.log("universityData--", universityData);
  console.log("brandData.vendor_id--", brandData?.vendor_id, "--", brand);
  //STATES
  const [productsList, setProductsList] = useState();
  const [brandProd, setBrandProd] = useState()
  //CALLING PRODUCTS OF CATEGORY API

  useEffect(() => {
    console.log('helllll');
    var id;
    if (university) {
      id = `tag=${universityData?.id}`;
    }
      else if (brand){
        id = `vendor_id=${brandData?.vendor_id}`;
      
    } else if (isFilter) {
      const catId = filter.category.map((item) => item.id);
      const filterCatIds = catId.join(',');
      const uniId = filter.university.map((item) => item.id);
      const filterUniIds = uniId.join(',');
      const price = filter.priceFilter[0];
      console.log('price---', price);
      id = `category=${filterCatIds}&tag=${filterUniIds}&min_price=${
        filter?.priceFilter.length > 0 ? filter?.priceFilter[0]?.low : 0
      }&max_price=${
        filter?.priceFilter.length > 0 ? filter?.priceFilter[0]?.high : 1000
      }`;
      console.log('ids---', id);
    } else if (category) {
      id = `category=${categoryId}`;
    } else {
    }

    console.log('idd---', id);
    dispatch(ProductList(id))
      .unwrap()
      .then((result) => {
        console.log(
          "all products in each category--",
          result,
          "-length-",
          result.length,
        );
        setProductsList(result);
      })
      .catch((err) => {
        console.log("err in products of category--", err);
      });
  }, [dispatch, category || university || isFilter, isFocused,brand]);

  //GETTING BRAND products
  // useEffect(() => {
  //   dispatch(BrandProduct(brandData?.vendor_id))
  //     .unwrap()
  //     .then((result) => {
  //       console.log("brand prod result -- ", result);

  //       console.log("brand prod result 2 -- ", result?.vendors_product);

  //       setBrandProd(result?.vendors_product);
  //     })
  //     .catch((err) => {
  //       console.log(" brand product error ---", err.response?.data);
  //     });
  // }, [dispatch, brand, brandData]);

  const renderHeader = () => {
    return (
      <components.Header
        border={university || brand ? false : true}
        title={title}
        goBack={true}
        searchIcon={university || brand ? false : true}
        university={university}
        brand={brand}
        seller={universityData?.vendor_count}
        products={universityData?.count}
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height:
            university || brand
              ? theme.RES_HEIGHT(90, 220, 125)
              : theme.RES_HEIGHT(90, 100, 125),
        }}
        level={
          university || brand
            ? theme.RES_HEIGHT(8, 100, 35)
            : theme.RES_HEIGHT(8, 12, 35)
        }
        universityData={universityData}
        brandData={brandData}
      />
    );
  };

  const renderFilterAndSort = () => (
    <View
      style={[styles.filterAndSort, {marginTop: university || brand ? 45 : 12}]}
    >
      <TouchableOpacity
        style={styles.flexDirection}
        onPress={() =>
          navigation.navigate(names.Filter, {
            title: title,
            productId: category ? categoryId : null,
            categoryData: categoryData,
            universityData: universityData,
            price:filter?.priceFilter
          })
        }
      >
        <svg.SettingsSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.flexDirection}>
        <svg.SortingSvg />
      </TouchableOpacity>
    </View>
  );

  // const renderProducts = () => (
  //   <FlatList
  //     data={(category || university) ? categoryItem : products}
  //     contentContainerStyle={{
  //       flexGrow: 1,
  //       marginHorizontal: 20,
  //       marginTop: 8,
  //     }}
  //     numColumns={2}
  //     columnWrapperStyle={{justifyContent: 'space-between'}}
  //     keyExtractor={(item) => item.id}
  //     renderItem={({item}) => (
  //       <TouchableOpacity
  //         style={{
  //           width: theme.SIZES.width * 0.43,
  //           marginBottom: 20,
  //         }}
  //         onPress={() => {
  //           console.log('---Pressed--');;
  //           navigation.navigate(names.Product, {product: item});;
  //         }}
  //       >
  //         <components.ImageItem
  //           item={item}
  //           containerStyle={{
  //             height: 170,
  //             width: '100%',
  //             marginBottom: 6,
  //             backgroundColor: theme.COLORS.lightBlue2,
  //           }}
  //           resizeMode="cover"
  //         >
  //           {item.is_sale && <components.Sale />}
  //           <components.Favorite item={item} />
  //           <components.InCart item={item} />
  //         </components.ImageItem>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             marginBottom: 4,
  //           }}
  //         >
  //           <svg.RatingSvg rating={item.rating} />
  //           <Text
  //             style={{
  //               ...theme.FONTS.Mulish_400Regular,
  //               fontSize: 12,
  //               color: theme.COLORS.gray1,
  //               lineHeight: 12 * 1.7,
  //               marginLeft: 4,
  //             }}
  //           >
  //             ({item.rating})
  //           </Text>
  //         </View>
  //         <Text
  //           style={{
  //             ...theme.FONTS.Mulish_400Regular,
  //             fontSize: 14,
  //             color: theme.COLORS.gray1,
  //             lineHeight: 14 * 1.7,
  //           }}
  //           numberOfLines={1}
  //         >
  //           {item.name}
  //         </Text>
  //         {item.oldPrice ? (
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //             }}
  //           >
  //             <Text
  //               style={{
  //                 color: theme.COLORS.gray1,
  //                 marginRight: 4,
  //                 ...theme.FONTS.Mulish_400Regular,
  //                 fontSize: 12,
  //                 lineHeight: 12 * 1.5,
  //                 textDecorationLine: 'line-through',
  //               }}
  //             >
  //               ${item.oldPrice}
  //             </Text>
  //             <Text
  //               style={{
  //                 ...theme.FONTS.Mulish_600SemiBold,
  //                 fontSize: 14,
  //                 lineHeight: 14 * 1.5,
  //                 color: theme.COLORS.accent,
  //               }}
  //             >
  //               ${item.price}
  //             </Text>
  //           </View>
  //         ) : (
  //           <Text
  //             style={{
  //               ...theme.FONTS.Mulish_600SemiBold,
  //               fontSize: 14,
  //               lineHeight: 14 * 1.5,
  //               color: theme.COLORS.black,
  //             }}
  //           >
  //             ${item.price}
  //           </Text>
  //         )}
  //       </TouchableOpacity>
  //     )}
  //   />
  // );

  const renderProductsList = () => (
    <FlatList
      data={
        category || university || isFilter ||  brand ? productsList : products
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.prodList,
        {paddingBottom: (university || brand) ? theme.MARGINS.hy20 : 200},
      ]}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ProductListItem(item, navigation)}
    />
  );

  // const ProductItem = (item) => {
  //   // console.log("-----ProductItem-----", item)
  //   return  (
  //     <TouchableOpacity
  //       style={{
  //         flex: 1,
  //         width: theme.SIZES.width,
  //         margin: 6,
  //         borderWidth: 1,
  //         borderColor: "rgba(20, 0, 35, 0.1)",
  //         padding: 8,
  //         borderRadius: 15,
  //       }}
  //       // style={{
  //       //   width: theme.SIZES.width * 0.43,
  //       //   marginBottom: 20,
  //       // }}
  //       onPress={() => navigation.navigate(names.Product, {product: item})}
  //     >
  //       <View>
  //         <components.ImageItem
  //           item={item}
  //           containerStyle={{
  //             width: "100%",
  //             height: 150,
  //             marginBottom: 6,
  //             backgroundColor: theme.COLORS.lightBlue2,
  //             borderRadius: 8,
  //           }}
  //           resizeMode="cover"
  //           borderRadius={8}
  //           indicatorBorderRadius={18}
  //         >
  //           {item.is_sale === true && <components.Sale />}
  //           <components.Favorite item={item} />
  //           {/* <components.InCart item={item} /> */}
  //         </components.ImageItem>
  //         {/* <components.Rating item={item} /> */}
  //         <components.ProductName item={item} style={{fontWeight: "500"}} />
  //         <components.Price
  //           item={item}
  //           textStyle={{color: theme.COLORS.appColor, fontWeight: "400"}}/>

  //         <View
  //           style={{
  //             height: 1,
  //             width: "90%",
  //             backgroundColor: "rgba(0, 0, 0, 0.05)",
  //             paddingHorizontal: 30,
  //             alignSelf: "center",
  //             marginTop: 15,
  //             marginBottom: 6,
  //           }}
  //         />
  //         <View style={{flexDirection: "row", alignItems: "center"}}>
  //           {/* TODO - Image & Store Name */}
  //           {/* <View> */}
  //           <ProfileImage />
  //           {/* </View> */}
  //           {/* <View> */}
  //           <components.ProductName
  //             item={item}
  //             style={{fontWeight: "400", fontSize: 11, marginLeft: 20}}
  //           />
  //             {/* <Text style={{...theme.FONTS.H12, color:theme.COLORS.black, marginLeft: 20, width: 100}}> {item?.vendor_detail?.vendor_name}</Text>  */}
  //           {/* </View> */}
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );;
  // };;
  // const ProfileImage = () => {
  //   return (
  //     <View
  //       style={{width: 16, height: 16, marginBottom: 20}}
  //       // onPress={() => navigation.navigate(names.EditProfile)}
  //     >
  //       {/* {isPending && (
  //           <ActivityIndicator
  //             size="small"
  //             color={theme.COLORS.lightGray}
  //             style={{
  //               position: "absolute",
  //               left: 0,
  //               right: 0,
  //               top: 0,
  //               bottom: 0,
  //               zIndex: 0,
  //               opacity: 1,
  //               justifyContent: "center",
  //               alignItems: "center",
  //               backgroundColor: "#EBF2FC",
  //               borderRadius: 126 / 2,
  //             }}
  //           />
  //         )} */}
  //       <Image
  //         source={{
  //           uri: "https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0",
  //         }}
  //         style={{
  //           width: 30,
  //           height: 30,
  //           borderRadius: 63,
  //           borderWidth: 1,
  //           borderColor: theme.COLORS.lightBlue1,
  //         }}
  //         // onLoadStart={() => setAvatarLoading(true)}
  //         // onLoadEnd={() => setAvatarLoading(false)}
  //       />
  //       {/* <View style={{position: "absolute", right: 6, bottom: 6}}>
  //           <svg.ProfileEditSvg />
  //         </View> */}
  //     </View>
  //   );;
  // };;

  return (
    <View style={styles.mainContainer}>
      {(university || brand) ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderHeader()}
          {renderFilterAndSort()}
          {/* {renderProducts()} */}
          {renderProductsList()}
        </ScrollView>
      ) : (
        <View>
          {renderHeader()}
          {renderFilterAndSort()}
          {/* {renderProducts()} */}
          {renderProductsList()}
        </View>
      )}
    </View>
  );
};

export default Shop;
