import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function DiscountSvg(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={15.8142}
        cy={16.1171}
        r={14}
        transform="rotate(5.508 15.814 16.117)"
        fill="#140023"
      />
      <Path
        d="M21.396 11.719L10.76 20.437M12.483 13.627a1.736 1.736 0 10.343-3.456 1.736 1.736 0 00-.343 3.456zM19.333 21.985a1.736 1.736 0 10.342-3.456 1.736 1.736 0 00-.342 3.456z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DiscountSvg
