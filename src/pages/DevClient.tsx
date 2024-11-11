import Header from "@/components/Header"
import { gSass } from "@/utils/global"
import { Button, Checkbox, Input, InputNumber, message, Select, Switch, Tooltip } from "antd"
import { useEffect, useState } from "react"
import { champions, type Config, getAllConfig, querySummonerScore, updateConfig } from "@/services/lol"
interface Props {
  username: string
}
const style = gSass.index.index
const defaultHorseName = ["通天代", "小代", "上等马", "中等马", "下等马", "牛马"]

const defaultCfg: Config = {
  autoAcceptGame: false,
  autoPickChampID: 0,
  autoBanChampID: 0,
  autoSendTeamHorse: true,
  shouldSendSelfHorse: true,
  horseNameConf: defaultHorseName,
  chooseSendHorseMsg: [true, true, true, true, true, true],
  chooseChampSendMsgDelaySec: 3,
  shouldInGameSaveMsgToClipBoard: true,
  shouldAutoOpenBrowser: true,
}

export default function DevClient(): React.ReactElement<Props> {
  const [searchSummonerName, setSearchSummonerName] = useState("")
  const [autoPickChampActive, setAutoPickChampActive] = useState(defaultCfg.autoPickChampID > 0)
  const [autoBanChampActive, setAutoBanChampActive] = useState(defaultCfg.autoBanChampID > 0)
  const [autoAcceptGame, setAutoAccetGame] = useState(defaultCfg.autoAcceptGame)
  const [autoPickChampID, setAutoPickChampID] = useState(defaultCfg.autoPickChampID)
  const [autoBanChampID, setAutoBanChampID] = useState(defaultCfg.autoBanChampID)
  const [autoSendTeamHorse, setAutoSendTeamHorse] = useState(defaultCfg.autoSendTeamHorse)
  const [shouldSendSelfHorse, setShouldSendSelfHorse] = useState(defaultCfg.shouldSendSelfHorse)
  const [chooseSendHorseMsg, setChooseSendHorseMsg] = useState(defaultCfg.chooseSendHorseMsg)
  const [horseNameConf, setHorseNameConf] = useState(defaultCfg.horseNameConf)
  const [chooseChampSendMsgDelaySec, setChooseChampSendMsgDelaySec] = useState(defaultCfg.chooseChampSendMsgDelaySec)
  const [shouldInGameSaveMsgToClipBoard, setShouldInGameSaveMsgToClipBoard] = useState(
    defaultCfg.shouldInGameSaveMsgToClipBoard,
  )
  const [shouldAutoOpenBrowser, setShouldAutoOpenBrowser] = useState(defaultCfg.shouldAutoOpenBrowser)
  const [searchSummonerNameA, setSearchSummonerNameA] = useState("")
  const [shouldUpdateCfg, setShouldUpdateCfg] = useState(false)
  const [hasInit, setHasInit] = useState(false)

  const updateCfg = async () => {
    const config: Config = {
      autoAcceptGame,
      autoPickChampID,
      autoBanChampID,
      autoSendTeamHorse,
      shouldSendSelfHorse,
      horseNameConf,
      chooseSendHorseMsg,
      chooseChampSendMsgDelaySec,
      shouldInGameSaveMsgToClipBoard,
      shouldAutoOpenBrowser,
    }
    console.log("正在更新配置")
    return updateConfig(config)
  }
  if (hasInit) {
    setHasInit(true)
    updateCfg()
  }
  useEffect(() => {
    if (!hasInit) {
      return
    }
    const a = async () => {
      const { data } = await querySummonerScore(searchSummonerNameA)
      message.info(`${searchSummonerNameA}马匹信息:${data.horse},得分:${data.score.toFixed(2)}`, 3)
    }
    a().catch(console.error)
  }, [searchSummonerNameA, hasInit])
  useEffect(() => {
    ;(async () => {
      const { data: config } = await getAllConfig()
      setAutoAccetGame(config.autoAcceptGame)
      setAutoPickChampID(config.autoPickChampID)
      setAutoBanChampID(config.autoBanChampID)
      setAutoSendTeamHorse(config.autoSendTeamHorse)
      setShouldSendSelfHorse(config.shouldSendSelfHorse)
      setHorseNameConf(config.horseNameConf)
      setChooseSendHorseMsg(config.chooseSendHorseMsg)
      setChooseChampSendMsgDelaySec(config.chooseChampSendMsgDelaySec)
      setShouldInGameSaveMsgToClipBoard(config.shouldInGameSaveMsgToClipBoard)
      setAutoPickChampActive(config.autoPickChampID > 0)
      setAutoBanChampActive(config.autoBanChampID > 0)
      setShouldAutoOpenBrowser(config.shouldAutoOpenBrowser ?? true)
    })()
  }, [])
  useEffect(() => {
    if (!shouldUpdateCfg) {
      return
    }
    // updateCfg()
    //   .then(() => {
    //     message.info("更新成功", 1)
    //   })
    //   .catch(() => {
    //     message.error("更新配置失败 请检查lol对局先知是否已启动", 3)
    //   })
  }, [shouldUpdateCfg])

  return (
    <div className={style.main}>
      <Header />
      {/* 配置 */}
      <div className={style.content}>
        <div className={style.trem}>
          <div className={style.them}>配置选项2</div>
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>是否自动接受对局</div>

              <div className={style.switch}>
                <Switch
                  checked={autoAcceptGame}
                  onChange={active => {
                    setAutoAccetGame(active)
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动秒选英雄</div>
              <div className={style.switch}>
                <Switch
                  checked={autoPickChampActive}
                  onChange={active => {
                    setAutoPickChampActive(active)
                    if (!active) {
                      setAutoPickChampID(0)
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    } else {
                      setAutoPickChampID(157)
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    }
                  }}
                />
                {autoPickChampActive ? (
                  <div style={{}}>
                    <Select<number>
                      showSearch
                      placeholder="选择英雄"
                      optionFilterProp="label"
                      onChange={championID => {
                        setAutoPickChampID(championID)
                        setShouldUpdateCfg(!shouldUpdateCfg)
                      }}
                      filterOption={(input, option) => {
                        return option?.label?.toString().includes(input) ?? false
                      }}
                      defaultValue={157}
                      value={autoPickChampID}
                      options={champions.map(v => {
                        return { label: v.name, value: v.id, nicks: v.nicks }
                      })}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动ban人</div>
              <div className={style.switch}>
                <Switch
                  checked={autoBanChampActive}
                  onChange={active => {
                    setAutoBanChampActive(active)
                    if (!active) {
                      setAutoBanChampID(0)
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    } else {
                      setAutoBanChampID(104)
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    }
                  }}
                />
                {autoBanChampActive ? (
                  <div style={{}}>
                    <Select<number>
                      showSearch
                      placeholder="选择英雄"
                      optionFilterProp="label"
                      onChange={championID => {
                        setAutoBanChampID(championID)
                        setShouldUpdateCfg(!shouldUpdateCfg)
                      }}
                      filterOption={(input, option) => {
                        return option?.label?.toString().includes(input) ?? false
                      }}
                      defaultValue={157}
                      value={autoBanChampID}
                      options={champions.map(v => {
                        return { label: v.name, value: v.id }
                      })}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动发送消息到选人界面</div>
              <div className={style.switch}>
                <Switch
                  checked={autoSendTeamHorse}
                  onChange={active => {
                    setAutoSendTeamHorse(active)
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否发送自己马匹信息</div>
              <div className={style.switch}>
                <Switch
                  checked={shouldSendSelfHorse}
                  onChange={active => {
                    setShouldSendSelfHorse(active)
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>
                是否复制敌方马匹信息{" "}
                <Tooltip title="待更新">
                  {/* <Space>
                    <QuestionCircleOutlined style={{ color: '#1890ff' }} />
                  </Space> */}
                  ?
                </Tooltip>
              </div>
              <div className={style.switch}>
                <Switch
                  checked={shouldInGameSaveMsgToClipBoard}
                  onChange={active => {
                    setShouldInGameSaveMsgToClipBoard(active)
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动打开浏览器 </div>
              <div className={style.switch}>
                <Switch
                  checked={shouldAutoOpenBrowser}
                  onChange={active => {
                    setShouldAutoOpenBrowser(active)
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                />
              </div>
            </div>
            <div>
              <div className={style.name}>马匹名称:</div>
              <div className={style.inputList}>
                {horseNameConf.map((v, k) => {
                  return (
                    <div key={v} className={style.inputItem}>
                      <Input
                        placeholder={defaultHorseName[k]}
                        value={v}
                        onChange={evt => {
                          const val = evt.currentTarget.value.trim()
                          if (val !== "") {
                            const data = [...horseNameConf]
                            data[k] = val
                            setHorseNameConf(data)
                          }
                        }}
                      />
                    </div>
                  )
                })}
                <div className={style.inputItem}>
                  <Button
                    type="primary"
                    onClick={() => {
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    }}
                  >
                    保存
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.message}>
              <div className={style.name}>发送哪些马匹信息:</div>
              <div className={style.messageList}>
                <Checkbox.Group
                  onChange={val => {
                    const arr = chooseSendHorseMsg.map((_, k) => val.includes(k))
                    setChooseSendHorseMsg(arr)
                  }}
                  value={chooseSendHorseMsg
                    .map((v, k) => {
                      return { v, k }
                    })
                    .filter(v => v.v)
                    .map(v => v.k)}
                  options={horseNameConf.map((v, k) => {
                    return {
                      label: v,
                      value: k,
                    }
                  })}
                />
                <div className={style.messageBtn}>
                  <Button
                    type="primary"
                    onClick={() => {
                      setShouldUpdateCfg(!shouldUpdateCfg)
                    }}
                  >
                    保存
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.time}>
              <div className={style.title}>进入选人阶段n秒</div>
              <div className={style.inputNumber}>
                <InputNumber
                  defaultValue={3}
                  min={0}
                  max={20}
                  value={chooseChampSendMsgDelaySec}
                  onChange={val => {
                    val && setChooseChampSendMsgDelaySec(val)
                  }}
                />
              </div>
              <div className={style.messageBtn}>
                <Button
                  type="primary"
                  onClick={() => {
                    setShouldUpdateCfg(!shouldUpdateCfg)
                  }}
                >
                  保存
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* 功能 */}
        <div className={style.trem}>
          <div className={style.them}>功能</div>
          <div className={style.list}>
            <div className={style.btnItem}>
              <div className={style.title}>查询自己马匹信息</div>
              <div className={style.btn}>
                <Button
                  type="primary"
                  onClick={() => {
                    querySummonerScore("")
                      .then(resp => {
                        message.info(`自己马匹信息:${resp.data.horse},得分:${resp.data.score.toFixed(2)}`, 2)
                      })
                      .catch(() => {
                        message.warning("查询失败,请检查lol客户端是否已启动", 3)
                      })
                  }}
                >
                  查询
                </Button>
              </div>
            </div>
            <div className={style.btnItem}>
              <div className={style.btnTitle}>查询用户马匹信息</div>
              <div className={style.btnInput}>
                <Input
                  placeholder="用户名"
                  value={searchSummonerName}
                  onChange={evt => {
                    const name = evt.currentTarget.value.trim()
                    setSearchSummonerName(name)
                  }}
                />
              </div>
              <div className={style.btn}>
                <Button
                  type="primary"
                  onClick={() => {
                    setSearchSummonerNameA(searchSummonerName)
                    setSearchSummonerName("")
                  }}
                >
                  查询
                </Button>
              </div>
            </div>
            {/* <div className={style.btnItem}>
              <div className={style.title}>复制马匹信息到剪切板</div>
              <div className={style.btn}>
                <Button type="primary">复制</Button>
              </div>
            </div>
            <div className={style.btnItem}>
              <div className={style.title}>发送马匹信息</div>
              <div className={style.btn}>
                <Button type="primary">发送</Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
// 配置选项
// - 是否自动接受对局 false
// - 是否自动秒选英雄 false
// - 是否自动ban人
// - 是否自动发送消息到选人界面 true
// - 是否发送自己马匹信息 true
// - 进入游戏后获取对方马匹信息 并保存在剪切板中 true
// - 马匹名称 自定义 6input
// - 发送哪些马匹信息 (比如仅发送上等马小代和通天代) 6 checkbox
// - 进入选人阶段n秒 再发送  1 input
// 功能
//   查询自己马匹信息
//   查询用户马匹信息
//   复制马匹信息到剪切板
//   发送马匹信息(选人阶段)
