import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const EyeOnSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G
      // stroke="#140023"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M.917 11S4.583 3.667 11 3.667C17.416 3.667 21.083 11 21.083 11S17.417 18.333 11 18.333.917 11 .917 11Z" />
      <Path d="M11 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default EyeOnSvg
