import { TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import React from "react";

import { svg } from "../svg";
import { theme } from "../constants";

const Favorite = ({ item }) => {
  const wishlist = useSelector((state) => state.wishlist.list);
  const productList = useSelector((state) => state.cart.list);
  const itemExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };
  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const dispatch = useDispatch();

  const removeFromWishlistHandler = (product) => {
    return Alert.alert(
      "Alert!",
      "Are you sure you want to delete from wishlist ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => dispatch(removeFromWishlist(product)),
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        position: "absolute",
        right: 2,
        top: 2,
      }}
      onPress={() => {
        itemExist(item)
          ? removeFromWishlistHandler(item)
          : dispatch(addToWishlist(item));
      }}
    >
      <svg.HeartSvg
        strokeColor={itemExist(item) ? theme.COLORS.appColor : theme.COLORS.whiteOnly}
        fillColor={
          itemExist(item) ? theme.COLORS.appColor : theme.COLORS.transparent
        }
      />
    </TouchableOpacity>
  );
};

export default Favorite;
