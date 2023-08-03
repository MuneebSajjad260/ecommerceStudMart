import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Clock(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.934 2.54c-5.221 0-9.45 4.237-9.45 9.459 0 5.221 4.229 9.459 9.45 9.459 5.232 0 9.47-4.238 9.47-9.46 0-5.221-4.238-9.459-9.47-9.459zm3.794 13.242a.94.94 0 01-1.334 0l-3.112-3.112a.945.945 0 01-.284-.671V8.215c0-.52.426-.946.946-.946s.946.425.946.946v3.396l2.838 2.837a.942.942 0 010 1.334z"
        fill="#00CACD"
      />
    </Svg>
  )
}

export default Clock
