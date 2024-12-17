import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgSend = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#141E0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 10H4.167m-.07.243L2.15 16.055c-.153.457-.23.685-.175.826.048.122.15.214.276.25.146.04.365-.059.804-.256l13.927-6.267c.428-.193.643-.29.709-.423a.416.416 0 0 0 0-.37c-.066-.134-.28-.23-.71-.423L3.053 3.123c-.438-.197-.657-.295-.802-.255a.417.417 0 0 0-.276.25c-.056.14.02.367.171.823l1.952 5.88c.026.079.039.118.044.158a.417.417 0 0 1 0 .107.878.878 0 0 1-.045.157Z"
    />
  </Svg>
)
export default SvgSend
