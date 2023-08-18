import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CrossSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill}
      d="m7.909 6 4.295-4.287a1.003 1.003 0 0 0-1.418-1.42L6.5 4.59 2.214.294A1.003 1.003 0 1 0 .796 1.713L5.09 5.999.796 10.286a1 1 0 0 0 0 1.418 1 1 0 0 0 1.418 0L6.5 7.408l4.286 4.296a.998.998 0 0 0 1.418 0 1 1 0 0 0 0-1.418L7.91 5.999Z"
    />
  </Svg>
)
export default CrossSvg
