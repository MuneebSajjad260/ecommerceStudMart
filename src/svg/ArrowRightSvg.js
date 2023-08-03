import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowRightSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 12.5h14M15 5.5l7 7-7 7"
    />
  </Svg>
)
export default ArrowRightSvg
