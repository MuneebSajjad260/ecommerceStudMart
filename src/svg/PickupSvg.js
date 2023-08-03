import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PickupSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M2.291 5.604a.4.4 0 1 1 0-.8h1.694a.4.4 0 1 0 0-.798H1.727a.4.4 0 0 1 0-.799H4.86a.4.4 0 1 0 0-.799h-3.65a.4.4 0 0 1 0-.799h1.405c0-.282.12-.553.33-.753.212-.2.499-.312.798-.312h5.766a1 1 0 0 1 1 1v1.13h.726a2 2 0 0 1 1.566.757l.874 1.1a1 1 0 0 1 .217.623v1.314a1 1 0 0 1-1 1h-.127c0 .424-.179.83-.496 1.13-.317.3-.747.468-1.196.468-.448 0-.879-.169-1.196-.468a1.554 1.554 0 0 1-.495-1.13H7.125c0 .424-.178.83-.495 1.13-.317.3-.748.468-1.196.468-.449 0-.88-.169-1.196-.468a1.554 1.554 0 0 1-.496-1.13h-.128a1 1 0 0 1-1-1v-.864h-.323Zm8.781 2.663c.224 0 .44-.084.598-.234a.777.777 0 0 0 .248-.565.777.777 0 0 0-.248-.565.871.871 0 0 0-.598-.234.872.872 0 0 0-.598.234.777.777 0 0 0-.248.565c0 .212.09.415.248.565.159.15.374.234.598.234Zm1.046-4.553a.666.666 0 0 0-.513-.24h-.431a.666.666 0 1 0 0 1.33h.431a.666.666 0 0 0 .512-1.09ZM5.433 8.267c.224 0 .44-.084.598-.234a.777.777 0 0 0 .247-.565.777.777 0 0 0-.247-.565.872.872 0 0 0-.598-.234.872.872 0 0 0-.598.234.777.777 0 0 0-.248.565c0 .212.089.415.248.565.158.15.373.234.598.234Z"
    />
  </Svg>
)
export default PickupSvg
