import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CreditCard(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_2594_43743)"
        stroke="#00CACD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15.75 3H2.25a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5zM.75 7.5h16.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_43743">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CreditCard
