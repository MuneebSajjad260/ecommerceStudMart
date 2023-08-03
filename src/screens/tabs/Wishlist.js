import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {removeFromWishlist} from "../../store/wishlistSlice";
import {useSelector, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {setScreen} from "../../store/tabSlice";
import {removeFromWishlistHandler} from "../../utils/functions";

import {components} from "../../components";
import {theme} from "../../constants";
import {svg} from "../../svg";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const list = useSelector((state) => state.wishlist.list);

  const renderHeader = () => {
    return (
      <components.Header
        title="Wishlist"
        goBack={list.length > 0 ? false : true}
        bag={false}
        burgerMenu={list.length > 0 ? true : false}
        containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 110, 125)}} 
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const renderWishlistIsEmpty = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.SIZES.height * 0.05,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <svg.ShoppingBagSvg />
        </View>
        <components.Line containerStyle={{marginBottom: 14}} />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H2,
            color: theme.COLORS.black,
            paddingHorizontal: 60,
            marginBottom: 14,
          }}
        >
          Your wishlist is empty!
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            lineHeight: 16 * 1.7,
            marginBottom: 30,
          }}
        >
          Looks like you haven't added{"\n"}anything to your wishlist.
        </Text>
        <components.Button
          title="add to wishlist"
          onPress={() =>
            navigation.navigate("MainLayout", dispatch(setScreen("Home")))
          }
        />
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((item, index, array) => {
          return (
            <View
              key={item.id}
              style={{
                borderBottomWidth: array.length - 1 === index ? 0 : 1,
                borderColor: theme.COLORS.lightBlue1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                }}
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{width: 100, height: 100, marginRight: 14}}
                >
                  {item.is_sale === true && <components.Sale />}
                </components.ImageItem>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: theme.COLORS.gray1,
                      lineHeight: 14 * 1.7,
                      marginBottom: 2,
                    }}
                  >
                    {item.name}
                  </Text>
                  <components.Price
                    item={item}
                    containerStyle={{marginBottom: 9}}
                  />
                  <components.Rating item={item} />
                </View>
                <View style={{justifyContent: "space-between"}}>
                  <TouchableOpacity
                    onPress={() =>
                      removeFromWishlistHandler(() =>
                        dispatch(removeFromWishlist(item)),
                      )
                    }
                  >
                    <svg.WishlistLikeSvg />
                  </TouchableOpacity>
                  <components.inWishList item={item} />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {list.length === 0 ? renderWishlistIsEmpty() : renderContent()}
    </View>
  );
};

export default Wishlist;
