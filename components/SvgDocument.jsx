import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgDocument = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 10.417v-4.75c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093c-.535-.272-1.235-.272-2.635-.272H7.333c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093c-.273.534-.273 1.235-.273 2.635v8.666c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.093c.535.272 1.235.272 2.635.272h3.084m1.25-9.166h-5M8.333 12.5H6.667m6.666-6.667H6.667m5.833 10 2.5 2.5m0 0 2.5-2.5m-2.5 2.5v-5"
    />
  </Svg>
)
export default SvgDocument
