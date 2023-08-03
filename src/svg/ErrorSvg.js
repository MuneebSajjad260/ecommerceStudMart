import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ErrorSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={138}
    height={138}
    fill="none"
    {...props}
  >
    <Path
      fill="#E03249"
      fillOpacity={0.2}
      d="M69 129.375c33.344 0 60.375-27.031 60.375-60.375S102.344 8.625 69 8.625 8.625 35.655 8.625 69c0 33.344 27.03 60.375 60.375 60.375Z"
    />
    <Path
      fill="#E85869"
      d="M69 86.25a4.312 4.312 0 0 1-4.313-4.313V38.813a4.313 4.313 0 0 1 8.626 0v43.124A4.312 4.312 0 0 1 69 86.25ZM69 103.5a4.313 4.313 0 1 0 0-8.625 4.313 4.313 0 0 0 0 8.625Z"
    />
  </Svg>
)
export default ErrorSvg
