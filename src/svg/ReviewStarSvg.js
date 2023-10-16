import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ReviewStarSvg(props) {
  return (
    <Svg
    width={20} height={20} viewBox="0 0 24 24"
      fill='yellow'
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
          d="M12 2l2.367 7.384h7.633l-6.202 4.524 2.367 7.615-6.135-4.593-6.202 4.593 2.367-7.615-6.202-4.524h7.633z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default ReviewStarSvg
