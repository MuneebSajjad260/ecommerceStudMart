import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Package(props) {
  return (
    <Svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#00CACD"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#clip0_2594_34988)"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.701 1.797l5.819 2.92a1.457 1.457 0 01.807 1.308v6.958a1.464 1.464 0 01-.807 1.307L8.7 17.21a1.449 1.449 0 01-1.302 0l-5.818-2.92a1.457 1.457 0 01-.8-1.314V6.025a1.465 1.465 0 01.808-1.307l5.818-2.92a1.45 1.45 0 011.294 0z"
        />
        <Path d="M1.014 5.236l7.04 3.534m0 0l7.04-3.534M8.054 8.77v8.587M4.417 3.294l7.273 3.65" />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_34988">
          <Path
            fill="#fff"
            transform="translate(.055 .738)"
            d="M0 0H16V17.5238H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Package
