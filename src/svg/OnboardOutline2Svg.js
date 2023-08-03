import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { theme } from "../constants"
const OnboardOutline2Svg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={theme.SIZES.width}
    height={500}
    fill="none"
    viewBox="40 0 270 500"
    {...props}
  >
    <Path
      stroke="#00CACD"
      strokeWidth={2}
      d="M1 1h388v360c0 76.215-61.785 138-138 138H139C62.785 499 1 437.215 1 361V1Z"
    />
  </Svg>
)
export default OnboardOutline2Svg
