import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LockSvg(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.583 8.249V6.415a4.583 4.583 0 00-9.167 0V8.25a2.75 2.75 0 00-2.75 2.75v6.416a2.75 2.75 0 002.75 2.75h9.167a2.75 2.75 0 002.75-2.75V11a2.75 2.75 0 00-2.75-2.75zM8.249 6.415a2.75 2.75 0 015.5 0V8.25h-5.5V6.415zm8.25 11a.916.916 0 01-.916.917H6.416a.916.916 0 01-.917-.917V11a.917.917 0 01.917-.917h9.167a.917.917 0 01.916.917v6.416z"
        fill="#140023"
      />
    </Svg>
  )
}

export default LockSvg
