import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Heart1Svg(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.367 3.841a4.583 4.583 0 00-6.483 0L10 4.725l-.883-.884a4.584 4.584 0 10-6.483 6.484l.883.883L10 17.69l6.484-6.483.883-.883a4.585 4.585 0 000-6.484z"
        stroke="#140023"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Heart1Svg
