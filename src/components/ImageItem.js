import {ActivityIndicator, Image, ImageBackground, View} from "react-native";
import React, {useState} from "react";
import LinearGradient from "react-native-linear-gradient";
import {theme} from "../constants";

const ImageItem = ({
  item,
  containerStyle,
  children,
  resizeMode,
  borderRadius,
  indicatorBorderRadius,
  simpleImage,
  showThreeImages,
  university,
}) => {
  const [loading, setLoading] = useState(true);

  const onloading = (value) => {
    setLoading(value);
  };
  console.log("item----", item);
  return (
    <View style={{...containerStyle}}>
      {loading && (
        <ActivityIndicator
          size="small"
          color={theme.COLORS.lightGray}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EBF2FC',
            borderRadius: indicatorBorderRadius,
            // borderRadius: 16
          }}
        />
      )}
      {university ? (
        <ImageBackground
          key={Number(item?.id)}
          style={{height: '100%', width: '100%',justifyContent:'flex-end',alignItems:'center'}}
          source={{uri: item.banner_url}}
          onLoadStart={() => onloading(true)}
          onLoadEnd={() => onloading(false)}
          resizeMode={resizeMode}
          borderRadius={borderRadius}
        >
            {/* Add the LinearGradient */}
            <LinearGradient
            colors={["transparent", "rgba(255,255,255,1)"]} // Customize gradient colors and opacity as needed
            style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
          />
          <Image
            key={Number(item?.id)}
            style={{height: "50%", width: "50%",position:'absolute',bottom:-10}}
            source={{uri: item.logo_url}}
            onLoadStart={() => onloading(true)}
            onLoadEnd={() => onloading(false)}
            resizeMode={resizeMode}
            borderRadius={borderRadius}
          />
          </ImageBackground>
      ) : showThreeImages ? (
        <Image
          key={Number(item?.id)}
          style={{height: "100%", width: "100%"}}
          source={{uri: simpleImage ? item.src : item.src}}
          onLoadStart={() => onloading(true)}
          onLoadEnd={() => onloading(false)}
          resizeMode={resizeMode}
          borderRadius={borderRadius}
        />
      ) : (
        <Image
          key={Number(item?.id)}
          style={{height: "100%", width: "100%"}}
          source={{
            uri: simpleImage
              ? item?.image
              : item?.images?.length > 0
              ? item?.images[0]?.src
              : null,
          }}
          onLoadStart={() => onloading(true)}
          onLoadEnd={() => onloading(false)}
          resizeMode={resizeMode}
          borderRadius={borderRadius}
        />
      )}
      {children}
    </View>
  );
};

export default ImageItem;
