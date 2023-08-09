import {ActivityIndicator, Image, View} from "react-native";
import React, {useState} from "react";

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
      {showThreeImages ? (
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
