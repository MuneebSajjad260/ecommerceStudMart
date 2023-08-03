import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import useFetch from "../../utils/useFetch";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, homeCategories} from "../../constants";
import {names} from "../../constants";

const HomeTwo = () => {
  const navigation = useNavigation();
  console.log("-----I ma home two ----")

  const url = "https://api.jsonbin.io/v3/b/638f8648c5b3a64f1bc56490";
  const {data, isPending, error} = useFetch(url);

  const featured = data?.filter((item) => item.featured);
  const bestSellers = data?.filter((item) => item.is_bestseller);

  console.log("featured", featured);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderHeader = () => {
    return (
      <components.Header
        logo={true}
        burgerMenu={true}
        bag={true}
        border={true}
      />
    );
  };

  const renderCategory = () => {
    return (
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingLeft: 20,
          marginTop: 20,
          marginBottom: 30,
        }}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}
      >
        {homeCategories.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={{marginRight: 14}}>
              <components.ImageItem
                item={item}
                containerStyle={{
                  width: 70,
                  height: 70,

                  marginBottom: 6,
                }}
                borderRadius={70 / 2}
                indicatorBorderRadius={70 / 2}
              />
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 14,
                  color: theme.COLORS.black,
                  lineHeight: 14 * 1.2,
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const renderBanner = () => {
    return (
      <TouchableOpacity
        style={{paddingHorizontal: 20, marginBottom: 40}}
        onPress={() =>
          navigation.navigate(names.Shop, {products: data, title: "Shop"})
        }
      >
        <View
          style={{
            width: "100%",
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading && (
            <ActivityIndicator
              size="small"
              color={theme.COLORS.lightGray}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 0,
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EBF2FC",
              }}
            />
          )}
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            onLoad={() => setLoading(false)}
            source={{
              uri: "https://dl.dropbox.com/s/xalfqycdjb808pw/03.png?dl=0",
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFeatured = () => {
    return (
      <View style={{marginBottom: 40, paddingHorizontal: 20}}>
        <components.ProductCategory
          title="Featured products"
          containerStyle={{marginBottom: 14}}
          onPress={() =>
            navigation.navigate(names.Shop, {
              title: "Featured Products",
              products: featured,
            })
          }
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {featured.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: "48%",
                  marginBottom: 20,
                }}
                onPress={() =>
                  navigation.navigate(names.Product, {
                    product: item,
                  })
                }
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{
                    width: "100%",
                    height: 170,
                    marginBottom: 8,
                    backgroundColor: theme.COLORS.lightBlue2,
                  }}
                  resizeMode="contain"
                >
                  {item.is_sale === true && <components.Sale />}
                  <components.Favorite item={item} />
                  <components.InCart item={item} />
                </components.ImageItem>
                <components.Rating item={item} />
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                    lineHeight: 14 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <components.Price item={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderBestSellers = () => {
    return (
      <View style={{marginBottom: 40, paddingHorizontal: 20}}>
        <components.ProductCategory
          title="Best sellers"
          containerStyle={{marginBottom: 14}}
          onPress={() =>
            navigation.navigate(names.Shop, {
              title: "Best sellers",
              products: bestSellers,
            })
          }
        />
        {bestSellers.map((item, index, array) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: "100%",
                height: 100,
                flexDirection: "row",
                marginBottom: array.length - 1 === index ? 0 : 14,
              }}
              onPress={() =>
                navigation.navigate(names.Product, {
                  product: item,
                })
              }
            >
              <components.ImageItem
                item={item}
                containerStyle={{width: 100, height: 100, marginRight: 14}}
              >
                {item.is_sale && <components.Sale />}
              </components.ImageItem>
              <View style={{flex: 1}}>
                <components.ProductName item={item} />
                <components.Price
                  item={item}
                  containerStyle={{marginBottom: 9}}
                />
                <components.Rating item={item} />
              </View>
              <components.FavoriteWithCircle item={item} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
      >
        {renderCategory()}
        {renderBanner()}
        {featured?.length > 0 && renderFeatured()}
        {bestSellers?.length > 0 && renderBestSellers()}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default HomeTwo;
