import { ActivityIndicator, Image, View } from "react-native";
import React, { useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { theme } from "../constants";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CustomShimmerPlaceHolder = ({
  containerStyle,
  children,
  visible,
  width,
  height,
  shimmerStyle,
  borderRadius,
  shimmerColors,
  innerView
}) => {


  const [loading, setLoading] = useState(true);

  const onloading = (value) => {
    setLoading(value);
  };

  return (
    <SkeletonPlaceholder direction="right" speed={800} enabled={visible}>
      {children}
    </SkeletonPlaceholder>
  );
};

export default CustomShimmerPlaceHolder;
