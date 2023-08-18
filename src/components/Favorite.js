import {TouchableOpacity, Alert, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../store/wishlistSlice";
import React, {useState, useEffect} from "react";
import {ManageWhishlist} from "../services/actions/ManageWhishlist";
import {svg} from "../svg";
import {theme} from "../constants";
import {selectUser} from "../store/userSlice";

const Favorite = ({item}) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectUser);
  console.log('auth.data.id--', auth.data.id);

  const [favItem, setFavItem] = useState();
  // console.log("item wishlist---",item)
  const wishlist = useSelector((state) => state.wishlist.list);
  const productList = useSelector((state) => state.cart.list);
  const itemExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };

  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const removeFromWishlistHandler = (product) => {
    // return Alert.alert(
    //   "Alert!",
    //   "Are you sure you want to delete from wishlist ?",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel",
    //     },
    //     {
    //       text: "OK",
    //       onPress: () =>
    dispatch(removeFromWishlist(product));
    //     },
    //   ]
    // );
  };

  const manageWishlist = (item) => {
    console.log("item detail", item.name, "---", item.id);
    dispatch(ManageWhishlist({userid: auth.data.id, product_id: item.id}))
      .unwrap()
      .then((result) => {
        console.log("result whishlist result-", result);
        setFavItem(result);
      })
      .catch((err) => {
        console.log("error whishlist result-", err);
      });
  };
  return (
    <TouchableOpacity
      style={styles.mainCont}
      onPress={() => {
        //  if( itemExist(item))
        //     {removeFromWishlistHandler(item)
        //     }
        //     else{

        //     dispatch(addToWishlist(item));
        manageWishlist(item);
        //  }
      }}
    >
      <svg.HeartSvg
        // strokeColor={itemExist(item) ? theme.COLORS.appColor : theme.COLORS.secondryTextColor}
        strokeColor={
          favItem?.message == "Product added successfully"
            ? theme.COLORS.appColor
            : theme.COLORS.secondryTextColor
        }
        // fillColor={
        //   itemExist(item) ? theme.COLORS.appColor : theme.COLORS.transparent
        // }
        fillColor={
          favItem?.message == "Product added successfully"
            ? theme.COLORS.appColor
            : theme.COLORS.transparent
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    padding: 8,
    position: "absolute",
    right: 2,
    top: 2,
  },
});

export default Favorite;
