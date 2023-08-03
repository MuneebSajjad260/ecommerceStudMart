import React from "react";
import {TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/cartSlice";
import {productExistMessage, addedToCartMessage} from "../utils/functions";

import {svg} from "../svg";
import {theme} from "../constants";

const InCart = ({item}) => {
  const productList = useSelector((state) => state.cart.list);
  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        position: "absolute",
        right: 0,
        top: 38,
      }}
      onPress={() => {
        productExist(item) ? productExistMessage() : dispatch(addToCart(item));
        !productExist(item) && addedToCartMessage(item);
      }}
    >
      <svg.ItemBagSvg color={productExist(item) && theme.COLORS.accent} />
    </TouchableOpacity>
  );
};

export default InCart;
