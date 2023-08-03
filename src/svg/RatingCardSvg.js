import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function RatingCardSvg(props) {
  return (
    <Svg
      width={48}
      height={47}
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={23.0327} cy={22.7202} r={16.185} fill="#140023" />
      <Circle cx={5.29149} cy={2.80125} r={2.80125} fill="#140023" />
      <Circle cx={27.0795} cy={1.55609} r={0.622501} fill="#140023" />
      <Circle cx={43.2631} cy={28.3237} r={0.622501} fill="#140023" />
      <Circle cx={42.019} cy={41.0854} r={0.622501} fill="#140023" />
      <Circle cx={16.1857} cy={45.131} r={0.933752} fill="#140023" />
      <Circle cx={2.80039} cy={34.2379} r={1.55625} fill="#140023" />
      <Circle cx={31.1257} cy={43.5749} r={0.311251} fill="#140023" />
      <Circle cx={0.311251} cy={19.2976} r={0.311251} fill="#140023" />
      <Circle cx={45.4424} cy={7.15922} r={2.17875} fill="#140023" />
      <Path
        d="M22.51 15.185c.344-.816 1.5-.816 1.843 0l1.379 3.27a1 1 0 00.837.607l3.535.301c.882.075 1.239 1.174.57 1.753l-2.684 2.322a1 1 0 00-.32.983l.807 3.456c.2.861-.734 1.54-1.49 1.083l-3.038-1.835a1 1 0 00-1.034 0l-3.038 1.835c-.757.457-1.692-.222-1.49-1.083l.805-3.456a1 1 0 00-.319-.983l-2.683-2.322c-.67-.58-.313-1.678.569-1.753l3.536-.301a1 1 0 00.836-.608l1.38-3.27z"
        fill="#FAB247"
      />
    </Svg>
  )
}

export default RatingCardSvg
