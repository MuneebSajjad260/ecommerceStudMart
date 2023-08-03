import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Info(props) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_2594_28661)"
        stroke="#8B96A5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M8.944 14.666a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM8.943 10.667V8M8.943 5.333h.007" />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_28661">
          <Path fill="#fff" transform="translate(.943)" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Info
