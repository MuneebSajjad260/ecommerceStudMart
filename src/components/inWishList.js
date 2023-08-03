import React from "react";
import {TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/cartSlice";
import {productExistMessage, addedToCartMessage} from "../utils/functions";

import {svg} from "../svg";

const inWishList = ({item}) => {
  const productList = useSelector((state) => state.cart.list);
  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        productExist(item) ? productExistMessage() : dispatch(addToCart(item));
        !productExist(item) && addedToCartMessage(item);
      }}
    >
      <svg.WishlistBagSvg />
    </TouchableOpacity>
  );
};

export default inWishList;
