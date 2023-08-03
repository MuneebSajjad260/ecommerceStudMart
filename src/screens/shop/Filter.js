import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {useNavigation, useRoute} from "@react-navigation/native";
import useFetch from "../../utils/useFetch";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";

const SIZE = [
  {
    id: "1",
    size: "xs",
  },
  {
    id: "2",
    size: "s",
  },
  {
    id: "3",
    size: "m",
  },
  {
    id: "4",
    size: "l",
  },
  {
    id: "5",
    size: "xl",
  },
  {
    id: "6",
    size: "xxl",
  },
];

const COLOR = [
  {
    id: "1",
    color: "#FF6262",
  },
  {
    id: "2",
    color: "#63C7FF",
  },
  {
    id: "3",
    color: "#F8E7CD",
  },
  {
    id: "4",
    color: "#323858",
  },
  {
    id: "5",
    color: "#111111",
  },
];

const TAGS = [
  {
    id: "1",
    tag: "kids",
  },
  {
    id: "2",
    tag: "sport",
  },
  {
    id: "3",
    tag: "dress",
  },
  {
    id: "4",
    tag: "pants",
  },
  {
    id: "5",
    tag: "t-shirt",
  },
  {
    id: "6",
    tag: "hat",
  },
  {
    id: "7",
    tag: "unisex",
  },
  {
    id: "8",
    tag: "bag",
  },
  {
    id: "9",
    tag: "accessories",
  },
  {
    id: "10",
    tag: "shoes",
  },
  {
    id: "11",
    tag: "polo",
  },
];

const Filter = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {title} = route.params || {};

  const url = "https://api.jsonbin.io/v3/b/638f8648c5b3a64f1bc56490";
  const {data, isPending, error} = useFetch(url);

  const [productSize, setProductSize] = useState(1);
  const [productColor, setProductColor] = useState(1);
  const [productTag, setProductTag] = useState(1);

  const renderHeader = () => {
    return <components.Header title="Filter" goBack={true} />;
  };

  const renderSize = () => {
    return (
      <View>
        <Text
          style={{
            ...theme.FONTS.H5,
            color: theme.COLORS.black,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          Size
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          {SIZE.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: theme.COLORS.lightBlue1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                backgroundColor:
                  productSize == index
                    ? theme.COLORS.lightBlue1
                    : theme.COLORS.transparent,
              }}
              onPress={() => setProductSize(index)}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 12,
                  textTransform: "uppercase",
                  color: theme.COLORS.black,
                }}
              >
                {item.size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderColor = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.H5,
            color: theme.COLORS.black,
            marginTop: 20,
            marginBottom: 14,
            marginRight: 25,
          }}
        >
          Color
        </Text>

        {COLOR.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setProductColor(index)}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: item.color,
                marginHorizontal: 7,
                borderRadius: 19,
                borderWidth: 4,
                borderColor:
                  productColor == index
                    ? theme.COLORS.lightBlue1
                    : theme.COLORS.transparent,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View style={{marginBottom: 40}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.FONTS.H4,
            color: theme.COLORS.black,
          }}
        >
          Price
        </Text>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => {
            return (
              <View style={{alignItems: "center"}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.COLORS.black,
                    borderRadius: 15 / 2,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: -30,
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          customMarkerRight={(e) => {
            return (
              <View style={{alignItems: "center"}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.COLORS.black,
                    borderRadius: 15 / 2,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: -30,
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.SIZES.width - 40}
          onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.COLORS.black,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: "#DBE3F5",
            width: 300,
          }}
          containerStyle={{
            height: 20,
            width: "100%",
          }}
          trackStyle={{
            height: 3,
            width: "100%",
          }}
        />
      </View>
    );
  };

  const renderCategory = () => {
    return (
      <View
        style={{
          marginBottom: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <components.ProductStatus status="sale" color="#69864D" />
        <components.ProductStatus status="sale" color="#CFA93F" />
        <components.ProductStatus status="sale" color="#864D7D" />
      </View>
    );
  };

  const renderTags = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {TAGS.map((item, index) => (
          <TouchableOpacity
            style={{
              marginBottom: 8,
              marginRight: 8,
              borderRadius: 50,
              borderColor: theme.COLORS.lightBlue1,
              borderWidth: 1,
              backgroundColor:
                productTag == index
                  ? theme.COLORS.lightBlue1
                  : theme.COLORS.transparent,
            }}
            key={item.id}
            onPress={() => setProductTag(index)}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 6,
                textTransform: "uppercase",
                fontSize: 12,
                ...theme.FONTS.Mulish_600SemiBold,
                color: theme.COLORS.black,
              }}
            >
              {item.tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title="apply filters"
        onPress={() =>
          navigation.navigate(names.Shop, {products: data, title: title})
        }
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        {renderSize()}
        {renderColor()}
        {renderPrice()}
        {renderCategory()}
        {renderTags()}
        {renderButton()}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.white}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Filter;
