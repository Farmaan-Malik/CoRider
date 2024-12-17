import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const SvgReport = (props) => (
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
      d="m7.917 6.667 4.166 4.166m0-4.166-4.166 4.166M5.833 15v1.946c0 .444 0 .666.091.78.08.1.2.157.326.157.146 0 .32-.139.666-.416l1.988-1.59c.406-.325.61-.488.836-.603a2.5 2.5 0 0 1 .634-.223c.25-.051.51-.051 1.03-.051H13.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C17.5 13.1 17.5 12.4 17.5 11V6.5c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v5.167c0 .775 0 1.162.085 1.48a2.5 2.5 0 0 0 1.768 1.768c.318.085.705.085 1.48.085Z"
    />
  </Svg>
)
export default SvgReport