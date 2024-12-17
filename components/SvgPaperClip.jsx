import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgPaperClip = (props) => (
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
      d="m17.627 9.083-7.513 7.513a4.375 4.375 0 1 1-6.187-6.187l7.513-7.513a2.917 2.917 0 0 1 4.125 4.125l-7.219 7.218a1.458 1.458 0 0 1-2.062-2.063l6.334-6.334"
    />
  </Svg>
)
export default SvgPaperClip
