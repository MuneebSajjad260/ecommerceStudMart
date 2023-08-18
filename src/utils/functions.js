import React from "react";
import { StatusBar, Alert, useColorScheme, View, Text, Dimensions, TouchableOpacity, FlatList, Image } from "react-native";
import { showMessage } from "react-native-flash-message";
import { svg } from "../svg";
import { names, theme } from "../constants";
import { components } from "../components";
import CustomShimmerPlaceHolder from "../components/CustomShimmerPlaceHolder";
import SignupSvg from "../svg/SignupSvg";
import MailSvg from "../svg/MailSvg";


const screenWidth = Dimensions.get('screen').width

const cartIsEmpty = () => {
  return Alert.alert("Message", "Your cart is empty, add something to cart.", [
    {
      text: "OK",
    },
  ]);
};

/** For All screens with dark background */
const renderStatusBarLight = () => {
  const theme = useColorScheme()

  return (
    <StatusBar
      barStyle={'light-content'}
      translucent={true}
      backgroundColor="transparent"
    />
  );
};

const renderStatusBar = () => {
  const theme = useColorScheme()

  return (
    <StatusBar
      barStyle={theme == 'dark' ? 'light-content' : "dark-content"}
      translucent={true}
    />
  );
};

const renderHeaderAuth = (title, subtitle, icon) => {
  return <View style={{ alignSelf: "center" }}>
    <svg.WelcomeSvg width={screenWidth} />
    <View style={{ position: "absolute", bottom: theme.MARGINS.hyMax, left: theme.MARGINS.maX_xxxs }}>
      {icon == "signup" &&
        <SignupSvg />
      }
      {icon == "mail" &&
        <MailSvg />
      }
      <Text style={{ ...theme.FONTS.H36, color: theme.COLORS.whiteOnly }}>{title}</Text>
      <Text style={{ ...theme.FONTS.H5, fontWeight: "700", color: theme.COLORS.whiteOnly, bottom: -5 }}>{subtitle}</Text>
    </View>
  </View>;
};

