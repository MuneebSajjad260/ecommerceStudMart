import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MailSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.3}
      d="M39.099 24.673C41.722 14.083 35.263 3.372 24.673.749 14.083-1.874 3.372 4.585.749 15.175-1.874 25.765 4.585 36.476 15.175 39.1c10.59 2.623 21.301-3.836 23.924-14.426Z"
    />
  </Svg>
)
export default MailSvg
