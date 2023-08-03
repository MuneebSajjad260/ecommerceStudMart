import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowLeftSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M22.5 12.5h-14M12.5 5.5l-7 7 8 8"
    />
  </Svg>
)
export default ArrowLeftSvg