const NegotiableTag = () => {
  return (
    <View
      style={{
        // padding: 8,
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: theme.COLORS.appColor,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
    >
      <Text style={{ fontSize: 10, padding: 7, color: theme.COLORS.whiteOnly, fontWeight: '500' }}>Negotiable</Text>
    </View>
  );
}

const renderProducts = (data, navigation, isPending, viewLeft, viewRight) => {
  data = data?.filter(item => item.status === 'publish');
  // console.log("----item status------", data)
  return (
    <View style={{ marginBottom: 40 }}>

      <components.ProductCategory
        title={viewLeft.title}
        containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
        onPress={() =>
          navigation.navigate(names.Shop, {
            title: "All products",
            products: data,
            // product: data,
          })
        }
        visibleRight={viewRight?.hide}
      />

      <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' }}>
        <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center' }}></View>
      </CustomShimmerPlaceHolder>

      {!isPending && <FlatList
        data={data?.slice(0, 4)}
        horizontal={true}
        // numColumns={2}    
        key={(Math.random() * 1000).toString()}
        // scrollEnabled={false}              // set number of columns 
        // columnWrapperStyle={styles.row}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 13 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, width: 171, margin: 6, borderWidth: 1, borderColor: "rgba(20, 0, 35, 0.1)", padding: 8, borderRadius: 15 }}
            onPress={() =>
              navigation.navigate(names.Product, {
                product: item,
              })
            }
          >
            <View>
              <components.ImageItem
                item={item}
                containerStyle={{
                  width: "100%",
                  height: 150,
                  marginBottom: 6,
                  backgroundColor: theme.COLORS.lightBlue2,
                  borderRadius: 8
                }}
                resizeMode="cover"
                borderRadius={8}
                indicatorBorderRadius={18}
              >
                {item.is_sale === true && <components.Sale />}
                <components.Favorite item={item} />
                <NegotiableTag />
                {/* <components.InCart item={item} /> */}
              </components.ImageItem>
              {/* <components.Rating item={item} /> */}
              <components.ProductName item={item} style={{ fontWeight: '500' }} />
              <components.Price item={item} textStyle={{ color: theme.COLORS.appColor, fontWeight: '400' }} />
              <View style={{ height: 1, width: "90%", backgroundColor: "rgba(0, 0, 0, 0.05)", paddingHorizontal: 30, alignSelf: "center", marginTop: 15, marginBottom: 6 }} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* TODO - Image & Store Name */}
                {/* <View> */}
                <ProfileImage />
                {/* </View> */}
                {/* <View> */}
                <Text style={{ ...theme.FONTS.H12, color: theme.COLORS.black, marginLeft: 20, width: 100 }}> {item?.vendor_detail?.vendor_name}</Text>
                {/* </View> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />}

    </View>
  );
};



const renderUniversities = (data, navigation, isPending, viewLeft, viewRight) => {
  data = data?.filter(item => item.status === 'publish');
  //  console.log("----item status------", data)
  return (
    <View style={{ marginBottom: 40 }}>

      <components.ProductCategory
        title={viewLeft.title}
        containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
        onPress={() =>
          navigation.navigate(names.Shop, {
            title: "All products",
            products: data,
            // product: data,
          })
        }
        visibleRight={viewRight?.hide}
      />

      <CustomShimmerPlaceHolder visible={isPending} borderRadius={10} style={{ width: "90%", height: 160, borderRadius: 10, alignSelf: 'center' }}>
        <View style={{ width: "90%", height: isPending ? 160 : 0, borderRadius: 10, alignSelf: 'center' }}></View>
      </CustomShimmerPlaceHolder>

      {!isPending && <FlatList
        data={data?.slice(0, 4)}
        horizontal={true}
        // numColumns={2}    
        key={(Math.random() * 1000).toString()}
        // scrollEnabled={false}              // set number of columns 
        // columnWrapperStyle={styles.row}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 13 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, width: 171, margin: 6, borderWidth: 1, borderColor: "rgba(20, 0, 35, 0.1)", padding: 8, borderRadius: 15 }}
            onPress={() =>
              navigation.navigate(names.Product, {
                product: item,
              })
            }
          >
            <View>
              <components.ImageItem
                item={item}
                containerStyle={{
                  width: "100%",
                  height: 150,
                  marginBottom: 6,
                  backgroundColor: theme.COLORS.lightBlue2,
                  borderRadius: 8
                }}
                resizeMode="cover"
                borderRadius={8}
                indicatorBorderRadius={18}
              >
                {item.is_sale === true && <components.Sale />}
                <components.Favorite item={item} />
                <NegotiableTag />
                {/* <components.InCart item={item} /> */}
              </components.ImageItem>
              {/* <components.Rating item={item} /> */}
              <components.ProductName item={item} style={{ fontWeight: '500' }} />
              <components.Price item={item} textStyle={{ color: theme.COLORS.appColor, fontWeight: '400' }} />
              <View style={{ height: 1, width: "90%", backgroundColor: "rgba(0, 0, 0, 0.05)", paddingHorizontal: 30, alignSelf: "center", marginTop: 15, marginBottom: 6 }} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* TODO - Image & Store Name */}
                {/* <View> */}
                <ProfileImage />
                {/* </View> */}
                {/* <View> */}
                <components.ProductName item={item} style={{ fontWeight: '400', fontSize: 11, marginLeft: 20, width: 100 }} />
                {/* </View> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />}

    </View>
  );
};

const ProductListItem = (item, navigation) => {
  console.log("-----ProductItem-----", item)
  return (
    <TouchableOpacity
      style={{ flex: 1, width: theme.SIZES.width, margin: 6, borderWidth: 1, borderColor: "rgba(20, 0, 35, 0.1)", padding: 8, borderRadius: 15 }}

      // style={{
      //   width: theme.SIZES.width * 0.43,
      //   marginBottom: 20,
      // }}
      onPress={() => navigation.navigate(names.Product, { product: item })}
    >
      <View>
        <components.ImageItem
          item={item}
          containerStyle={{
            width: "100%",
            height: 150,
            marginBottom: 6,
            backgroundColor: theme.COLORS.lightBlue2,
            borderRadius: 8
          }}
          resizeMode="cover"
          borderRadius={8}
          indicatorBorderRadius={18}
        >
          {item.is_sale === true && <components.Sale />}
          <components.Favorite item={item} />
          {/* <components.InCart item={item} /> */}
        </components.ImageItem>
        {/* <components.Rating item={item} /> */}
        <components.ProductName item={item} style={{ fontWeight: '500' }} />
        <components.Price item={item} textStyle={{ color: theme.COLORS.appColor, fontWeight: '400' }} />

        <View style={{ height: 1, width: "90%", backgroundColor: "rgba(0, 0, 0, 0.05)", paddingHorizontal: 30, alignSelf: "center", marginTop: 15, marginBottom: 6 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* TODO - Image & Store Name */}
          {/* <View> */}
          <ProfileImage />
          {/* </View> */}
          {/* <View> */}
          <components.ProductName item={item} style={{ fontWeight: '400', fontSize: 11, marginHorizontal: 20 }} />
          {/* </View> */}

        </View>
      </View>
    </TouchableOpacity>
  )
}

const ProfileImage = () => {
  return (
    <View
      style={{ width: 16, height: 16, marginBottom: 20 }}
    // onPress={() => navigation.navigate(names.EditProfile)}
    >
      {/* {isPending && (
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
              borderRadius: 126 / 2,
            }}
          />
        )} */}
      <Image
        source={{
          uri: "https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 63,
          borderWidth: 1,
          borderColor: theme.COLORS.lightBlue1,
        }}
      // onLoadStart={() => setAvatarLoading(true)}
      // onLoadEnd={() => setAvatarLoading(false)}
      />
      {/* <View style={{position: "absolute", right: 6, bottom: 6}}>
          <svg.ProfileEditSvg />
        </View> */}
    </View>
  )
}

const removeFromWishlistHandler = (onPress) => {
  return Alert.alert(
    "Alert!",
    "Are you sure you want to delete from wishlist ?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: onPress,
      },
    ],
  );
};

const productExistMessage = () => {
  return Alert.alert(
    "Alert!",
    "The product already exists in the cart, please remove the product from the cart",
    [
      {
        text: "Ok",
      },
    ],
  );
};

const addedToCartMessage = (item) => {
  showMessage({
    message: "Success",
    description: `${item.name} added to cart`,
    type: "success",
  });
};

const promocodeWasCopiedMessage = (item) => {
  showMessage({
    message: "Success",
    description: `${item.name} promocode was copied to clipboard`,
    type: "success",
  });
};

const productWasAddedMessage = (cartItem) => {
  showMessage({
    message: "Success",
    description: `${cartItem.name} added to cart`,
    type: "success",
  });
};

const flashMessage = (title, message) => {
  showMessage({
    message: title,
    description: message,
    type: "success",
  });
};

export {
  cartIsEmpty,
  renderStatusBar,
  renderStatusBarLight,
  removeFromWishlistHandler,
  productExistMessage,
  addedToCartMessage,
  promocodeWasCopiedMessage,
  productWasAddedMessage,
  renderHeaderAuth,
  renderProducts,
  ProductListItem,
  flashMessage,
};
