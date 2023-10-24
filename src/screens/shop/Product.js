import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { VendorList } from "../../services/actions/VendorList";
import React, {useState , useEffect,useCallback,useMemo,useRef}  from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../store/cartSlice";
import {addToWishlist, removeFromWishlist} from "../../store/wishlistSlice";
import {useNavigation, useRoute} from "@react-navigation/native";
import { PriceValidator } from "../../utils/validation";
import {
  flashMessage,
  productExistMessage,
  productWasAddedMessage,
  removeFromWishlistHandler,
  renderProducts,
  renderStatusBar,
  vendorExistMessage,
} from '../../utils/functions';
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ProductList } from "../../services/actions/ProductList";
import {theme, names} from "../../constants";
import {components} from "../../components";
import {svg} from "../../svg";
import useAxios from '../../utils/useAxios';
import {Base_Url, Payload_Keys, endPoints} from "../../constants/constants";
import {productByID} from "../../constants/mockData";
import Wrapper from '../../components/Wrapper';
import styles from './Styles/ProductStyles';;
import PrimaryText from '../../components/PrimaryText';
import NegotiateSvg from '../../svg/NegotiateSvg'
import axios from 'axios';
import { BrandProduct } from "../../services/actions/BrandProduct";
import {selectUser} from "../../store/userSlice";
import Button from "../../components/Button";
import { PostNegotiate } from "../../services/actions/PostNegotiate";
import OrderSuccessful from "../../svg/OrderSuccessful";
/**
 *  Product details
 * @param {*} param0
 * @returns
 */
