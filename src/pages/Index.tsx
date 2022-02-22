import Header from '@/components/Header'
import { gSass } from '@/utils/global'
import { Button, Checkbox, Input, InputNumber, Space, Switch, Tooltip } from 'antd'
import { Outlet } from 'react-router-dom'
import { QuestionCircleOutlined } from '@ant-design/icons'

interface Props {
  username: string
}
const style = gSass.index.index
export default function Index(): React.ReactElement<Props> {
  return (
    <div className={style.main}>
      <Header />
      {/* 配置 */}
      <div className={style.content}>
        <div className={style.trem}>
          <div className={style.them}>配置选项</div>
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>是否自动接受对局</div>

              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动秒选英雄</div>
              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动ban人</div>
              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否自动发送消息到选人界面</div>
              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>是否发送自己马匹信息</div>
              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.title}>
                是否复制敌方马匹信息{' '}
                <Tooltip title="prompt text">
                  <Space>
                    <QuestionCircleOutlined style={{ color: '#1890ff' }} />
                  </Space>
                </Tooltip>
              </div>
              <div className={style.switch}>
                <Switch />
              </div>
            </div>
            <div>
              <div className={style.name}>马匹名称:</div>
              <div className={style.inputList}>
                <div className={style.inputItem}>
                  <Input placeholder="通天代" />
                </div>
                <div className={style.inputItem}>
                  <Input placeholder="小代" />
                </div>
                <div className={style.inputItem}>
                  <Input placeholder="上等马" />
                </div>
                <div className={style.inputItem}>
                  <Input placeholder="中等马" />
                </div>
                <div className={style.inputItem}>
                  <Input placeholder="下等马" />
                </div>
                <div className={style.inputItem}>
                  <Input placeholder="牛马" />
                </div>
                <div className={style.inputItem}>
                  <Button type="primary">保存</Button>
                </div>
              </div>
            </div>
            <div className={style.message}>
              <div className={style.name}>发送哪些马匹信息:</div>
              <div className={style.messageList}>
                <Checkbox.Group
                  options={[
                    { label: '通天代', value: '通天代' },
                    { label: '小代', value: '小代' },
                    { label: '上等马', value: '上等马' },
                    { label: '中等马', value: '中等马' },
                    { label: '下等马', value: '下等马' },
                    { label: '牛马', value: '牛马' },
                  ]}
                />
                <div className={style.messageBtn}>
                  <Button type="primary">保存</Button>
                </div>
              </div>
            </div>
            <div className={style.time}>
              <div className={style.title}>进入选人阶段n秒</div>
              <div className={style.inputNumber}>
                <InputNumber defaultValue="1" min="0" max="10" />
              </div>
              <div className={style.messageBtn}>
                <Button type="primary">保存</Button>
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
                <Button type="primary">查询</Button>
              </div>
            </div>
            <div className={style.btnItem}>
              <div className={style.btnTitle}>查询用户马匹信息</div>
              <div className={style.btnInput}>
                <Input placeholder="用户名" />
              </div>
              <div className={style.btn}>
                <Button type="primary">查询</Button>
              </div>
            </div>
            <div className={style.btnItem}>
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
            </div>
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
