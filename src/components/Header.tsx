import type { FC } from "react"
const Header: FC = () => {
  return (
    <div
      style={{
        height: "66px",
        flex: 1,
      }}
    >
      <div
        style={{
          lineHeight: "66px",
          flex: 1,
          paddingLeft: "15px",
          width: "160px",
          fontSize: "22px",
        }}
      >
        lol对局先知
      </div>
    </div>
  )
}
export default Header