const Product = ({apColors}) => {
  const navigation = useNavigation();
  const route = useRoute();
  let viewLeft = {
    hide: false,
    title: 'Related products',
  };;
  let viewRight = {
    hide: true,
    title: '',
  };
  const [price , setPrice] = useState({value: "", error: ""})
  const[pendingNego,setPendingNego]=useState(false)
  const {product} = route.params;
  const [vendorProd ,setVendorProd] = useState()
  const[averageRating , setAverageRating]= useState()
  // const product = productByID  // MOCK_DATA ---
  const dispatch = useDispatch();
  console.log('---product---', product);

  ///BOTTOMSHEET /////
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["51%"], []);
  const bottomSheetSentRef = useRef(null);
  const snapPointsSent = useMemo(() => ["45%"], []);
  const renderBackdropBottomSheet = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        BackdropPressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  /////

  const auth = useSelector(selectUser);;
  console.log('---auth---', auth.data);;

  const userData = useSelector(state=>state?.login?.data);
  console.log("userdata-",userData)

  const currentProduct = useSelector((state) => {
    return state.cart.list.find((item) => item.id === product?.id);
  });
  const wishlist = useSelector((state) => state.wishlist.list);

  const productList = useSelector((state) => state.cart.list);

  console.log('product list---', productList);

  // GETTING Vendor products
  useEffect(() => {
    dispatch(BrandProduct(product?.vendor_detail?.vendor_id))
      .unwrap()
      .then((result) => {
        console.log("brand prod result -- ", result);

        console.log("brand prod result 2 -- ", result?.vendors_product);

        setVendorProd(result?.product_count);
      })
      .catch((err) => {
        console.log(" brand product error ---", err.response?.data);
      });
  }, [dispatch ,product?.vendor_detail?.vendor_id]);




 // Calculate the average rating
  useEffect(() => {
   
    let sumOfRatings = 0;

    for (let i = 0; i < product?.vendor_detail?.vendor_rating?.length; i++) {
      const rating = parseInt(product?.vendor_detail?.vendor_rating[i]?.rating, 10);
      sumOfRatings += rating;
    }

    const avg = sumOfRatings / product?.vendor_detail?.vendor_rating?.length;
console.log("avg--",avg)
    // Update the state with the average rating
    setAverageRating(avg);
  }, []);


  const itemExist = (product) => {
    return wishlist.find((i) => i.id === product.id);
  };

  const productExist = (product) => {
    return productList.find((i) => i.id === product.id);
  };

  const vendorExist =  (product) => {
    return (
      productList[0]?.vendorDetail?.vendor_id ===
      product?.vendor_detail?.vendor_id
    );
  };;

  const itemQuantity = () => {
    return productList.find((i) => i.id === product.id)?.quantity;
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [relatedIdsList, setRelatedIdsList] = useState(0);


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

  const[brands, setBrands]=useState()

  //GETTING PRODUCTS FROM API 

    useEffect(() => {
     
     dispatch(VendorList()).unwrap().then(result=>{
      console.log("vendor list  result", result)
      const vendorsBrand = result?.vendors?.filter(vendor => vendor.vendor_data.user_role === "brand");
  
  // Now filteredVendors contains only the vendors with user_role "brand"
  console.log("vendorsBrand---",vendorsBrand);

  const filteredData = result.vendors.find(
    (vendor) => vendor.vendor_id == product?.vendor_detail?.vendor_id
  );
  console.log("filteredData--",filteredData)

  setBrands(filteredData)
     
     }).catch(err=>{
      console.log("vendor list error---",err)
     }).finally(() => {
     
    });
    }, [dispatch]);
  


  data?.filter((item) => item.status === "publish");

  const getRelatedProducts = async (datam) => {
    // const response = await fetch(`https://example.com/wp-json/wc/v3/products/${productId}?`);
    // const data = await response.json();
    // console.log("---relatedIds1001a data----", data)
    // console.log("---relatedIds1001aa ----", data?.related_ids)
    if (data) {
      const relatedIds = data?.related_ids;
      // console.log("---relatedIds1001aab----", relatedIds)

      const relatedProducts = [];

      if (relatedIds.length > 0) {
        //  loop related_ids and fetch their data
        relatedIds?.map((item, index) => {
          // console.log("----map item 1001aaa test-----")
          // console.log("----map item 1001aaa-----", item)
          // console.log("----map item 1001aaa-----", index)
          //  const response =  await axios.get(`${Base_Url}${endPoints.ProductsList}/${item}`).then((result)=>{
          //         console.log("----related result 1001aabc aaa----")
          //         console.log("----related result 1001aabc----", result)
          //         relatedProducts.push(result);
          //       }).catch((e)=>{
          //         console.log("----related----")
          //       })
          //       console.log("----related res 1001aabccc ----", response)
          // })
          // for (const relatedId of relatedIds) {
          //    await axios.get(`${Base_Url}${endPoints.ProductsList}/${relatedId}`).then((result)=>{
          //     console.log("----related result 1001aabc----", result)
          //     relatedProducts.push(result);
          //   }).catch((e)=>{
          //     console.log("----related----")
          //   })
          //   //   // const relatedProductData = await response.json();
        });;
        // console.log("----related Products data list => 1001aab----", relatedProducts)
        // setRelatedIdsList(relatedProducts)
      }
    }
    // console.log("-----relatedProducts1001------", relatedProducts)
    // return relatedProducts || [];
  };

  //   useEffect( ()=>{
  // if(data){
  //   getRelatedProducts()

  // }

  //   },[data])

  // const relatedProducts = await getRelatedProducts(productId);
  // const [productSize, setProductSize] = useState(
  //   currentProduct ? currentProduct.size : product.sizes[0],
  // );
  // const [productColor, setProductColor] = useState(
  //   currentProduct ? currentProduct.color : product.colors[0],
  // );

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const cartItem = {
    id: product.id,
    name: product.name,
    is_sale: product.is_sale,
    price: product.price,
    oldPrice: product.old_price,
    image: product?.images[0]?.src,
    vendorDetail: product.vendor_detail,
    // size: productSize,
    // color: productColor,
  };
  //console.log("product--",product)
  console.log('cartItem--', cartItem);;
  const renderButton = () => {
    return (
      <components.SecondaryButton
        title="% Negotiate Price"
        onPress={() => {
          bottomSheetRef.current?.snapToIndex(0);
        }}
        containerStyle={{marginBottom: 40}}
        textStyle={{color: apColors.primaryBg}}
      />
    );
  };

  const handleOfferBtn=()=>{
// Get the current time using the Date object
const now = new Date();

// Extract the hours, minutes, and seconds
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Calculate the total seconds
const totalSeconds = hours * 3600 + minutes * 60 + seconds;

console.log("Current time in seconds:", totalSeconds);
  
    const body ={offer_id:'' , user_id:userData?.userid,
     user_name:`${auth?.data?.billing?.first_name}${auth?.data?.billing?.last_name}`,
    offer_value:price.value,
    status:'pending',
    submission_time:totalSeconds,
    product_id:product?.id

  }

    console.log("bodyy-",body)
    setPendingNego(true);
    dispatch(PostNegotiate(body)).unwrap().then(result=>{
      console.log("result negotiate -",result)
      bottomSheetRef.current?.close();
      bottomSheetSentRef.current?.snapToIndex(0);

    }).catch(err=>{
      console.log("err negotiate --",err)
    }).finally(() => {
      setPendingNego(false); // Set loading to false after the API call is completed (either success or error)
    });

  }
  const renderHeader = () => {
    return (
      <components.Header
        logo={false}
        goBack={true}
        bag={true}
        containerStyle={{
          position: "absolute",
          top: 10,
          zIndex: 2,
          height: theme.RES_HEIGHT(90, 110, 125),
          width: theme.SIZES.dWidth,
        }}
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const renderSizes = () => {
    return (
      <View>
        <Text
          style={{
            ...theme.FONTS.H5,
            color: apColors.black,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          Size
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}
        >
          {product.sizes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 50,
                height: 50,
                marginRight: 7,
                borderWidth: 1,
                borderColor: apColors.lightBlue1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor:
                  productSize === item
                    ? apColors.lightBlue1
                    : apColors.transparent,
              }}
              onPress={() => setProductSize(item)}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: apColors.black,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderColors = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.H5,
            color: apColors.black,
            marginTop: 20,
            marginBottom: 14,
            marginRight: 25,
          }}
        >
          Color
        </Text>
        {product.colors.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setProductColor(item)}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor:
                  item === 'carrot'
                    ? '#FF6262'
                    : item === 'blue'
                    ? "#63C7FF"
                    : item === "beige"
                    ? "#F8E7CD"
                    : item === "purple"
                    ? "#323858"
                    : item === "black"
                    ? "#111111"
                    : "",
                marginHorizontal: 7,
                borderRadius: 34,
                borderWidth: 4,
                borderColor:
                  item === productColor
                    ? apColors.lightBlue1
                    : apColors.transparent,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {product?.images?.length > 0 ? (
            product?.images?.map((item, index) => {
              return (
                <components.ImageItem
                  item={item}
                  key={index}
                  containerStyle={{
                    width: theme.SIZES.width,
                    height: 350,
                    backgroundColor: apColors.lightBlue2,
                  }}
                  resizeMode="cover"
                  showThreeImages={true}
                />
              );
            })
          ) : (
            <View
              style={{
                width: theme.SIZES.width,
                height: 350,
                backgroundColor: apColors.lightBlue2,
              }}
            ></View>
          )}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            bottom: 30,
            alignSelf: 'center',
          }}
        >
          {product?.images?.map((_, index) => (
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
                    ? apColors.appColor
                    : apColors.appColorLight,
                marginTop: 20,
                backgroundColor:
                  currentSlideIndex === index ? apColors.white : apColors.white,
              }}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderProductInfo = () => {
    return (
      <View
        style={{
          backgroundColor: apColors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          marginTop: -20,
          paddingTop: 20,
        }}
      >
        <View style={{paddingHorizontal: 20}}>
          {/* ------ University - Self Pickup------- */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: apColors.appColor,
                  paddingHorizontal: theme.RES_WIDTH(7),
                  paddingVertical: theme.RES_WIDTH(3),
                  borderRadius: 6,
                  borderTopRightRadius: 1,
                }}
              >
                <Text
                  style={{
                    color: apColors.whiteOnly,
                    fontSize: theme.FONTS.dF_s,
                  }}
                >
                  {product?.vendor_detail?.university}
                </Text>
              </View>
              <View style={{width: theme.RES_WIDTH(9)}} />
              { product?.vendor_detail?.enable_self_pickup ?
              <View
                style={{
                  backgroundColor: apColors.primaryBg2,
                  paddingHorizontal: theme.RES_WIDTH(7),
                  paddingVertical: theme.RES_WIDTH(3),
                  borderRadius: 6,
                  borderTopLeftRadius: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <svg.PickupSvg />
                <Text
                  style={{
                    color: apColors.whiteOnly,
                    fontSize: theme.FONTS.dF_s,
                    marginLeft: theme.RES_WIDTH(8),
                  }}
                >
                  Self pickup
                </Text>
              </View>
              :
              null
  }
            </View>
            {/* ------ Add product to wishlist ------- */}

            {/* <TouchableOpacity
            style={{
              // marginTop: theme.RES_HEIGHT(-50),
            }}
              onPress={() => {
                itemExist(product)
                  ?
                //  removeFromWishlistHandler(() =>
                      dispatch(removeFromWishlist(product))
                  // )
                  : dispatch(addToWishlist(product));
              }}
            >
              <svg.ProductLikeSvg
                fillColor={
                  itemExist(product)
                    ? apColors.appColor
                    : apColors.transparent
                }
                strokeColor={
                  itemExist(product) ? apColors.appColor : apColors.gray1
                }
              />
            </TouchableOpacity> */}
            <components.Favorite item={product} />
          </View>

          {/* ------ Product Name------- */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: theme.RES_HEIGHT(15, 15, 22),
            }}
          >
            <View>
              <Text
                style={{
                  ...theme.FONTS.H3,
                  color: apColors.black,
                  width: theme.RES_WIDTH(300),
                }}
              >
                {product.name}
              </Text>
            </View>
          </View>
          {/* ----product rating --- */}
          {/* <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress={() =>
              navigation.navigate(names.Reviews, {
                reviews: product.reviews,
              })
            }
          > */}
          {/* <svg.RatingSvg rating={product.rating} />
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: apColors.gray1,
                fontSize: 12,
                lineHeight: 12 * 1.7,
                marginLeft: 4,
              }}
            > */}
          {/* ({product?.rating_count?.length?3:0}) */}
          {/* ({0})
            </Text>
          </TouchableOpacity> */}
          {/* ----product rating end--- */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* ------ Product Price - negotiable ------- */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: "center",
                marginTop: theme.RES_HEIGHT(-14, -18, -22),
              }}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 20,
                  color: apColors.appColor,
                  lineHeight: 20 * 1.5,
                  // marginBottom: 20,
                  marginRight: 10,
                }}
              >
                QAR {product.price}
              </Text>

              <View
                style={{
                  backgroundColor: apColors.appColorXtraLight,
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Text style={{color: apColors.appColor, fontSize: 9}}>
                  Negotiable
                </Text>
              </View>
            </View>

            {/* ------ Add Product Qty------- */}

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 50,
                backgroundColor: apColors.grayXtraLight,
                marginTop: theme.RES_HEIGHT(12, 15, 18),
              }}
            >
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(product))}
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
              >
                <svg.MinusSvg />
              </TouchableOpacity>
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  color: apColors.gray1,
                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {itemQuantity() > 0 ? itemQuantity() : 0}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(addToCart(cartItem))}
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
              >
                <svg.PlusSvg />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: theme.RES_HEIGHT(-12, -15, -18),
            }}
          >
            <Text style={{color: "rgba(20, 0, 35, 0.3)", marginRight: 5}}>
              Category:
            </Text>
            <Text
              numberOfLines={3}
              style={{flex: 0.55, color: apColors.inputLabel}}
            >
              Accessories
            </Text>
          </View>
          {/* -----DIVIDER----- */}
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: apColors.lightBlue1,
              marginTop: 20,
              marginBottom: 30,
            }}
          />
          {/* -----Commented for now----- */}
          {/* {renderSizes()} */}
          {/* {renderColors()} */}

          {product?.description ? (
            <>
              <Text
                style={{
                  ...theme.FONTS.H5,
                  color: apColors.black,
                  marginBottom: 14,
                }}
              >
                Description
              </Text>
              <PrimaryText
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                  // marginBottom: 20,
                }}
                color={apColors.gray1}
              >
                {product.description}
              </PrimaryText>
              <View style={{height: 20}} />
            </>
          ) : (
            <></>
          )}

          {renderButton()}
        </View>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View>
        <View
          style={{
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{...theme.FONTS.H3, color: apColors.black}}>
            Reviews 0
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(names.Reviews, {
                reviews: product.rating_count,
              })
            }
          >
            <svg.ViewAllSvg />
          </TouchableOpacity>
        </View>
        {/* {product.rating_count.map((item, index, array) => {
          return (
            index < 3 && (
              <View
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 20,
                  borderColor: apColors.lightBlue1,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                }}
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{
                    width: 50,
                    height: 50,
                    marginRight: 14,
                  }}
                  imageStyle={{borderRadius: 25}}
                />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: apColors.black,
                        lineHeight: 16 * 1.2,
                        marginBottom: 6,
                      }}
                    >
                      {item.name}
                    </Text>
                    <svg.RatingSvg rating={item.rating} />
                  </View>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 10,
                      color: apColors.gray1,
                      lineHeight: 10 * 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {item.created_at}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      lineHeight: 14 * 1.5,
                      color: apColors.gray1,
                    }}
                  >
                    {item.comment}
                  </Text>
                </View>
              </View>
            )
          );
        })} */}
      </View>
    );
  };

  const renderVendorInfo = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: apColors.white,
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: apColors.inputBorder,
          padding: 13,
          borderRadius: 8,
          marginBottom: 20,
       
        }}
        onPress={()=>{
          navigation.navigate(names.Shop,{
            brandData:brands,
            brand:true,
              title: "All products",
          })
        }}
      >
        {/* <Wrapper> */}
        {/* <View
            style={[
              styles.flexDirection,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}
          >
            <Text style={styles.heading}>Order summary</Text>

          </View> */}

        <View
          style={[
            styles.flexDirection,
            {justifyContent: "space-between", marginTop: 16, flex: 1},
          ]}
        >
          <View style={[styles.flexDirection, {flex: 1}]}>
            {/* <View style={[styles.imageContainer, { flex: 0.15 }]} /> */}
            {/* image right */}
            <Image
              style={styles.imageContainer}
              source={{uri: product.vendor_detail?.logo_img}}
              // onLoadStart={() => onloading(true)}
              // onLoadEnd={() => onloading(false)}
              resizeMode={'contain'}
              borderRadius={16}
            />
            {/* <View style={styles.productDetailCont}> */}

            <View
              style={{
                flex: 0.8,
                marginLeft: theme.RES_WIDTH(12),
                fontSize: theme.FONTS.dF_m,
              }}
            >
              <Text numberOfLines={1} style={styles.storeName}>
                Sold by{" "}
                <Text
                  numberOfLines={2}
                  style={[styles.storeName, {color: apColors.appColor}]}
                >
                  {product?.vendor_detail?.vendor_name}
                </Text>{" "}
              </Text>
              { product?.vendor_detail?.vendor_rating ?
              <Text style={styles.prodRating}>
                {"\u2022"} {averageRating?.toFixed(1)} {"\u2022"} {product?.vendor_detail?.vendor_rating?.length} {product?.vendor_detail?.vendor_rating?.length >1 ? "reviews" : "review"}
              </Text>

              : 
              <Text style={styles.prodRating}>No reviews</Text>

  }
            </View>

            {/* </View> */}
          </View>
          <View>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 1,
                paddingVertical: 3,
                paddingHorizontal: 5,
                width: 100,
              }}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.prodPrice,
                  {fontSize: theme.FONTS.dF_xs, color: apColors.inputLabel},
                ]}
              >
                {product?.vendor_detail?.university}
              </Text>
            </View>
          </View>
        </View>

        {/* footer view  */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: theme.RES_HEIGHT(14, 14, 14),
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg.VerifiedTicSvg />
            <Text
              style={{
                marginTop: theme.RES_HEIGHT(8, 8, 8),
                color: theme.COLORS.black,
              }}
            >
              Verified Seller
            </Text>
          </View>

          {/* ----DIVIDER--- */}

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 2,
              backgroundColor: apColors.inputBorder,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg.VerifiedTicSvg />
            <Text
              style={{
                marginTop: theme.RES_HEIGHT(8, 8, 8),
                color: theme.COLORS.black,
              }}
            >
              {vendorProd} Products
            </Text>
          </View>
        </View>

        {/* </Wrapper> */}
      </TouchableOpacity>
    );;
  };;

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: apColors.white,
          height: theme.RES_HEIGHT(80, 100, 128),
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: theme.RES_WIDTH(20),
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}
      >
        {/* <View style={[{flexDirection:"row"}, {marginTop: theme.MARGINS.hy20}]}> */}
        <View style={{width: theme.RES_WIDTH(165)}}>
          <components.SecondaryButton
            title={'Add to cart'}

       
            onPress={() => {
              const productExists = productExist(product);

              if (!productList.length) {
                // If the cart is empty, add the product
                dispatch(addToCart(cartItem));
                productWasAddedMessage(product);
              } else if (productExists) {
                // If the product already exists in the cart
                productExistMessage();
              } else {
                // Check if the product is from the same vendor
                const productHasSameVendor =
                  productList[0]?.vendorDetail?.vendor_id ===
                  product?.vendor_detail?.vendor_id;
          
                if (productHasSameVendor) {
                  // If the product is from the same vendor, add it to the cart
                  dispatch(addToCart(cartItem));
                  productWasAddedMessage(product);
                } else {
                  // If the product is from a different vendor
                  vendorExistMessage();
                }
              }
            }}

            // onPress={() => {
            
            //   const productExists = productExist(product);
            //   const productHasSameVendor =
            //   productList.length < 0 ||
            //     productList[0]?.vendorDetail?.vendor_id ===
            //     product?.vendor_detail?.vendor_id ;
            //   if (productExists) {
            //    productExistMessage();
            //   } 
            //   else if(!productHasSameVendor){
            //     vendorExistMessage();
            //   }
            //    else {
            //     dispatch(addToCart(cartItem));
            //     productWasAddedMessage(product);
            //   }
            // }}
          />
        </View>

        <View style={[{width: theme.RES_WIDTH(165)}, {marginLeft: 18}]}>
          <components.Button
            title="Buy now"
            onPress={() => {
              productExist(product)
                ? productExistMessage()
                : dispatch(addToCart(cartItem));
              // !productExist(product) && productWasAddedMessage(product);
              productExist(product)
                ? null
                : navigation.navigate(names.Checkout);
            }}
          />
        </View>
        {/* </View> */}
      </View>
    );;
  };;
  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          // backgroundColor: apColors.white,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* {renderHeader()} */}
        {renderCarousel()}
        {renderProductInfo()}
        {renderVendorInfo()}
        {/* {renderReviews()} */}
        {data &&
          renderProducts(data, navigation, isPending, viewLeft, viewRight)}
      </ScrollView>
    );
  };

  // if(product=== null){
  //   return(
  //     <></>
  //   )
  // }

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.appBg}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
          <NegotiateSvg />
          <Text style={styles.bsTitleTxt}>Negotiate Price</Text>
          <Text style={styles.bsDescTxt}>Don't like the price? Make an offer and negotiate with the seller!</Text>
