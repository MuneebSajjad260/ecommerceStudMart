import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
  StyleSheet,
  Image,
  Pressable
} from 'react-native';
import {removeFromWishlist} from '../store/wishlistSlice';
import {removeFromWishlistHandler} from '../utils/functions';
import React from 'react';
import getThemedColors from '../utils/themeMode';
import getRandomColor from "../utils/randomColor";
import {theme} from '../constants';
import {names} from '../constants';
import {components} from '.';
import Wrapper from './Wrapper';
import {svg} from '../svg';

const WishlistItems = ({item, index, array, navigation, dispatch}) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(names.Product, {
          product: item,
        })
      }
    >
      <Wrapper
        key={item.id}
        style={[
          styles.wrapper,
          {borderBottomWidth: array.length - 1 === index ? 0 : 1},
        ]}
      >
        <View style={styles.flexDirection}>
          <components.ImageItem
            item={item}
            borderRadius={8}
            containerStyle={styles.imgCont}
          >
            {item.is_sale === true && <components.Sale />}
          </components.ImageItem>
          <View style={{flex: 1}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{`QAR ${item.price}`}</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() =>
                //   removeFromWishlistHandler(() =>
                //     dispatch(removeFromWishlist(item)),
                //   )
                {
                  dispatch(removeFromWishlist(item));
                }
              }
            >
              <svg.WishlistLikeSvg />
            </TouchableOpacity>
            {/* <components.inWishList item={item} /> */}
          </View>
        </View>
      </Wrapper>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: theme.SIZES.rsWidth / 2.35,
    height: theme.SIZES.rsHeight / 10,
    paddingHorizontal: theme.MARGINS.hy10,
    paddingVertical: theme.MARGINS.hy20,
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 14,
    marginBottom: 14,
  },
  wrapper: {
    borderColor: theme.COLORS.lightBlue1,
  },
  name: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgCont: {
    width: 42,
    height: 42,

    borderRadius: 20,
    backgroundColor: theme.COLORS.whiteOnly,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productLength: {
    ...theme.FONTS.H12,
    marginTop: 4,
    color: theme.COLORS.secondryTextColor,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  imgCont: {width: '25%', height: 80, marginRight: 14},
  name: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,

    marginBottom: theme.MARGINS.hy10,
  },
  price: {
    ...theme.FONTS.H5,
    color: theme.COLORS.appColor,
  },
});

export default WishlistItems;
