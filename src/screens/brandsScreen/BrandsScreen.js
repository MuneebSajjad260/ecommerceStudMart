import React, {useState, Component} from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import {renderStatusBar} from "../../utils/functions";
import {components} from "../../components";
import styles from "./Styles/BrandsScreenStyle";
import {ProductListItem} from "../../utils/functions";
import {useNavigation, useRoute} from "@react-navigation/native";
import {names} from "../../constants";
import {theme} from "../../constants";
import UniIconSvg from "../../svg/UniIconSvg";
import VerifiedSellerSvg from "../../svg/VerifiedSellerSvg";
import VerifiedProdSvg from "../../svg/VerifiedProdSvg";
import BrandSvg from "../../svg/BrandSvg";
import BrandProductSvg from "../../svg/BrandProductSvg";
import Brands from "../../components/Brands";

const BrandsScreen = ({route}) => {
  const navigation = useNavigation();
  const [isScrolling, setIsScrolling] = useState(false);
  
  const {brands} = route.params || {};
  console.log("prod--", brands);
  const renderHeader = () => {
    return (
      <components.Header
        title="Brands"
        goBack={true}
        border={false}
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height: theme.RES_HEIGHT(90, 100, 125),
        }}
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const ProductListItem = (item) => {
    return (
      <Brands data={item} col={true}
        onPress={() => navigation.navigate(names.Shop, {
          
            //product: test,
            university:true,
            //  title: "All products",
          })}
   />
    );
  };
  const renderProductsList = () => {
    return (
      <View style={styles.contentContainer}>
        <Text
          style={styles.uniLength}
        >{`${brands.length} brands`}</Text>
        <FlatList
          data={brands}
          contentContainerStyle={{flexGrow: 1}}
          numColumns={2}
          columnWrapperStyle={styles.wrapperStyle}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => ProductListItem(item)}
        />
      </View>
    );
  };

  const imageBg = () => {
    return (
  
      <ImageBackground
        source={require("../../assets/uniBg.png")}
        style={styles.firstImg}
      >
        <View style={styles.subHeadCont}>
        <Text style={styles.subHeadTxt}>Trusted by many now on your GO. </Text>
        </View>
        <View style={styles.img2Cont}>
          <ImageBackground
            source={require("../../assets/brandScreen.png")}
            resizeMode="contain" // Use 'contain' to fit the image within the available space
            style={styles.brandImg}
          >
            <View style={styles.brandContent}>
              <View style={styles.brandContentAllign}>
                <BrandSvg />
                <View style={styles.marginLeft}>
                  <Text style={styles.imgHeading}>Brands</Text>
                  <Text style={styles.number}>25</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: theme.MARGINS.hy20,
                }}
              >
                <BrandProductSvg />
                <View style={styles.marginLeft}>
                  <Text style={styles.imgHeading}>Products</Text>
                  <Text style={styles.number}>3400</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY === 0) {
      setIsScrolling(false); // User is back at the starting position
    } else {
      setIsScrolling(true); // User has started scrolling
    }
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {/* zIndex:isScrolling ? 1 : 0 */}
      <View style={[styles.headerContainer, {zIndex: 1}]}>
        {renderHeader()}
      </View>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust this value if needed
      >
        {/* <View style={styles.headerContainer}>
      {renderHeader()}
      </View> */}
        {imageBg()}
        {renderProductsList()}
      </ScrollView>
    </View>
  );
};

export default BrandsScreen;
