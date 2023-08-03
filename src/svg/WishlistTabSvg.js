import * as React from "react";
import Svg, {Circle, Path} from "react-native-svg";

const WishlistTabSvg = ({currentScreen}) => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx={20}
      cy={20}
      r={20}
      fill={currentScreen === "Wishlist" ? "#DBE3F5" : "#fff"}
    />
    <Path
      d="M28.84 12.61a5.5 5.5 0 0 0-7.78 0L20 13.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L20 29.23l7.78-7.78 1.06-1.06a5.501 5.501 0 0 0 0-7.78v0Z"
      stroke={currentScreen === "Wishlist" ? "#111" : "#626262"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WishlistTabSvg;
