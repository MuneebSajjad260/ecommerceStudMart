import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeTabSvg({currentScreen}) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  
    >
      <Path
        d="M8.683 22.732v-3.578c0-.91.742-1.65 1.66-1.655h3.368c.924 0 1.672.74 1.672 1.655v3.59a1.43 1.43 0 001.403 1.421h2.245c2.238 0 4.052-1.796 4.052-4.01v0V9.975a2.846 2.846 0 00-1.123-2.222l-7.677-6.122a3.71 3.71 0 00-4.601 0L2.038 7.765c-.7.53-1.113 1.35-1.122 2.222v10.167c0 2.215 1.814 4.011 4.052 4.011h2.244c.8 0 1.448-.641 1.448-1.433v0"
        stroke={currentScreen === 'Home' ? '#00CACD' : "#200E32"}
        strokeOpacity={ currentScreen === 'Home' ? 1 : 0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeTabSvg
