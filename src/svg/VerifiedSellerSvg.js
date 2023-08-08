import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function VerifiedSellerSvg(props) {
  return (
    <Svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={21} cy={21} r={21} fill="#140023" />
      <Path
        d="M22.5 29.667l-1.003-1.004a3.496 3.496 0 01.023-4.97l.98-.956c-.455-.047-.793-.07-1.167-.07-3.115 0-9.333 1.563-9.333 4.666v2.334h10.5zm-1.167-9.334A4.665 4.665 0 0026 15.667 4.665 4.665 0 0021.333 11a4.665 4.665 0 00-4.666 4.667 4.665 4.665 0 004.666 4.666zm6.044 9.077a1.176 1.176 0 01-1.657 0l-2.415-2.438a1.155 1.155 0 010-1.622l.012-.012a1.148 1.148 0 011.633 0l1.598 1.599 5.169-5.204a1.162 1.162 0 011.645 0l.011.012a1.155 1.155 0 010 1.622l-5.996 6.043z"
        fill="#fff"
      />
    </Svg>
  )
}

export default VerifiedSellerSvg
