import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Logout(props) {
  return (
    <Svg
      width={162}
      height={162}
      viewBox="0 0 162 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M101.25 27a6.737 6.737 0 00-2.47-5.218 6.768 6.768 0 00-5.603-1.404l-67.5 13.5A6.751 6.751 0 0020.25 40.5v81a6.75 6.75 0 005.427 6.622l67.5 13.5a6.764 6.764 0 005.602-1.404A6.736 6.736 0 00101.25 135V27z"
          fill="url(#paint0_linear_2594_44639)"
        />
        <Path
          d="M101.25 94.5V81H54a6.752 6.752 0 00-6.75 6.75A6.752 6.752 0 0054 94.5h47.25z"
          fill="#00ACC1"
        />
        <Path
          d="M118.706 74.25H54A6.752 6.752 0 0047.25 81 6.752 6.752 0 0054 87.75h64.706l-1.978 1.978a6.754 6.754 0 000 9.545 6.755 6.755 0 009.544 0l13.5-13.5a6.741 6.741 0 000-9.545l-13.5-13.5a6.754 6.754 0 00-9.544 0 6.754 6.754 0 000 9.545l1.978 1.978z"
          fill="#6919C7"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2594_44639"
          x1={44.1855}
          y1={110.464}
          x2={94.5068}
          y2={25.1575}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1CF4F8" />
          <Stop offset={1} stopColor="#00CACD" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Logout
