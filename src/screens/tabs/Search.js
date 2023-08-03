import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import useFetch from "../../utils/useFetch";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, clothingСategory, searchCategories} from "../../constants";

const Search = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("1");

  const url = "https://api.jsonbin.io/v3/b/638f8648c5b3a64f1bc56490";
  const {data, isPending, error} = useFetch(url);

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        bag={true}
        search={true}
        border={true}
        containerStyle={{backgroundColor: theme.COLORS.white, height:theme.RES_HEIGHT(90, 110, 125)}} 
        // level={theme.RES_HEIGHT(8, 12, 35)}
    
      />
    );
  };

  const renderCategory = () => {
    return (
      <View style={{marginTop: 25}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginBottom: 20,
          }}
        >
          {searchCategories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderColor: theme.COLORS.lightBlue1,
                  borderWidth: 1,
                  borderRadius: 50,
                  marginRight: 14,
                  backgroundColor:
                    selectedCategory === item.id
                      ? theme.COLORS.lightBlue1
                      : theme.COLORS.transparent,
                }}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text
                  style={{
                    lineHeight: 12 * 1.7,
                    fontSize: 12,
                    ...theme.FONTS.Mulish_600SemiBold,
                    textTransform: "uppercase",
                    color: theme.COLORS.black,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderClothingСategory = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {clothingСategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: index === 2 ? "100%" : "50%",
                height: 200,
                borderColor: theme.COLORS.white,
                borderRightWidth: 1,
                borderBottomWidth: 1,
              }}
              onPress={() =>
                navigation.navigate("Shop", {
                  title: item.title,
                  products: data,
                })
              }
            >
              <components.ImageItem
              simpleImage
                item={item}
                containerStyle={{width: "100%", height: "100%"}}
              />
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "rgba(23,28,49, 0.4)",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.H3,
                    color: theme.COLORS.white,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      >
        {renderCategory()}
        {renderClothingСategory()}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {/* {renderContent()} */}
    </View>
  );
};

export default Search;
