import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function ProfileUpdateSvg(props) {
  return (
    <Svg
      width={153}
      height={148}
      viewBox="0 0 153 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={74} cy={73} r={52} fill="url(#paint0_radial_2594_44616)" />
      <Path
        d="M65.892 83.103a2 2 0 01-2.828 0l-9.568-9.569a2 2 0 00-2.824-.005l-1.38 1.371a2 2 0 00-.006 2.834L63.063 91.51a2 2 0 002.829 0L98.72 58.682a2 2 0 000-2.828l-1.362-1.362a2 2 0 00-2.827-.001L65.89 83.103z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
      />
      <Circle cx={17} cy={9} r={9} fill="#32CB94" />
      <Circle cx={87} cy={5} r={2} fill="#32CB94" />
      <Circle cx={139} cy={91} r={2} fill="#32CB94" />
      <Circle cx={135} cy={132} r={2} fill="#32CB94" />
      <Circle cx={52} cy={145} r={3} fill="#32CB94" />
      <Circle cx={9} cy={110} r={5} fill="#32CB94" />
      <Circle cx={100} cy={140} r={1} fill="#32CB94" />
      <Circle cx={1} cy={62} r={1} fill="#32CB94" />
      <Circle cx={146} cy={23} r={7} fill="#32CB94" />
      <Defs>
        <RadialGradient
          id="paint0_radial_2594_44616"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 52 -52 0 74 73)"
        >
          <Stop stopColor="#32CB94" />
          <Stop offset={1} stopColor="#1AC688" />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export default ProfileUpdateSvg
