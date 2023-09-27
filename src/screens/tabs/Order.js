import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addToCart, removeFromCart, removeProduct} from '../../store/cartSlice';
import {useNavigation} from "@react-navigation/native";
import {setScreen} from "../../store/tabSlice";
import {renderStatusBar} from "../../utils/functions";

import styles from "./Style/OrderStyle";
import PriceFooter from "../../components/PriceFooter";
import Cancel from "../../svg/CancelSvg";
import {components} from "../../components";
import {theme, names, tabNames} from "../../constants";
import {svg} from "../../svg";
import Wrapper from "../../components/Wrapper";
import Plus from "../../svg/Plus";
import Minus from "../../svg/Minus";

const Order = () => {
  const navigation = useNavigation();
  const discount = 0;
  const products = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart);

  const [promo, setPromo] = useState('');

  console.log('----Price Order-----', total, '-product-', products);
  // console.log("cart--", cart);

  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <components.Header
        title={`Cart(${products.length} Item)`}
        // bag={true}
       // goBack={products.length > 0 ? true : false}
        goBack={products.length > 0 ? false : false}
        // burgerMenu={products.length > 0 ? false : true}
        border={true}
        containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 110, 125)}} 
    level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  //RENDER DISCOUNT CODE CARD

  const renderDiscountCode = () => {
    return (
      <Wrapper style={styles.promoCard}>
        <TextInput
          style={styles.inputTxt}
          multiline
          onChangeText={(text) => {
            setPromo(text);
          }}
          value={promo}
          placeholder="Enter discount code"
          placeholderTextColor={theme.COLORS.secondryTextColor} // Change this color to the desired placeholder text color
        />
        <TouchableOpacity>
          <Text style={styles.apply}>Apply</Text>
        </TouchableOpacity>
      </Wrapper>
    );
  };

  //RENDER PRICE SECTON

  const renderPriceSection = () => {
    return (
      <Wrapper style={[styles.priceSection, {marginBottom: 150}]}>
        <View>
          <View style={styles.priceContALLign}>
            <View style={styles.flexDirection}>
              <Text style={styles.orderSummary}>Subtotal</Text>
              <Text style={styles.itemNo}>{`(${products.length} Item)`}</Text>
            </View>
            <Text style={styles.orderSummary}>QAR {total}</Text>
          </View>
          <View style={styles.priceContALLign}>
            <Text style={styles.orderSummary}>Discount:</Text>
            <Text style={styles.orderSummary}>QAR {discount}</Text>
          </View>
          {/* <View style={styles.priceContALLign}>
            <Text style={styles.orderSummary}>Tax:</Text>
            <Text style={styles.orderSummary}>QAR 1,200</Text>
          </View> */}
        </View>
      </Wrapper>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.scroll}>
        {products?.map((item, index) => {
          return (
            <Wrapper key={index} style={styles.card}>
              <View>
                <View
                  style={[
                    styles.flexDirection,
                    {justifyContent: 'space-between' , alignItems:'center'},
                  ]}
                >
                  {/* <View style={[styles.flexDirection, {alignItems: "center"}]}> */}
                    <View style={styles.imageContainer}>
                      <components.ImageItem
                item={item}
                simpleImage={true}
                key={index}
              //  resizeMode="contain"
              />
                      
                      </View> 
                    <View style={[styles.productDetailCont, {flex:1}]}>
                      <View style={styles.prodCont}>
                        <View style={styles.lowerAllign}>
                          <Text style={styles.prodName}>{item?.name}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(removeProduct(item));
                            }}
                          >
                            <Cancel />
                          </TouchableOpacity>
                        </View>
                        <Text
                          style={styles.prodPrice}
                        >{`QAR ${item?.price} `}</Text>
                      </View>

                      <View style={styles.lowerCont}>
                        <View style={styles.lowerAllign}>
                          <Text
                            style={styles.quantity}
                          >{`x${item?.quantity}`}</Text>
                          <View style={styles.counterCont}>
                            <TouchableOpacity
                              onPress={() => dispatch(removeFromCart(item))}
                              style={styles.sign}
                            >
                              <Minus />
                            </TouchableOpacity>
                            <Text style={styles.itemQuantity}>
                              {item.quantity}
                            </Text>
                            <TouchableOpacity
                              onPress={() => dispatch(addToCart(item))}
                              style={styles.sign}
                            >
                              <Plus />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  {/* </View> */}
                </View>
              </View>
            </Wrapper>
          );
        })}

        {/* DISCOUNT CODE  */}

        {renderDiscountCode()}
        {renderPriceSection()}
      </View>
    );
  };

  const checkoutFooter = () => {
    return (
      <PriceFooter
        price={total}
        btnName={'Checkout'}
        onPress={() => {
          console.log('checkout');
          navigation.navigate(names.Checkout);
        }}
      />
    )
  };
  const renderCartIsEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.cartCont}>
          <svg.EmptyCartSvg />
        </View>
        <Text style={styles.cartEmptyTxt}>Your cart is empty!</Text>
        <Text style={styles.descTxt}>
          Start filling your cart with amazing finds!
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
       {renderStatusBar()}
        {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.scrollView}
      >
       
        {products.length === 0 ? renderCartIsEmpty() : renderContent()}
      </ScrollView>
      {products.length === 0 ? null : (
        <View style={styles.footer}>{checkoutFooter()}</View>
      )}
    </View>
  );
};

export default Order;
