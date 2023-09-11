import {TouchableOpacity, Alert, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../store/wishlistSlice";
import React, {useState, useEffect} from "react";
import {ManageWhishlist} from "../services/actions/ManageWhishlist";
import {WishlistItems} from '../services/actions/WishlistItems';
import {svg} from "../svg";
import {theme} from "../constants";
import {selectUser} from "../store/userSlice";

const Favorite = ({item,onWishlistChange}) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectUser);
  // console.log('auth?.data?.id--', auth?.data?.id);

  const [favItem, setFavItem] = useState();
  const [wishlistData, setWishlistData] = useState({
    success: false,
    product_list: [],
   
  }); // Initialize with default structure
  const [isItemInWishlist, setIsItemInWishlist] = useState(false); // Track item in wishlist
 

  //GETTING ALL ITEMS FROM WISHLIST
  useEffect(() => {
    dispatch(WishlistItems({ userid: auth?.data?.id }))
      .unwrap()
      .then((result) => {
        console.log("ALL wishlist items data--", result);
        setWishlistData(result);
        setIsItemInWishlist(result.product_list.some((wishlistItem) => wishlistItem.id === item.id));
      })
      .catch((err) => {
        console.log("ALL wishlist items error--", err.response.data);
      });
  }, [dispatch]);

  // CLICK ON ITEM TO ADD OR REMOVE ITEM FROM WISHLIST
  const manageWishlist = (item) => {
    console.log("item detail", item.name, "---", item.id);
    setFavItem({status: 'loading'}); // Optimistic UI update
    dispatch(ManageWhishlist({userid: auth?.data?.id, product_id: item?.id}))
      .unwrap()
      .then((result) => {
        console.log("result whishlist result-", result);
        setFavItem(result);
        setIsItemInWishlist(!isItemInWishlist); // Toggle isItemInWishlist
         // Call the onWishlistChange callback function to trigger API call on the Wishlist screen
         onWishlistChange();
      })
      .catch((err) => {
        console.log("error whishlist result-", err);
       setFavItem({status: 'error'}); // Handle error
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
       
        strokeColor={
          favItem?.status === "loading"
            ? theme.COLORS.appColor
            : isItemInWishlist // Use isItemInWishlist to determine color
            ? theme.COLORS.appColor
            :  theme.COLORS.secondryTextColor
        }
        fillColor={
          favItem?.status === "loading"
            ? theme.COLORS.appColor
            : isItemInWishlist // Use isItemInWishlist to determine color
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