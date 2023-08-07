import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {removeFromWishlist} from '../../store/wishlistSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setScreen} from '../../store/tabSlice';
import {removeFromWishlistHandler} from '../../utils/functions';
import {renderStatusBar} from "../../utils/functions";
import Wrapper from '../../components/Wrapper';
import {components} from '../../components';
import styles from './Style/WhishlistStyle';
import {theme} from '../../constants';
import EmptyWishlist from '../../svg/EmptyWishlistSvg';
import {svg} from '../../svg';
import { clearWishlist } from '../../store/wishlistSlice';
import WishlistItems from '../../components/WishlistItems';

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const list = useSelector((state) => state.wishlist.list);
  console.log("list---",list)

  //CLEAR WISHLIST
  const clearAllItemsHandler = () => {
    // Dispatch an action to clear the entire wishlist
    dispatch(clearWishlist());
  };
  const renderHeader = () => {
    return (
      <components.Header
        title="Wishlist"
        goBack={true}
        border={true}
        clearAll={list.length > 0  ? true : false}
        clearList={clearAllItemsHandler}
      />
    );
  };
  
  const renderWishlistIsEmpty = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.emptyScroll}
      >
        <View
          style={styles.imgCont}
        >
          <EmptyWishlist />
        </View>
        <Text
          style={styles.emptyTxt}
        >
          Your wishlist is empty!
        </Text>
        <Text
          style={styles.emptyDesc}
        >
          Enjoy a curated collection by saving your favorite items
        </Text>
       
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((item, index, array) => {
          return (
            <View style={styles.contentContainer}>
              <WishlistItems
                item={item}
                index={index}
                array={array}
                dispatch={dispatch}
                navigation={navigation}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {list.length === 0 ? renderWishlistIsEmpty() : renderContent()}
    </SafeAreaView>
  );
};

export default Wishlist;