<View style={styles.mainInputCont}>
          <components.InputField
          title="Enter price"
          containerStyle={styles.inpContainer}
          onChangeText={(val) => {
            setPrice({value: val, error: PriceValidator(val)});
          }}
       value={price?.value}
        />
        {price?.error ? <View style={styles.errorMsg}>
          <Text
            style={styles.errorTxt}
          >
            {price?.error}
          </Text>
        </View> : null}
        </View>

          <View style={[styles.flexDirection, {marginTop: theme.MARGINS.hy20}]}>
            <View style={{width: "40%"}}>
              <components.SecondaryButton
                title={'Cancel'}
                onPress={()=>{
                  bottomSheetRef.current?.close();
                }}
              />
            </View>

            <View style={[{width: "40%"}, {marginLeft: 18}]}>
              <Button
                title="Send offer"
                loading={pendingNego}
disable={ price.value === '' || price.error !== ''}
                 onPress={handleOfferBtn}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>


      <BottomSheet
        ref={bottomSheetSentRef}
        snapPoints={snapPointsSent}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        enablePanDownToClose={true}
        enabledInnerScrolling={true}
      >
        <BottomSheetView style={styles.bsCont}>
        <OrderSuccessful />
          <Text style={styles.bsTitleTxt}>Offer sent</Text>


          <View style={{marginTop: theme.MARGINS.hy20,width:'90%',marginHorizontal: theme.MARGINS.hy20}}>
          
              <components.SecondaryButton
                title={'Close'}
                onPress={()=>{
                  bottomSheetSentRef.current?.close();
                }}
              />
          
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  );
};

export default Product;

// const styles  = StyleSheet.create({
//   row: {
//     flex: 1,
//     justifyContent: "space-between",
//     // backgroundColor:"pink",
//   },

// })
