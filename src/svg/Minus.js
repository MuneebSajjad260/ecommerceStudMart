import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Minus(props) {
  return (
    <Svg
      width={14}
      height={2}
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.395 1.515a.696.696 0 01-.5-.192.631.631 0 01-.202-.476C.693.657.761.5.895.375a.704.704 0 01.5-.188h11.688c.198 0 .365.064.5.192a.631.631 0 01.201.476c0 .19-.067.347-.202.472a.704.704 0 01-.5.188H1.396z"
        fill="#140023"
      />
    </Svg>
  )
}

export default Minus
