import Header from "@/components/Header"
import { gSass } from "@/utils/global"
import { Button, Checkbox, Input, message, Select, Switch } from "antd"
import { useEffect, useState } from "react"
import { champions, type Config, getAllConfig, querySummonerScore, updateConfig } from "@/services/lol"
const style = gSass.dev.client
const defaultHorseName = ["通天代", "小代", "上等马", "中等马", "下等马", "牛马"]

const defaultCfg: Config = {
  autoAcceptGame: false,
  autoPickChampID: 0,
  autoBanChampID: 0,
  autoSendTeamHorse: true,
  shouldSendSelfHorse: true,
  horseNameConf: defaultHorseName,
  chooseSendHorseMsg: [true, true, true, true, true, true],
  shouldAutoOpenBrowser: true,
}

const DevClient: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [hasInit, setHasInit] = useState(false)
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
  const [shouldAutoOpenBrowser, setShouldAutoOpenBrowser] = useState(defaultCfg.shouldAutoOpenBrowser)

  const updateCfg = async () => {
    const config: Config = {
      autoAcceptGame,
      autoPickChampID,
      autoBanChampID,
      autoSendTeamHorse,
      shouldSendSelfHorse,
      horseNameConf,
      chooseSendHorseMsg,
      // shouldInGameSaveMsgToClipBoard,
      shouldAutoOpenBrowser,
    }
    updateConfig(config)
      .then(() => {
        messageApi.info("更新成功", 1)
      })
      .catch(() => {
        messageApi.error("更新配置失败 请检查lol对局先知是否已启动", 3)
      })
  }
  useEffect(() => {
    ;(async () => {
      try {
        const { data: config } = await getAllConfig()
        setAutoAccetGame(config.autoAcceptGame)
        setAutoPickChampID(config.autoPickChampID)
        setAutoBanChampID(config.autoBanChampID)
        setAutoSendTeamHorse(config.autoSendTeamHorse)
        setShouldSendSelfHorse(config.shouldSendSelfHorse)
        setShouldAutoOpenBrowser(config.shouldAutoOpenBrowser)
        setHorseNameConf(config.horseNameConf)
        setChooseSendHorseMsg(config.chooseSendHorseMsg)
        setAutoPickChampActive(config.autoPickChampID > 0)
        setAutoBanChampActive(config.autoBanChampID > 0)
        setHasInit(true)
      } catch (e: any) {
        messageApi.warning("请检查客户端是否已启动", 3)
      }
    })()
  }, [])
  useEffect(() => {
    if (!hasInit) {
      return
    }
    updateCfg()
  }, [autoAcceptGame, autoPickChampID, autoBanChampID, autoSendTeamHorse, shouldSendSelfHorse, shouldAutoOpenBrowser])
  return (
    <div className={style.main}>
      {contextHolder}
      <Header />
      {/* 配置 */}
      <div className={style.content}>
        <div className={style.trem}>
          <div className={style.them}>配置选项</div>
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>是否自动接受对局</div>
              <div className={style.switch}>
                <Switch
                  checked={autoAcceptGame}
                  onChange={active => {
                    setAutoAccetGame(active)
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
                    setAutoPickChampID(active ? 157 : 0)
                  }}
                />
                {autoPickChampActive ? (
                  <div
                    style={{
                      marginLeft: 15,
                    }}
                  >
                    <Select<
                      number,
                      {
                        label: string
                        value: number
                        nicks: string[]
                      }
                    >
                      showSearch
                      placeholder="选择英雄"
                      optionFilterProp="label"
                      style={{
                        width: 150,
                        textAlign: "center",
                      }}
                      onChange={championID => {
                        setAutoPickChampID(championID)
                      }}
                      filterOption={(input, option) => {
                        if (!option) {
                          return false
                        }
                        if (option.label.includes(input)) {
                          return true
                        }
                        for (const v of option.nicks) {
                          if (v.includes(input)) {
                            return true
                          }
                        }
                        return false
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
                    setAutoBanChampID(active ? 104 : 0)
                  }}
                />
                {autoBanChampActive ? (
                  <div
                    style={{
                      marginLeft: 15,
                    }}
                  >
                    <Select<
                      number,
                      {
                        label: string
                        value: number
                        nicks: string[]
                      }
                    >
                      style={{
                        width: 150,
                        textAlign: "center",
                      }}
                      showSearch
                      placeholder="选择英雄"
                      optionFilterProp="label"
                      onChange={championID => {
                        setAutoBanChampID(championID)
                      }}
                      filterOption={(input, option) => {
                        if (!option) {
                          return false
                        }
                        if (option.label.includes(input)) {
                          return true
                        }
                        for (const v of option.nicks) {
                          if (v.includes(input)) {
                            return true
                          }
                        }
                        return false
                      }}
                      defaultValue={157}
                      value={autoBanChampID}
                      options={champions.map(v => {
                        return { label: v.name, value: v.id, nicks: v.nicks }
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
                        name={`horse-${k}`}
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
                  <Button type="primary" onClick={updateCfg}>
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
                      id: v,
                      label: v,
                      value: k,
                    }
                  })}
                />
                <div className={style.messageBtn}>
                  <Button type="primary" onClick={updateCfg}>
                    保存
                  </Button>
                </div>
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
                        messageApi.info(`自己马匹信息:${resp.data.horse},得分:${resp.data.score.toFixed(2)}`, 2)
                      })
                      .catch(() => {
                        messageApi.warning("查询失败,请检查lol客户端是否已启动", 3)
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
                  name="searchSummonerName"
                  placeholder="用户名#数字"
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
                  onClick={async () => {
                    if (!/[^#]+?#\d{5,}/.test(searchSummonerName)) {
                      messageApi.warning("请输入要查询的用户名信息 例如 Uzi#439677")
                      return
                    }
                    setSearchSummonerName("")
                    querySummonerScore(searchSummonerName)
                      .then(resp => {
                        const { data } = resp
                        messageApi.info(`${searchSummonerName} 马匹信息:${data.horse},得分:${data.score.toFixed(2)}`, 3)
                      })
                      .catch(e => {
                        messageApi.warning(e.msg)
                      })
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
export default DevClient
