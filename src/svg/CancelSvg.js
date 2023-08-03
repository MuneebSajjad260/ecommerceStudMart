import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Cancel(props) {
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
        d="M11.18 10.003l3.583-3.575a.837.837 0 00-1.183-1.183l-3.575 3.583L6.43 5.245a.837.837 0 10-1.183 1.183l3.583 3.575-3.583 3.575a.833.833 0 000 1.184.835.835 0 001.183 0l3.575-3.584 3.575 3.584a.836.836 0 101.183-1.184l-3.583-3.575z"
        fill="#140023"
        fillOpacity={0.3}
      />
    </Svg>
  )
}

export default Cancel
