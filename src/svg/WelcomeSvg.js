import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={357}
    fill="none"
    preserveAspectRatio="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M495.403 212.145S413.67 329.943 325.077 329.943c-88.593 0-135.83-44.297-206.391-44.297-70.561 0-103.882 70.561-164.838 70.561v-563.899h541.751v419.837h-.196Z"
        opacity={0.1}
      />
      <Path
        fill="url(#c)"
        d="M-46.152 238.846s81.733 80.712 170.326 80.712c88.593 0 135.83-44.296 206.391-44.296 70.561 0 103.881 70.561 164.838 70.561v-563.9H-46.152v456.923Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={138.463}
        x2={290.501}
        y1={356.538}
        y2={-1.731}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6919C7" />
        <Stop offset={1} stopColor="#450096" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={733.848}
        x2={12.694}
        y1={570.577}
        y2={3.461}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#AE80F5" />
        <Stop offset={1} stopColor="#6919C7" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h450v356.538H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)



// import React from 'react';
// import { View } from 'react-native';
// import { Svg, Path } from 'react-native-svg';

// const SvgComponent = () => {
//   return (
//     <View>
//       <Svg
//         width="450"
//         height="300"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//         fill="red"
//       >
//         <Path
//           d="M0,0 L0,80 C20,100 40,100 60,80 C80,60 100,60 120,80 L120,0 Z"
//           fill="#f11221" // Replace with your desired color
//         />
//       </Svg>
//     </View>
//   );
// };
export default SvgComponent
