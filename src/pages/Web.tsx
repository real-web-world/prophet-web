import { bilibiliVideoUrl, projectGhUrl, dlDoamin, projectQQGroup } from "@/config/prod"

interface Props {
  version: string
}

const Index: React.FC<Props> = ({ version }) => {
  const dlUrl = `${dlDoamin}/s/hh-lol-prophet/${version}/hh-lol-prophet-${version}.zip`
  const maServerDlName = `lol对局先知-${version}.zip`
  const twServerDlName = `lol对局先知-台服${version}.zip`
  return (
    <main>
      <video id="bg-video" autoPlay loop muted>
        <source src="//game.gtimg.cn/images/lol/act/a20220124prespring/video.mp4" type="video/mp4" />
      </video>
      <div className="summary">
        <h1>lol 对局先知</h1>
        <h2>qq 群:{projectQQGroup}</h2>
        <h2>
          b站:{" "}
          <a href={bilibiliVideoUrl} target="_blank" rel="noreferrer">
            传说的buff
          </a>
        </h2>
        <h2>
          源码:{" "}
          <a href={projectGhUrl} target="_blank" rel="noreferrer">
            github
          </a>
        </h2>
        <div>
          <a className="dl" href={dlUrl} download={maServerDlName}>
            {" "}
            下载软件{" "}
          </a>
          <br />
          <br />
          <a
            className="dl"
            href="https://k-static.buffge.com:40012/s/hh-lol-prophet/v0.2.4/hh-lol-prophet-v0.2.4.zip"
            download={twServerDlName}
          >
            {" "}
            下载台服{" "}
          </a>
        </div>
        <table>
          180 分通天代 <br />
          150 分小代
          <br />
          125 分上等马
          <br />
          105 分中等马
          <br />
          95 分下等马
          <br />
          &lt;95 分牛马 <br />
        </table>
        <h2>计分方式</h2>
        <pre>
          {`基础分100分
一血   拿到一血+10
一血助攻 +5 分
参团率:
第一 +10
第二 +5
第四 -5
第五 -10
金钱比:
第一 +10
第二 +5
第四 非辅助位-5
第五 非辅助位-10
伤害比:
第一 +10
第二 +5
金钱转化比:
第一 +10
第二 +5
视野得分:
第一 +10
第二 +5
kda:
人头占比&gt;50%并且人头&gt;5  + 10
人头占比&gt;50%并且人头&gt;10  + 20
人头占比&gt;50%并且人头&gt;15  + 40

人头占比&gt;35%并且人头&gt;5  + 5
人头占比&gt;35%并且人头&gt;10  + 10
人头占比&gt;35%并且人头&gt;15  + 20

伤害占比&gt;50%并且人头&gt;5  + 10
伤害占比&gt;50%并且人头&gt;10  + 20
伤害占比&gt;50%并且人头&gt;15  + 40

伤害占比&gt;30%并且人头&gt;5  + 5
伤害占比&gt;30%并且人头&gt;10  + 10
伤害占比&gt;30%并且人头&gt;15  + 20


助攻占比&gt;50%并且助攻&gt;5  + 10
助攻占比&gt;50%并且助攻&gt;10  + 20
助攻占比&gt;50%并且助攻&gt;15  + 40

助攻占比&gt;35%并且助攻&gt;5  + 5
助攻占比&gt;35%并且助攻&gt;10  + 10
助攻占比&gt;35%并且助攻&gt;15  + 20

补兵:
每分钟 8个刀以上加5分
每分钟 9个刀以上加10
每分钟 10个刀以上加20

三杀+5
四杀+10
五杀+20

再加上 (k+a)/d + (k-d)/5*参团率

最近5小时权重 80%
其他对局权重 20%
`}
        </pre>
      </div>
    </main>
  )
}

export default Index