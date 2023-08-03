import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function AccessoriesSvg(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.118 20.77h.15V11.66H19.755v9.109h5.363zM6.079 7.975h-.15V19.508h8.83a1.382 1.382 0 010 2.764H3.527a1.382 1.382 0 010-2.764h.66V8.125c0-1.041.853-1.893 1.893-1.893H23.44a.871.871 0 110 1.743H6.08zm13.276 2.342h6.128c.479 0 .871.392.871.871v10.213a.874.874 0 01-.871.871h-6.128a.874.874 0 01-.87-.871V11.188c0-.479.392-.871.87-.871z"
        fill="#3A3640"
        stroke="url(#paint0_linear_2666_72854)"
        strokeWidth={0.3}
      />
      <Circle cx={22.5482} cy={21.4671} r={0.462249} fill="#fff" />
      <Defs>
        <LinearGradient
          id="paint0_linear_2666_72854"
          x1={26.5043}
          y1={14.7674}
          x2={4.29461}
          y2={14.7674}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.251275} stopColor="#FCEAED" />
          <Stop offset={1} stopColor="#FAFBFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default AccessoriesSvg
