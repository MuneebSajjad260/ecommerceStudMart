import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ForgotLockSvg(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
          <Path
      fill="#fff"
      fillOpacity={0.3}
      d="M43.099 28.673c2.623-10.59-3.836-21.301-14.426-23.924C18.083 2.126 7.372 8.585 4.749 19.175 2.126 29.765 8.585 40.476 19.175 43.1c10.59 2.623 21.301-3.836 23.924-14.426Z"
    />


      <Path
        d="M9.999 10.833a.834.834 0 00-.834.833v2.5a.833.833 0 001.667 0v-2.5a.834.834 0 00-.833-.833zM14.165 7.5V5.833a4.167 4.167 0 00-8.333 0V7.5a2.5 2.5 0 00-2.5 2.5v5.833a2.5 2.5 0 002.5 2.5h8.333a2.5 2.5 0 002.5-2.5V10a2.5 2.5 0 00-2.5-2.5zM7.5 5.833a2.5 2.5 0 115 0V7.5h-5V5.833zm7.5 10a.833.833 0 01-.834.833H5.832a.833.833 0 01-.833-.833V10a.833.833 0 01.833-.834h8.333A.833.833 0 0115 10v5.833z"
        fill="#fff"
      />
     
    </Svg>
  )
}

export default ForgotLockSvg
