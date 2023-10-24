import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CheckoutSvg(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#00CACD"
        clipPath="url(#clip0_2594_35235)"
      >
        <Path d="M10.4 6.666c0 1.344-1.056 2.4-2.4 2.4a2.377 2.377 0 01-2.4-2.4.6.6 0 00-1.2 0c0 2.016 1.584 3.6 3.6 3.6s3.6-1.584 3.6-3.6a.6.6 0 00-1.2 0z" />
        <Path d="M2.6 4.6v8.733a.734.734 0 00.734.734H8a.6.6 0 110 1.2H3.334A1.93 1.93 0 011.4 13.334V4a.6.6 0 01.6-.6h12a.6.6 0 01.6.6v4.333a.6.6 0 01-1.2 0V4.6H2.6z" />
        <Path d="M14.537 3.733l-.965-1.93A1.933 1.933 0 0011.843.734H4.158c-.732 0-1.402.414-1.73 1.069l-.964 1.93a.6.6 0 001.073.536l.965-1.93a.734.734 0 01.656-.405h7.685c.278 0 .531.158.656.406l.965 1.93a.6.6 0 001.073-.537zM10.666 13.266h4a.599.599 0 100-1.2h-4a.599.599 0 100 1.2z" />
        <Path d="M13.819 12.666l-1.575-1.573a.601.601 0 11.848-.853l2 2c.234.24.234.62 0 .853l-2 2a.601.601 0 11-.848-.854l1.575-1.573z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2594_35235">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CheckoutSvg
