import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { theme } from "../constants"

const OnboardOutlineSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={theme.SIZES.width}
    height={theme.SIZES.height}
    fill="none"
    {...props}
  >
    <Path
      stroke="#00CACD"
      strokeWidth={2}
      d="M-1 1h391v350c0 76.215-61.785 138-138 138H137C60.785 489-1 427.215-1 351V1Z"
    />
  </Svg>
)
export default OnboardOutlineSvg
