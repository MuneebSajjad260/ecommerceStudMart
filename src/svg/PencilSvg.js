import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PencilSvg(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.887 1a.833.833 0 00-1.178 0L9.53 2.179l3.535 3.535 1.178-1.178a.833.833 0 000-1.179L11.887 1zm0 5.893L8.351 3.357.935 10.774a.833.833 0 00-.244.588v2.358a.833.833 0 00.834.833H3.88a.834.834 0 00.59-.244l7.416-7.417v.001z"
        fill="#140023"
      />
    </Svg>
  )
}

export default PencilSvg
