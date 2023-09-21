import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SchoolSvg(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="#140023">
        <Path d="M9.168 15h1.667v3.333H9.168V15z" />
        <Path d="M15.001 3.6l-5-2-5 2v3.066H1.668v11.667h5.833v-5h5v5h5.834V6.666H15V3.6zM5.835 15H4.168v-1.667h1.667V15zm0-3.334H4.168V10h1.667v1.666zm3.333 0H7.501V10h1.667v1.666zm0-6.666h1.667v3.333H9.168V5zm3.333 6.666h-1.666V10H12.5v1.666zM15.835 15h-1.667v-1.667h1.667V15zm0-5v1.666h-1.667V10h1.667z" />
      </G>
    </Svg>
  )
}

export default SchoolSvg
