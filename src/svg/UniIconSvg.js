import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function UniIconSvg(props) {
  return (
    <Svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={21} cy={21} r={21} fill="#140023" />
      <Path
        d="M20.75 11l-.356.178-8.124 3.986-.457.228v1.397h17.874v-1.397l-.457-.228-8.125-3.986L20.75 11zm0 1.828l4.773 2.336h-9.546l4.773-2.336zm-7.313 4.774v8.125h-.812v1.625h16.25v-1.625h-.813v-8.125h-1.625v8.125h-1.625v-8.125h-1.625v8.125h-1.625v-8.125h-1.625v8.125h-1.625v-8.125h-1.625v8.125h-1.625v-8.125h-1.624zM11 28.164v1.625h19.5v-1.625H11z"
        fill="#fff"
      />
    </Svg>
  )
}

export default UniIconSvg
