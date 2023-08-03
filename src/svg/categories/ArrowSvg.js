import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#6919C7"
      fillRule="evenodd"
      d="M0 5a.5.5 0 0 1 .5-.5h11.793L9.146 1.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L12.293 5.5H.5A.5.5 0 0 1 0 5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowSvg
