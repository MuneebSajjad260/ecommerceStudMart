import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function BrandSvg(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={16} cy={16} r={16} fill="#fff" fillOpacity={0.1} />
      <Path
        d="M15.81 8.38l-.272.136-6.19 3.037-.348.174v1.065h13.619v-1.065l-.349-.174-6.19-3.037-.27-.135zm0 1.394l3.636 1.78h-7.274l3.637-1.78zm-5.572 3.637v6.19h-.619v1.238h12.38v-1.238h-.618v-6.19h-1.238v6.19h-1.238v-6.19h-1.238v6.19h-1.239v-6.19H15.19v6.19h-1.238v-6.19h-1.238v6.19h-1.238v-6.19h-1.238zm-1.857 8.047v1.238h14.857v-1.238H8.381z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BrandSvg
