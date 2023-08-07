import {View, Text, TouchableOpacity, TextInput} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import {setScreen} from "../store/tabSlice";
import {cartIsEmpty} from "../utils/functions";

import {svg} from "../svg";
import {theme, names} from "../constants";
import {components} from "../components";

const Header = ({
  goBack,
  containerStyle,
  border,
  title,
  logo,
  search,
  burgerMenu,
  bag,
  searchIcon,
  level,
  clearAll,
  clearList
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart?.list);
  const quantity = list?.length;
  const total = useSelector((state) => state.cart?.price);

  const [showModal, setShowModal] = useState(false);

  //console.log("------Header Bag QTY------", quantity, total)

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
       // alignItems: "center",
        height: 52,
        ...containerStyle,
        borderBottomWidth: border ? 1 : 0,
        borderBottomColor: theme.COLORS.lightBlue1,
        // backgroundColor:"red",
        // paddingBottom: level,
        // marginBottom: level,
      }}
    >
      {goBack && (
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: level,
            alignItems: "center",
            // backgroundColor:"pink",
            // marginTop: level,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <Text
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            ...theme.FONTS.H4,
            color: theme.COLORS.black,
            // backgroundColor:"yellow",
            paddingVertical: 6,
            bottom: level,
            position: "absolute",
          }}
        >
          {title}
        </Text>
      
      )}
    
      {search && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: theme.SIZES.width - 160,
            borderWidth: 1,
            padding:10,
            borderRadius:8,
            borderColor: theme.COLORS.lightGray,
            // backgroundColor: "pink",


          }}
        >
          <View style={{marginRight: 7}}>
            <svg.HeaderSearchSvg />
          </View>
        
          <Text style={{...theme.FONTS.Mulish_400Regular,
                  fontSize: 10,
                  // paddingHorizontal: 6,
                  paddingVertical: 2,
                  lineHeight: 10 * 1.3,}}>Search Product, brand or category</Text>


          {/* <TextInput
            placeholder="Search"
            style={{height: "100%", width: "100%"}}
          /> */}
        </View>
      )}
      {clearAll ?
      <TouchableOpacity
      onPress={
        clearList
      }
      style={{
        position: "absolute",
        right: 0,
        // paddingRight: 0,
        marginRight:20,
        bottom:10,
     //   padding:14,
        //  alignItems:"center",
        //  justifyContent:"center"
      }}
      >
           <Text style={{
            ...theme.FONTS.H12,
            color:theme.COLORS.secondryTextColor
           }}>clear all</Text>
      </TouchableOpacity>
     :
     null}
      {/* {logo && (
        <View style={{top: -3}}>
          <svg.Logo1Svg />
        </View>
      )} */}

      {/* -----------Left Hand Side------------- */}
      {logo && (
        <View
          style={{
            position: "absolute",
            left: 0,
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          {/* <TouchableOpacity onPress={() => setShowModal(true)}> */}
            <svg.Logo1Svg />
          {/* </TouchableOpacity> */}
        </View>
      )}
      {bag && (
        <View
          style={{
            position: "absolute",
            right: 0,
            // paddingRight: 0,
            marginRight:20,
            bottom: level,
            backgroundColor:"rgba(255, 255, 255, 1)",
            borderRadius:50,
            padding:14,
            //  alignItems:"center",
            //  justifyContent:"center"
          }}
        >
          <TouchableOpacity
            style={{paddingLeft: 0, flexDirection: "row"}}
            onPress={() => {
              list.length > 0
                ? dispatch(setScreen("Order")) &&
                  navigation.navigate(names.TabNavigator)
                : cartIsEmpty();
            }}
          >
            <svg.CartSvg />
            <View
              style={{
                position: "absolute",
                right: 14,
                bottom: -3,
                backgroundColor: theme.COLORS.accent,
                borderRadius: 30,
                zIndex: 2,
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.white,
                  ...theme.FONTS.Mulish_700Bold,
                  fontSize: 10,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  lineHeight: 10 * 1.3,
                }}
              >
                {quantity > 0 ? quantity : 0}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {searchIcon && (
        <View
          style={{
            position: "absolute",
            right: 0,
            paddingRight: 20,
            // backgroundColor: "pink",
            paddingVertical: 9,
            bottom: level,
          }}
        >
          <TouchableOpacity
            style={{paddingLeft: 20, flexDirection: "row"}}
            onPress={() => {
              //Goto search 
                  // navigation.navigate(names.TabNavigator)
            }}
          >
            <svg.SearchIconSvg />
          </TouchableOpacity>
        </View>
      )}
      <components.BurgerContacts
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default Header;
