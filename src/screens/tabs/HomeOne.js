import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  useColorScheme,
  VirtualizedList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import useAxios from '../../utils/useAxios';
import axios from "axios";

import {renderStatusBar, renderStatusBarLight} from '../../utils/functions';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Style/HomeOneStyle';
import getRandomColor from "../../utils/randomColor";
import {components} from '../../components';
import {theme, homeCarousel, banner, Base} from '../../constants';
import {names} from '../../constants';
import CustomShimmerPlaceHolder from '../../components/CustomShimmerPlaceHolder';
import LinearGradient from "react-native-linear-gradient";
import FashionSvg from "../../svg/categories/FashionSvg";
import FurnitureSvg from "../../svg/categories/FurnitureSvg";
import ElectronicsSvg from "../../svg/categories/ElectronicsSvg";
import BooksSvg from "../../svg/categories/BooksSvg";
import ArrowSvg from "../../svg/categories/ArrowSvg";
import {getCategoriesListAction} from "../../services/actions/ProductAction";
import {
  Base_Url,
  Consumer_Key,
  Consumer_Secret,
  Payload_Keys,
  endPoints,
} from "../../constants/constants";
import getThemedColors from '../../utils/themeMode';
import {svg} from "../../svg";
import {selectLoginUser} from "../../store/loginSlice";
import {selectUser} from "../../store/userSlice";
import {renderProducts} from "../../utils/functions";
import FastImage from 'react-native-fast-image';
import {defaultBanner} from "../../constants/images";
import {useCallback} from "react";

// const [dataCategory,setDataCategory] =
//   [
//   {id: 1, name: "Fashion", image: <FashionSvg />},
//   // {id:2, name: "Music", image: <ElectronicsSvg/>},
//   {id: 3, name: "Mobiles", image: <FurnitureSvg />},
//   {id: 4, name: "Books", image: <BooksSvg />},
//   {id: 5, name: "View all", image: <ArrowSvg />},
// ]

