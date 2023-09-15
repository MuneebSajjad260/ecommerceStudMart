import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BagTabSvg({currentScreen}) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <G
        clipPath="url(#clip0_2751_39244)"
        stroke={currentScreen === 'Order' ? '#00CACD' : "#200E32"}
        strokeOpacity={currentScreen === 'Order' ? 1 : 0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9 22.5a1 1 0 100-2 1 1 0 000 2zM20 22.5a1 1 0 100-2 1 1 0 000 2zM1 1.5h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6.5H6" />
      </G>
      <Defs>
        <ClipPath id="clip0_2751_39244">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BagTabSvg
