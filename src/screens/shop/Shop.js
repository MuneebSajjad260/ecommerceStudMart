import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProductListItem, renderStatusBar} from '../../utils/functions';
import {ProductsOfCategory} from "../../services/actions/ProductsOfCategory";

import {components} from '../../components';
import {theme, names} from '../../constants';
import {svg} from '../../svg';

const Shop = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {title, products, categoryId} = route.params || {};
  const {category} = route.params || false;
  console.log("CATEGORY DETAILS--", category, "-", categoryId);

  //STATES
  const[categoryItem,setCategoryItem]=useState()
  //CALLING PRODUCTS OF CATEGORY API

  useEffect(() => {
    dispatch(ProductsOfCategory(categoryId))
      .unwrap()
      .then((result) => {
        console.log("all products in each category--", result);
        setCategoryItem(result)
      })
      .catch((err) => {
        console.log("err in products of category--", err);
      });
  }, [category === true]);


  console.log('---Products--- ', products);;
  // const renderHeader = () => (
  //   <components.Header
  //     title={title}
  //     goBack={true}
  //     searchIcon={true}
  //     // border
  //     containerStyle={{
  //       backgroundColor: theme.COLORS.white,
  //       height: theme.RES_HEIGHT(90, 110, 125),
  //     }}
  //     level={theme.RES_HEIGHT(8, 12, 35)}
  //   />
  // );
  const renderHeader = () => {
    return (
      <components.Header   title={title} goBack={true} searchIcon={true} border={true}  />
    );
  };

  const renderFilterAndSort = () => (
    <View
      style={{
        marginTop: 12,
        marginBottom: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.navigate(names.Filter, {title: title})}
      >
        <svg.SettingsSvg />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <svg.SortingSvg />
      </TouchableOpacity>
    </View>
  );

  const renderProducts = () => (
    <FlatList
      data={category ? categoryItem : products}
      contentContainerStyle={{
        flexGrow: 1,
        marginHorizontal: 20,
        marginTop: 8,
      }}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{
            width: theme.SIZES.width * 0.43,
            marginBottom: 20,
          }}
          onPress={() => {
            console.log('---Pressed--');;
            navigation.navigate(names.Product, {product: item});;
          }}
        >
          <components.ImageItem
            item={item}
            containerStyle={{
              height: 170,
              width: '100%',
              marginBottom: 6,
              backgroundColor: theme.COLORS.lightBlue2,
            }}
            resizeMode="cover"
          >
            {item.is_sale && <components.Sale />}
            <components.Favorite item={item} />
            <components.InCart item={item} />
          </components.ImageItem>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 4,
            }}
          >
            <svg.RatingSvg rating={item.rating} />
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                color: theme.COLORS.gray1,
                lineHeight: 12 * 1.7,
                marginLeft: 4,
              }}
            >
              ({item.rating})
            </Text>
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 14,
              color: theme.COLORS.gray1,
              lineHeight: 14 * 1.7,
            }}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          {item.oldPrice ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.gray1,
                  marginRight: 4,
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 12,
                  lineHeight: 12 * 1.5,
                  textDecorationLine: 'line-through',
                }}
              >
                ${item.oldPrice}
              </Text>
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: theme.COLORS.accent,
                }}
              >
                ${item.price}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                ...theme.FONTS.Mulish_600SemiBold,
                fontSize: 14,
                lineHeight: 14 * 1.5,
                color: theme.COLORS.black,
              }}
            >
              ${item.price}
            </Text>
          )}
        </TouchableOpacity>
      )}
    />
  );

  const renderProductsList = () => (
    <FlatList
      data={ category ? categoryItem : products}
      contentContainerStyle={{
        flexGrow: 1,
        marginHorizontal: 6,
        marginTop: 8,
      }}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ProductListItem(item,navigation)}
    />
  );

  const ProductItem = (item) => {
    // console.log("-----ProductItem-----", item)
    return  (
      <TouchableOpacity
        style={{
          flex: 1,
          width: theme.SIZES.width,
          margin: 6,
          borderWidth: 1,
          borderColor: "rgba(20, 0, 35, 0.1)",
          padding: 8,
          borderRadius: 15,
        }}
        // style={{
        //   width: theme.SIZES.width * 0.43,
        //   marginBottom: 20,
        // }}
        onPress={() => navigation.navigate(names.Product, {product: item})}
      >
        <View>
          <components.ImageItem
            item={item}
            containerStyle={{
              width: "100%",
              height: 150,
              marginBottom: 6,
              backgroundColor: theme.COLORS.lightBlue2,
              borderRadius: 8,
            }}
            resizeMode="cover"
            borderRadius={8}
            indicatorBorderRadius={18}
          >
            {item.is_sale === true && <components.Sale />}
            <components.Favorite item={item} />
            {/* <components.InCart item={item} /> */}
          </components.ImageItem>
          {/* <components.Rating item={item} /> */}
          <components.ProductName item={item} style={{fontWeight: "500"}} />
          <components.Price
            item={item}
            textStyle={{color: theme.COLORS.appColor, fontWeight: "400"}}/>

          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              paddingHorizontal: 30,
              alignSelf: "center",
              marginTop: 15,
              marginBottom: 6,
            }}
          />
          <View style={{flexDirection: "row", alignItems: "center"}}>
            {/* TODO - Image & Store Name */}
            {/* <View> */}
            <ProfileImage />
            {/* </View> */}
            {/* <View> */}
            <components.ProductName
              item={item}
              style={{fontWeight: "400", fontSize: 11, marginLeft: 20}}
            />
            {/* </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );;
  };;
  const ProfileImage = () => {
    return (
      <View
        style={{width: 16, height: 16, marginBottom: 20}}
        // onPress={() => navigation.navigate(names.EditProfile)}
      >
        {/* {isPending && (
            <ActivityIndicator
              size="small"
              color={theme.COLORS.lightGray}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 0,
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EBF2FC",
                borderRadius: 126 / 2,
              }}
            />
          )} */}
        <Image
          source={{
            uri: "https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0",
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 63,
            borderWidth: 1,
            borderColor: theme.COLORS.lightBlue1,
          }}
          // onLoadStart={() => setAvatarLoading(true)}
          // onLoadEnd={() => setAvatarLoading(false)}
        />
        {/* <View style={{position: "absolute", right: 6, bottom: 6}}>
            <svg.ProfileEditSvg />
          </View> */}
      </View>
    );;
  };;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.appBg}}>
      {renderHeader()}
      {renderFilterAndSort()}
      {/* {renderProducts()} */}
      {renderProductsList()}
    </SafeAreaView>
  );
};

export default Shop;
