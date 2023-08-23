import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useIsFocused} from "@react-navigation/native";
import {removeFromWishlist} from "../../store/wishlistSlice";
import {useSelector, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {setScreen} from "../../store/tabSlice";
import {removeFromWishlistHandler} from "../../utils/functions";
import {renderStatusBar} from '../../utils/functions';
import Wrapper from "../../components/Wrapper";
import {components} from "../../components";
import styles from "./Style/WhishlistStyle";
import {theme} from "../../constants";
import EmptyWishlist from "../../svg/EmptyWishlistSvg";
import {svg} from "../../svg";
import {clearWishlist} from "../../store/wishlistSlice";
import WishlistItemsCard from "../../components/WishlistItemsCard";
import {DeleteWishlist} from "../../services/actions/DeleteWishlist";
import {WishlistItems} from "../../services/actions/WishlistItems";

const Wishlist = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [wishlistData, setWishlistData] = useState(); // Initialize with default structure
  const [deleteData , setDeleteData]=useState(false)
  // const list = useSelector((state) => state.wishlist.list);
  // console.log("list---",list)

  //GETTING ALL ITEMS FROM WISHLIST
  const fetchWishlistData = () => {
    dispatch(WishlistItems({userid: 1}))
      .unwrap()
      .then((result) => {
        console.log('ALL wishlist items data--', result);
        setWishlistData(result);
      })
      .catch((err) => {
        console.log('ALL wishlist items error--', err.response.data);
        setWishlistData(err.response.data);
      });
  };

  // //GETTING ALL ITEMS FROM WISHLIST
  useEffect(() => {
    fetchWishlistData();
  }, [dispatch, isFocused, deleteData]);

  //CLEAR WISHLIST
  const clearAllItemsHandler = () => {
    dispatch(DeleteWishlist({userid: 1}))
      .unwrap()
      .then((result) => {
        console.log("delete wishlist data--", result);
        setDeleteData(result);
      })
      .catch((err) => {
        console.log("delete wishlist data error --", err.response.data);
        // setWishlistData(err.response.data);
      });
  };
  const renderHeader = () => {
    return (
      <components.Header
        title="Wishlist"
        goBack={true}
        border={true}
        clearAll={wishlistData?.success ? true : false}
        clearList={clearAllItemsHandler}
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height: theme.RES_HEIGHT(90, 100, 125),
        }}
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const renderWishlistIsEmpty = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.emptyScroll}
      >
        <View style={styles.imgCont}>
          <EmptyWishlist />
        </View>
        <Text style={styles.emptyTxt}>Your wishlist is empty!</Text>
        <Text style={styles.emptyDesc}>
          Enjoy a curated collection by saving your favorite items
        </Text>
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}
      >
        {wishlistData?.product_list?.map((item, index, array) => {
          return (
            <View style={styles.contentContainer}>
              <WishlistItemsCard
                item={item}
                index={index}
                array={array}
                dispatch={dispatch}
                navigation={navigation}
                onWishlistChange={fetchWishlistData} // Pass the callback here
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {wishlistData?.success === false
        ? renderWishlistIsEmpty()
        : renderContent()}
    </View>
  );
};

export default Wishlist;
