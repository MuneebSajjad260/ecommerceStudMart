import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Tick(props) {
  return (
    <Svg
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2594_28975)">
        <Path
          d="M12.756 3.938L6.63 10.061 3.568 7"
          stroke="#00CACD"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_28975">
          <Path fill="#fff" transform="translate(.943)" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Tick
