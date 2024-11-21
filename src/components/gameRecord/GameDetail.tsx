import { useState } from "react"
import { GameQueueType, GameQueueTypeZh } from "@api/lol"
import { gSass } from "@utils/global"
import dayjs from "dayjs"
import csn from "classnames"
const style = gSass.index.gameDetail
enum GameDetailDataMode {
  Base = 0, // 基础
  Advance = 1, // 高级
  UserData = 2, // ta的表现
}
interface GameBaseData {
  beginTms: number // 开始时间
  gameQueueType: GameQueueType // 游戏类型
  gameDuration: number // 游戏持续时间
  firstTeamKill: number // 1队击杀
  secondTeamKill: number // 2队击杀
}
// 游戏战绩详情
export function GameDetail() {
  const [contentDataMode, setContentDataMode] = useState(GameDetailDataMode.Base)
  let Content = GameDetailBase
  if (contentDataMode === GameDetailDataMode.Advance) {
    Content = GameDetailAdvancedData
  } else if (contentDataMode === GameDetailDataMode.UserData) {
    Content = UserGamePerformance
  }
  const gameBaseData: GameBaseData = {
    beginTms: 1694839500000,
    firstTeamKill: 52,
    gameDuration: 1265,
    gameQueueType: GameQueueType.ARAM_UNRANKED_5x5,
    secondTeamKill: 59,
  }
  return (
    <div
      style={{
        minHeight: 650,
        backgroundColor: "#fff",
      }}
    >
      {/* header */}
      <GameDetailHeader
        baseData={gameBaseData}
        contentDataMode={contentDataMode}
        setContentDataMode={setContentDataMode}
      />
      {/* detail */}
      {contentDataMode === 0 && <GameDetailBase />}
      {contentDataMode === 1 && <GameDetailAdvancedData />}
      {contentDataMode === 2 && <UserGamePerformance />}
      <Content />
    </div>
  )
}
// 游戏详情头部
export function GameDetailHeader(data: {
  baseData: GameBaseData
  contentDataMode: GameDetailDataMode
  setContentDataMode: React.Dispatch<React.SetStateAction<GameDetailDataMode>>
}) {
  const { beginTms, firstTeamKill, gameDuration, secondTeamKill, gameQueueType } = data.baseData
  return (
    <div className={style["game-detail-header"]}>
      {/* profile */}
      <div className={style.profile}>
        <div className={csn(style["profile-item"], style.sep)}>
          <div className={style.title}>时间</div>
          <div className={style.value}>{dayjs(beginTms).format("MM-DD HH:mm")}</div>
        </div>
        <div className={csn(style["profile-item"], style.sep)}>
          <div className={style.title}>类型</div>
          <div className={style.value}>{GameQueueTypeZh[gameQueueType]}</div>
        </div>
        <div className={csn(style["profile-item"], style.sep)}>
          <div className={style.title}>比赛时长</div>
          <div className={style.value}>{~~(gameDuration / 60)}分钟</div>
        </div>
        <div className={style["profile-item"]}>
          <div className={style.title}>击杀</div>
          <div className={style.value}>
            {firstTeamKill}/{secondTeamKill}
          </div>
        </div>
      </div>
      {/* nav */}
      <div className={style.nav}>
        <div className={csn(style["nav-item"], style.active)}>
          <p>
            <span>基础</span>
          </p>
        </div>
        <div className={style["nav-item"]}>高阶数据</div>
        <div className={style["nav-item"]}>TA的表现</div>
      </div>
    </div>
  )
}
////////// 战绩基础信息
export function GameDetailBase() {
  // let teamData = {}
  return (
    <div className={style["game-detail-base"]}>
      <div className={csn(style.team, style.winer)}>
        <div className={style["basic-value"]}>
          <div className={style.header}>
            <div className={csn(style["team-type"], style.win)}>胜方</div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data1"]} /> 52 / 59 / 85
            </div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data2"]} />
              74.8k
            </div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data3"]} />4
            </div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data4"]} />1
            </div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data5"]} />0
            </div>
            <div className={style["team-data-profile"]}>
              <i className={style["icon-data6"]} />0
            </div>
          </div>
          <div className={style["champion-base-value"]}>
            <div className={style.champion}>
              <div className={style.profile}>
                <div className={style.avatar}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/champions/876.png"
                    alt="英雄名称"
                  />
                </div>
                <div className={style["summoner-info"]}>
                  <div className={style["summoner-name"]}>召唤师4396</div>
                  <div className={style["summoner-desc"]}>
                    <div className={style.item}>
                      <i className={csn(style.honor16, style["honor16-kill3"])} />
                    </div>
                    <div className={style.item}>
                      <i className={csn(style.honor16, style["honor16-attack"])} />
                    </div>
                    <div className={style.item}>
                      <i className={csn(style.honor16, style["honor16-god"])} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style["rank-grade"]}>
                <img src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/v2/tier/tier-255.png" alt="--" />
              </div>
              <div className={style.perk}>
                <img
                  src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/runesperk/8128.png"
                  alt=""
                />
                <img
                  src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/runesperk/8000.png"
                  alt=""
                />
              </div>
              <div className={style.skills}>
                <img
                  src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/summonability/32.png"
                  alt=""
                />
                <img
                  src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/summonability/4.png"
                  alt=""
                />
              </div>
              <div className={style.items}>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img
                    src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/6653.png"
                    alt="兰德里的苦楚"
                  />
                </div>
                <div className={style.item}>
                  <img src="//wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/0.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["champion-value"]}>
          <div className={style["champion-value-header"]}>
            <div className={csn(style.prev, style.active)} />
            <div className={style["nav-title"]}>KDA</div>
            <div className={style["nav-title"]}>金钱</div>
            <div className={style["nav-title"]}>英雄伤害</div>
            {/* <div className={style['nav-title']}>参团率</div>
            <div className={style['nav-title']}>插眼</div>
            <div className={style['nav-title']}>承受伤害</div> */}
            <div className={csn(style.prev)} />
          </div>
          <div className={style.rate}>评价</div>
        </div>
      </div>
    </div>
  )
}

// 队伍战绩详情
export function TeamGameDetail() {}
// 队伍战绩简介
export function TeamGameDetailHeader() {}
// 召唤师战绩详情
export function TeamUserGameDetail() {}
// 召唤师战绩简介(头像 昵称)
export function TeamUserProfile() {}
// 游戏全场最佳
export function GameBestOverall() {}
// 队伍金币平均数据
export function TeamCoinAvagerData() {}
// 队伍击杀点
export function GameKillMap() {}

////////// 战绩高级信息
export function GameDetailAdvancedData() {
  return <div>aaa</div>
}
// 所有队伍高级战绩信息
export function AllTeamGameDetailAdvancedData() {}
// 队伍高级战绩信息 侧边栏
export function TeamGameDetailAdvancedDataSidebar() {}
// 单项队伍战绩高级信息
export function TeamAdvanceDataItem() {}
// 队伍担任战绩高级信息
export function TeamUserAdvanceData() {}
// 召唤师数据对位信息
export function ChampionDataComparison() {}

////////// 用户战绩信息
export function UserGamePerformance() {
  return <div>bbb</div>
}
// 用户战绩信息简介
export function UserGamePerformanceProfile() {}
// 用户装备技能
export function UserGamePerformanceEquipAndSkill() {}
// 用户符文统计
export function UserGamePerformancePerkData() {}
// 用户符文详情
export function UserGamePerformancePerkItem() {}
