import React, {useState,useEffect} from "react";
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
import styles from "./Styles/UniversityScreenStyle";
import {ProductListItem} from "../../utils/functions";
import {useNavigation, useRoute} from "@react-navigation/native";
import {names} from "../../constants";
import {theme} from "../../constants";
import UniIconSvg from "../../svg/UniIconSvg";
import VerifiedSellerSvg from "../../svg/VerifiedSellerSvg";
import VerifiedProdSvg from "../../svg/VerifiedProdSvg";



const UniversityScreen = ({route}) => {
 
  const navigation = useNavigation();
  const [isScrolling, setIsScrolling] = useState(false);
  const {university,totalVendor} = route.params || {};
  console.log("prod--", university);
  const totalProducts = university.reduce((total, item) => total + item.count, 0);
  const uniDetails = [
    {
      image: <UniIconSvg />,
      heading: "universities",
      count: university.length,
      color: "rgba(186, 237, 237, 1)",
    },
    {
      image: <VerifiedSellerSvg />,
      heading: "Verified sellers",
      count: totalVendor?.count,
      color: "rgba(212, 192, 236, 1)",
    },
    {
      image: <VerifiedProdSvg />,
      heading: "Verified products",
      count: totalProducts,
      color: "rgba(249, 227, 195, 1)",
    },
  ];


  const renderHeader = () => {
    return (
      <components.Header
        title="Universities"
        goBack={ true}
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
      <TouchableOpacity
        style={styles.uniCont}
         onPress={() => navigation.navigate(names.Shop, {
          
          //product: item,
          university:true,
          universityData:item,
          //  title: "All products",
        })}
      >
        <View>
          <components.ImageItem
            item={item}
            containerStyle={styles.uniImage}
            resizeMode="cover"
            borderRadius={8}
            indicatorBorderRadius={18}
            simpleImage={true}
            university={true}
          >
            
          </components.ImageItem>

          <Text style={styles.uniName}>{item.name}</Text>
          <Text style={styles.sellerNo}>
            {item?.vendor_count} <Text style={styles.sellerTxt}>seller</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderProductsList = () => {
    return (
      <View style={styles.contentContainer}>
        <Text
          style={styles.uniLength}
        >{`${university.length} universities`}</Text>
        <FlatList
          data={university}
          contentContainerStyle={{flexGrow: 1}}
          numColumns={2}
          columnWrapperStyle={styles.wrapperStyle}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => ProductListItem(item)}
        />
      </View>
    );
  };

  const imageBg = ()=>{
    return (
      <ImageBackground
        source={require("../../assets/uniBg.png")}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: 300,
          marginTop:theme.MARGINS.hy20,
         // zIndex:100 // Adjust the height as needed
    }}
      >
        <View
          style={{
            marginTop: 76,
            paddingHorizontal: theme.MARGINS.hy20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H2,
              textAlign: "center",
              alignSelf: "center",
              color:theme.COLORS.black,
              marginTop:theme.MARGINS.hy5
            }}
          >
            Trust of Qatar’s Universities students sellers{" "}
          </Text>

          <FlatList
            data={uniDetails}
            horizontal
            contentContainerStyle={{marginTop: theme.MARGINS.hy20}}
            scrollEnabled={false}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    marginHorizontal: theme.MARGINS.hy5,
           }}
                />
              );
            }}
            renderItem={({item}) => {
              return  (
                <View
                  style={{
                    height: "auto",
                    width: theme.SIZES.rsWidth / 4,
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                    alignItems: "center",
                    borderTopRightRadius: theme.SIZES.rsWidth / 2,
                    borderTopLeftRadius: theme.SIZES.rsWidth / 2,
                    backgroundColor: item.color,
                   // flex:1,
                    justifyContent:'space-around'
                  }}
                >
                  <View >
                  {item.image}
                  </View>
                  <View >
                  <Text style={{ marginTop:12,...theme.FONTS.H12,color:theme.COLORS.black}}>
                    {item.heading}
                  </Text>
</View>
                  <View >
                  <Text style={{marginTop:12, ...theme.FONTS.H2,color:theme.COLORS.black}}>
                    {item.count}
                  </Text>
                  </View>

                </View>
              );;
            }}
          />
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
      <View style={[styles.headerContainer,{zIndex: 1 }]}>{renderHeader()}</View>
      <ScrollView style={{flex: 1}}
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

export default UniversityScreen;
