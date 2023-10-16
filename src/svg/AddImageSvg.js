import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function AddImageSvg(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#00CACD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15.042 2.875H3.958c-.874 0-1.583.709-1.583 1.583v11.084c0 .874.709 1.583 1.583 1.583h11.084c.874 0 1.583-.709 1.583-1.583V4.458c0-.874-.709-1.583-1.583-1.583z" />
        <Path d="M6.729 8.416a1.188 1.188 0 100-2.375 1.188 1.188 0 000 2.375zM16.626 12.374l-3.959-3.958-8.708 8.708" />
      </G>
    </Svg>
  )
}

export default AddImageSvg