const HomeOne = () => {
  console.log('-----I am home one ----');
  const colors = getThemedColors(useColorScheme());

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const universities=[
    {id:1,
      name:'FAST University',
      sellers:23
  },
  {id:2,
    name:'UET University',
    sellers:23
},
{id:3,
  name:'LUMS University',
  sellers:23
},
{id:4,
  name:'NUST University',
  sellers:23
}
  ]
  let viewLeft = {
    hide: false,
    title: 'Products',
  };
  let viewRight = {
    hide: false,
    title: 'View all',
  };

  const loginData = useSelector(selectUser);
  // console.log("----loginData 11aa ----", JSON.stringify(loginData))

  // const base_url = "https://woo-slowly-shiny-wombat.wpcomstaging.com/";

  const {data, isPending, error} = useAxios(
    "get",
    Payload_Keys,
    Base_Url + endPoints.ProductsList,
  );

  // const featured = data?.filter((item) => item.featured);
  // const featured = data;
  // const bestSellers = data?.filter((item) => item.is_bestseller || []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [featuredLoading, setFeaturedLoading] = useState(true);
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getCategoriesListAction())
      .unwrap()
      .then((result) => {
        console.log("result of category -", result);
        setCategory(result);
      })
      .catch((err) => {
        console.log('err category--', err);
        // Handle the error by displaying it using <Text> component
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const test1 = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://pakprintwishes.com:3001/api/v2/user/getParentCategory",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log("---TEST1---",JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderHeader = () => {
    return (
      <components.Header
        logo={true}
        burgerMenu={true}
        bag={true}
        search={true}
      />
    );
  };

  const renderHeaderNew = () => {
    return (
      <View style={{flex: 1, backgroundColor: theme.COLORS.primaryBg}}>
        <svg.HomeHeaderSvg />
      </View>
    );
  };

  const renderProd = () => {
    return (
      <components.Header
        logo={true}
        burgerMenu={true}
        bag={true}
        search={true}
      />
    );
  };

  const renderFilters = () => {
    return (
      <View>
        {!isPending && (
          <FlatList
            data={data}
            horizontal={true}
            key={(Math.random() * 1000).toString()} // set number of columns
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20, marginVertical: 16}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.filterView}
                onPress={() =>
                  navigation.navigate(names.Product, {
                    product: item,
                  })
                }
              >
                <components.ProductName item={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  };

  const renderCarousel = useCallback(() => {
    return (
      <View
        style={{
          position: "absolute",
          top: 160,
          overflow: "hidden",
          marginHorizontal: 16,
          borderRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          style={{
            borderRadius: 16,
            backgroundColor: theme.COLORS.primaryBg,
            borderBottomRightRadius: 16,
          }}
        >
          {/* <View style={{borderRadius: 16,overflow:'hidden',  }}> */}
          {homeCarousel?.map((item, index) => {
            return (
              <FastImage
                key={index}
                style={{
                  width: theme.SIZES.width / 1.01,
                  height: 180,
                  borderRadius: 16,
                  borderBottomRightRadius: 16,
                }}
                // defaultSource={defaultBanner}
                // onLoadStart={()=>setBannerLoading(true)}
                // -------onLoadEnd => causing rendering issue -------
                // onLoadEnd={()=>setBannerLoading(false)}
                source={{
                  uri: item.image,
                  // src: defaultBanner,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                borderRadius={16}
              />
            );
          })}
          {/* </View> */}
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          {homeCarousel?.map((_, index) => (
            <View
              key={index}
              style={{
                width: currentSlideIndex === index ? 26 : 12,
                height: 8,
                marginHorizontal: 5,
                borderRadius: 50,
                borderWidth: 2,
                borderColor:
                  currentSlideIndex === index
                    ? theme.COLORS.appColor
                    : theme.COLORS.appColorLight,
                marginTop: -25,
                marginBottom: 40,
                backgroundColor:
                  currentSlideIndex === index
                    ? theme.COLORS.whiteOnly
                    : theme.COLORS.whiteOnly,
              }}
            />
          ))}
        </View>
      </View>
    );
  }, []);

  const renderBestSellers = () => {
    return (
      <View style={{marginBottom: 40}}>
        <components.ProductCategory
          title="Best sellers"
          containerStyle={{marginHorizontal: 20, marginBottom: 14}}
          onPress={() =>
            navigation.navigate(names.Shop, {
              title: 'Best sellers',
              products: bestSellers,
            })
          }
        />
        <FlatList
          data={bestSellers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          renderItem={({item, index}) =>
            index < 10 ? (
              <TouchableOpacity
                style={{width: 200, marginRight: 14}}
                onPress={() =>
                  navigation.navigate(names.Product, {
                    product: item,
                  })
                }
              >
                <components.ImageItem
                  item={item}
                  containerStyle={styles.sellerImageContainer}
                  resizeMode="contain"
                >
                  {item.is_sale && <components.Sale />}
                  <components.Favorite item={item} />
                  <components.InCart item={item} />
                </components.ImageItem>

                <components.Rating item={item} />
                <components.ProductName item={item} />
                <components.Price item={item} />
              </TouchableOpacity>
            ) : null
          }
        />
      </View>
    );
  };

  const renderBanner = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(names.Shop, {products: data})}
      >
        <View style={styles.bannerView}>
          {/* {bannerLoading && (
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
              }}
            />
          )} */}
          <Image
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            onLoad={() => setBannerLoading(false)}
            source={{uri: banner}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  //RANDOM COLORS

  const getRandomBackground = () => {
    const {background, borderColor} = getRandomColor(); // Your random color generation logic goes here
    return {backgroundColor: background, borderColor: borderColor};
  };

  const renderCategories = () => {
    return (
      <View style={{marginBottom: 20, marginTop: 0}}>
        {/* <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{width: "90%", height: 160, borderRadius: 10, alignSelf:'center'}}>
          <View style={{width: "90%", height: isPending? 160:0, borderRadius: 10, alignSelf:'center'}}></View>
        </CustomShimmerPlaceHolder> */}

        <components.ProductCategory
          title="Shop from categories"
          containerStyle={{marginHorizontal: 20}}
          onPress={() =>
            navigation.navigate(names.Category, {
              title: "Categories",
              category: category,
            })
          }
        />
        {category?.length > 0 ? (
          <FlatList
            data={category.slice(0, 5)}
            horizontal={true}
            key={(Math.random() * 1000).toString()} // set number of columns
            showsHorizontalScrollIndicator={false}
            style={{alignSelf: 'center'}}
            contentContainerStyle={{padding: 16}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{margin: 4}}
                // onPress={
                //   () => console.log("hello")
                //   // navigation.navigate(names.Product, {
                //   //   product: item,
                //   // })
                // }

                onPress={() =>
                  navigation.navigate(names.Shop, {
                    title: `${item.name}`,
                    category: true,
                    categoryId: item.id,
                    // product: data,
                  })
                }
              >
                {/* {console.log('item--', item)} */}
                <View style={[styles.categoryView, getRandomBackground()]}>
                  {/* {item.image.src} */}
                  <View style={styles.imageContainer}>
                    <Image
                      key={Number(item?.image?.id)}
                      style={{height: '100%', width: '100%'}}
                      source={{uri: item?.image?.src}}

                      // resizeMode='contain'
                    />
                  </View>
                  <components.ProductName
                    item={item}
                    style={{alignSelf: 'center', fontSize: 13, marginLeft: 12}}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        ) : null}
      </View>
    );
  };

  // ------------- Featured Products-----------------------
  const renderFeatured = () => {
    return (
      <View style={{marginBottom: 40}}>
        <components.ProductCategory
          title="Featured products"
          containerStyle={{marginHorizontal: 20, marginBottom: 14}}
          onPress={() =>
            navigation.navigate(names.Shop, {
              title: 'Featured Products',
              products: data,
            })
          }
        />
        {/* <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{width: "90%", height: 160, borderRadius: 10, alignSelf:'center'}}>
          <View style={{width: "90%", height: isPending? 160:0, borderRadius: 10, alignSelf:'center'}}></View>
        </CustomShimmerPlaceHolder> */}

        {!isPending && (
          <FlatList
            data={data?.slice(0, 4)}
            horizontal={false}
            numColumns={2}
            key={(Math.random() * 1000).toString()}
            scrollEnabled={false} // set number of columns
            columnWrapperStyle={styles.row}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{flex: 0.5, marginHorizontal: 16}}
                onPress={() =>
                  navigation.navigate(names.Product, {
                    product: item,
                  })
                }
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{
                    width: "100%",
                    height: 170,
                    marginBottom: 6,
                    backgroundColor: theme.COLORS.lightBlue2,
                  }}
                  resizeMode="cover"
                >
                  {item.is_sale === true && <components.Sale />}
                  <components.Favorite item={item} />
                  <components.InCart item={item} />
                </components.ImageItem>
                {/* <components.Rating item={item} /> */}
                <components.ProductName item={item} />
                <components.Price item={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  };

  //RENDER UNIVERSITIES

  const renderUniversities=()=>{
    return (
      <View style={styles.contentContainer}>
        
        <components.ProductCategory
          title={'Universities'}
          containerStyle={{marginHorizontal: 20, marginBottom: 14}}
          onPress={() =>
            navigation.navigate(names.UniversityScreen, {
              title: "All products",
             university: universities,
              // product: data,
            })
          }
          visibleRight={viewRight?.hide}
        />
        
        <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{width: "90%", height: 160, borderRadius: 10, alignSelf:'center'}}>
          <View style={{width: "90%", height: isPending? 160:0, borderRadius: 10, alignSelf:'center'}}></View>
        </CustomShimmerPlaceHolder>
  
        {!isPending && <FlatList
          data={universities?.slice(0,4)}
          horizontal={true}
          key={(Math.random() * 1000).toString()}
          // scrollEnabled={false}              // set number of columns 
          // columnWrapperStyle={styles.row}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 13}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.uniCont}
              onPress={() =>
                navigation.navigate(names.Product, {
                  product: item,
                })
              }
            >
              <View>
              <components.ImageItem
                item={item}
                containerStyle={styles.uniImage}
                resizeMode="cover"
                borderRadius={8}
                indicatorBorderRadius={18}
              >
                {item.is_sale === true && <components.Sale />}
      
              </components.ImageItem>
            
              <Text style={styles.uniName}>{item.name}</Text>
              <Text style={styles.sellerNo}>23+ <Text style={styles.sellerTxt}>seller</Text></Text>
              <View style={styles.UniBottomView}/>
        
              </View>
            </TouchableOpacity>
          )}
        />}
  
      </View>
    );
  };
  
  
  
 
  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        stickyHeaderHiddenOnScroll={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
      >
        {/* {renderFilters()} */}
        {renderCarousel()}
        {/* {renderBestSellers()} */}
        {/* {renderBanner()} */}
        {renderCategories()}
        {/* {renderFeatured()} */}
      </ScrollView>
    );
  };

  const spaceY = () => <View style={{height: 150, width: 100}} />;

  const Item = () => (
    <>
      {renderHeaderNew()}
      {/* {renderFilters()} */}
      {renderCarousel()}
      {spaceY()}
      {/* {renderBestSellers()} */}
      {/* {renderBanner()} */}
      {renderCategories()}
      {/* {renderProducts(data, navigation, isPending, viewLeft, viewRight)} */}
      {renderUniversities()}
      {data && renderFeatured()}
    </>
  );

  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index}`,
  });

  const getItemCount = (_data) => 1;

  const renderContentVirtualized = () => {
    return (
      <VirtualizedList
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        renderItem={({item}) => <Item />}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderStatusBarLight()}
      {renderContentVirtualized()}
      {/* {renderContent()} */}
    </View>
  );
};

export default HomeOne;

// const styles = StyleSheet.create({
 
// });
