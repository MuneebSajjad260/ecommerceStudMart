import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function User({stroke}) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <G
        clipPath="url(#clip0_2594_28979)"
        stroke={stroke}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.943 12.5a5 5 0 100-10 5 5 0 000 10zM3.365 16.874a8.752 8.752 0 0115.158 0" />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_28979">
          <Path fill="#fff" transform="translate(.943)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default User
