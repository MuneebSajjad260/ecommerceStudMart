import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
  StyleSheet,
  Image
} from "react-native";
import React from "react";
import getThemedColors from "../utils/themeMode";
import getRandomColor from '../utils/randomColor';
import {theme} from "../constants";
import { names } from "../constants";

const CategoryItem = ({item, itemWidth,navigation,data}) => {
  //RANDOM COLORS
  const getRandomBackground = () => {
    const {background, borderColor} = getRandomColor(); // Your random color generation logic goes here
    return {backgroundColor: background, borderColor: borderColor};
  };

  // Function to truncate the name if it exceeds 12 letters
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    } else {
      return name.substr(0, maxLength) + "...";
    }
  };

  return (
    <TouchableOpacity
     style={[styles.mainContainer, getRandomBackground()]}
     onPress={() =>
        navigation.navigate(names.Shop, {
          title: `${item.name}`,
          category:true,
          categoryId:item.id
            // product: data,
        })
      }
     >
      <View style={styles.flexDirection}>
        <View >
        <Text style={styles.name}>{truncateName(item.name, 10)}</Text>
        <Text style={styles.productLength}>{`${item.count} products`}</Text>
        </View>
        <View style={styles.imgCont}>
        <Image
                    key={Number(item?.image?.id)}
                    style={{height: "60%", width: "60%"}}
                    source={{uri: item?.image?.src}}

                    // resizeMode='contain'
                  />
            </View>
      </View>
    </TouchableOpacity>
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
  name: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    flex: 1,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   //marginLeft:10

  },
  imgCont: {
    width: 42,
    height: 42,

    borderRadius: 40,
    backgroundColor: theme.COLORS.whiteOnly,
    alignItems: "center",
    justifyContent: "center",
  },
  productLength:{
    ...theme.FONTS.H12,
    marginTop:4,
    color:theme.COLORS.secondryTextColor
  }
});

export default CategoryItem;
