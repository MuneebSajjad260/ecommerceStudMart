import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

function Up(props) {
    return (
      <Svg
        width={20}
        height={19}
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M14.374 11.466l-3.931-3.931-3.931 3.93"
          stroke="#140023"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  
  export default Up