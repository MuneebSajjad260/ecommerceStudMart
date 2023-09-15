import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function ProfileTabSvg({currentScreen}) {
  return (
    <Svg
      width={21}
      height={25}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <G
        stroke={currentScreen === 'Profile' ? '#00CACD' : "#200E32"}
        strokeWidth={2}
        strokeOpacity={currentScreen === 'Profile' ? 1 : 0.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Circle cx={10.508} cy={6.99234} r={5.57437} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.666 20.32a2.584 2.584 0 01.256-1.133c.534-1.067 2.04-1.633 3.29-1.89.9-.192 1.814-.32 2.733-.384 1.702-.15 3.414-.15 5.115 0 .92.064 1.833.193 2.734.384 1.25.257 2.755.77 3.29 1.89.341.72.341 1.555 0 2.275-.535 1.121-2.04 1.634-3.29 1.88-.9.2-1.814.332-2.734.395a30.137 30.137 0 01-4.164.064c-.32 0-.63 0-.95-.064a17.995 17.995 0 01-2.724-.395c-1.26-.246-2.755-.759-3.3-1.88a2.66 2.66 0 01-.256-1.142z"
        />
      </G>
    </Svg>
  )
}

export default ProfileTabSvg
