import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#00CACD"
      d="M9 0 0 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4L9 0Zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V5.3l7-3.11 7 3.11V10Zm-11.59.59L3 12l4 4 8-8-1.41-1.42L7 13.17l-2.59-2.58Z"
    />
  </Svg>
)
export default SvgComponent
