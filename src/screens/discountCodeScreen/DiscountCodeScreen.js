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
import styles from "./Styles/DiscountCodeScreenStyle";
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
import BrandImgSvg from "../../svg/brandImgSvg";
import DiscountSvg from "../../svg/DiscountSvg";

const DiscountCodeScreen = ({route}) => {
  const navigation = useNavigation();
  const [isScrolling, setIsScrolling] = useState(false);

  

  const {brands} = route.params || {};
  console.log("prod--", brands);
  const totalDiscount = brands?.discount_brands.reduce((sum, brand) => {
    // Convert brand_discount_count to a number before adding
    const count = parseInt(brand.brand_discount_count, 10);
    return sum + count;
  }, 0)

  console.log("total dis--",totalDiscount)
  const renderHeader = () => {
    return (
      <components.Header
        title="Discounts"
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
      
   
      <Brands discount={true} data={item} col={true}
        onPress={() => navigation.navigate(names.Shop, {
          
          brandData:item,
          brand:true,
            title: "All products",
          })}
   />
    );
  };
  const renderProductsList = () => {
    return (
      <View style={styles.contentContainer}>
        <Text
          style={styles.uniLength}
        >{`${brands?.discount_brands.length} brands`}</Text>
        <FlatList
          data={brands?.discount_brands}
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
        source={require("../../assets/brandDiscount.png")}
        style={styles.firstImg}
      >
        <View style={styles.subHeadCont}>
        <Text style={styles.subHeadTxt}>Explore Exclusive Discounts
from Trusted Brands! </Text>
        </View>

<View style={styles.brandAndDiscConts}>
        <View style={styles.brandCont}> 

        <BrandImgSvg/>
        <Text style={styles.innerTxt}>{`${brands?.discount_brands.length} Brands`}</Text>

        </View>

        <View style={styles.discCont}> 

 <DiscountSvg/>
        <Text style={styles.innerTxt}>{`${totalDiscount}  Discounts`}</Text>

</View>
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

export default DiscountCodeScreen;
