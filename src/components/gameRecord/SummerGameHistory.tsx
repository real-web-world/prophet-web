import { gSass } from "@/utils/global"
import { GameDetail } from "./GameDetail"
const style = gSass.index.game
function SidebarHeader() {
  return (
    <div
      className={style.header}
      style={{
        display: "flex",
        marginBottom: 16,
      }}
    >
      <div
        style={{
          fontSize: 18,
          lineHeight: "24px",
          color: "#464646",
          fontWeight: 700,
          position: "relative",
          cursor: "pointer",
          paddingLeft: "20px",
        }}
        className="history-game"
      >
        历史战绩
      </div>
      <a className={style.report} href="https://aaa.com" target="_blank" rel="noreferrer">
        举报
      </a>
    </div>
  )
}
function SidebarPaging(_: { curr: number; hasPrev: boolean; hasNext: boolean }) {
  return (
    <div
      className="paging"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0px",
        margin: "0px -2px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(70,70,70,0.15)",
          color: "rgba(70,70,70,0.6)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          width: 38,
          backgroundImage:
            "url(https://wegame.gtimg.com/g.55555-r.c4663/lib/wg-ui/0.1.34/theme-builtin/images/page-arrow1.png)",
          height: 24,
          lineHeight: "22px",
          margin: "0px 2px",
          minWidth: 26,
          textAlign: "center",
        }}
        title="上一页"
      />
      <div
        style={{
          backgroundColor: "#359f8d",
          color: "#fff",
          fontSize: 12,
          padding: "0 8px",
          height: 24,
          lineHeight: "22px",
          margin: "0 2px",
          minWidth: 10,
          textAlign: "center",
          display: "inline-block",
          verticalAlign: "bottom",
        }}
      >
        1
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          color: "rgba(70,70,70,0.6)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          width: 38,
          backgroundImage:
            "url(https://wegame.gtimg.com/g.55555-r.c4663/lib/wg-ui/0.1.34/theme-builtin/images/page-arrow2.png)",
          height: 24,
          lineHeight: "22px",
          margin: "0px 2px",
          minWidth: 26,
          textAlign: "center",
        }}
        title="下一页"
      />
    </div>
  )
}
function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        width: 260,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SidebarHeader />
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="history"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(90deg,#fff 0%,#fff 94%,rgba(82,82,82,.08) 100%)",
          }}
        >
          <GameProfileItem />
          <GameProfileItem />
        </div>
      </div>
      <SidebarPaging curr={1} hasNext hasPrev={false} />
    </div>
  )
}
function GameProfileItem() {
  return (
    <div
      className="item"
      style={{
        display: "flex",
        width: 260,
        height: 66,
        cursor: "pointer",
      }}
    >
      <div
        className="sep"
        style={{
          display: "flex",
          width: 5,
          backgroundColor: "#d54a4a",
          marginRight: 2,
        }}
      />
      <div
        className="profile"
        style={{
          display: "flex",
          alignItems: "center",
          width: 253,
          justifyContent: "space-between",
          background: "linear-gradient(to right,rgba(213,74,74,.5),#fff)",
          transition: "all .1s ease-in-out",
          paddingLeft: 9,
        }}
      >
        <div
          className="champion"
          style={{
            width: 40,
            height: 40,
          }}
        >
          <img
            alt="英雄"
            src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/champions/145.png"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div>
          <div
            style={{
              marginBottom: 5,
              fontSize: 14,
              overflow: "visible",
            }}
          >
            大乱斗
          </div>
          <div
            style={{
              fontSize: 12,
              lineHeight: "16px",
              color: "rgba(70,70,70,.6)",
              margin: 0,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            09-16
          </div>
        </div>
        <div
          style={{
            justifySelf: "self-end",
            color: "#D95A5A",
            fontWeight: 700,
            marginRight: 2,
            minWidth: 40,
          }}
        >
          失败
        </div>
      </div>
    </div>
  )
}
export default function () {
  return (
    <div
      className="summor-game-history"
      style={{
        width: 1000,
        height: 610,
        backgroundColor: "rgb(245, 245, 245)",
        display: "flex",
        // overflowX: 'hidden',
        // overflowY: 'scroll',
        // border: 'red 1px solid',
      }}
    >
      <Sidebar />
      <GameDetail />
    </div>
  )
}
