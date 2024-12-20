import { lolApiBaseUrl } from './../config/prod';
import { bpost } from './api'
export enum GameQueueType {
  NORMAL = 'NORMAL', // 匹配
  RANKED_SOLO_5x5 = 'RANKED_SOLO_5x5', //单双排
  RANKED_FLEX_SR = 'RANKED_FLEX_SR', // 组排
  ARAM_UNRANKED_5x5 = 'ARAM_UNRANKED_5x5', // 大乱斗
  URF = 'URF', // 无限火力
  BOT = 'BOT', // 人机
  PRACTICETOOL = 'PRACTICETOOL', // 自定义
}
export const GameQueueTypeZh: Record<GameQueueType, string> = {
  [GameQueueType.NORMAL]: '匹配',
  [GameQueueType.RANKED_SOLO_5x5]: '单双排',
  [GameQueueType.RANKED_FLEX_SR]: '组排',
  [GameQueueType.ARAM_UNRANKED_5x5]: '大乱斗',
  [GameQueueType.URF]: '无限火力',
  [GameQueueType.BOT]: '人机',
  [GameQueueType.PRACTICETOOL]: '自定义',
}
export const champions = [
  { id: 0, name: '无', nicks: [] },
  { id: 1, name: '黑暗之女', nicks: ['火女', '安妮'] },
  { id: 2, name: '狂战士', nicks: ['奥拉夫'] },
  { id: 3, name: '正义巨像', nicks: ['加里奥'] },
  { id: 4, name: '卡牌大师', nicks: [] },
  { id: 5, name: '德邦总管', nicks: ['菊花', '赵信'] },
  { id: 6, name: '无畏战车', nicks: ['螃蟹'] },
  { id: 7, name: '诡术妖姬', nicks: ['勒布朗', '乐芙兰'] },
  { id: 8, name: '猩红收割者', nicks: ['吸血鬼'] },
  { id: 9, name: '远古恐惧', nicks: ['末日'] },
  { id: 10, name: '正义天使', nicks: ['天使'] },
  { id: 11, name: '无极剑圣', nicks: ['js'] },
  { id: 12, name: '牛头酋长', nicks: [] },
  { id: 13, name: '符文法师', nicks: ['流浪'] },
  { id: 14, name: '亡灵战神', nicks: ['塞恩', '霸哥', '大g'] },
  { id: 15, name: '战争女神', nicks: ['轮子妈'] },
  { id: 16, name: '众星之子', nicks: ['奶妈'] },
  { id: 17, name: '迅捷斥候', nicks: ['提莫'] },
  { id: 18, name: '麦林炮手', nicks: ['小炮', 'k神', 'K神', '一鱼四吃'] },
  { id: 19, name: '祖安怒兽', nicks: ['狼人'] },
  { id: 20, name: '雪原双子', nicks: ['努努'] },
  { id: 21, name: '赏金猎人', nicks: ['mf', '女枪'] },
  { id: 22, name: '寒冰射手', nicks: ['艾希'] },
  { id: 23, name: '蛮族之王', nicks: ['蛮王', '蛮三刀'] },
  { id: 24, name: '武器大师', nicks: ['贾克斯'] },
  { id: 25, name: '堕落天使', nicks: ['莫甘娜'] },
  { id: 26, name: '时光守护者', nicks: ['出生',] },
  { id: 27, name: '炼金术士', nicks: ['辛吉德', '辛吉东'] },
  { id: 28, name: '痛苦之拥', nicks: ['寡妇'] },
  { id: 29, name: '瘟疫之源', nicks: ['老鼠'] },
  { id: 30, name: '死亡颂唱者', nicks: ['死歌'] },
  { id: 31, name: '虚空恐惧', nicks: ['大虫子'] },
  { id: 32, name: '殇之木乃伊', nicks: ['木木'] },
  { id: 33, name: '披甲龙龟', nicks: [] },
  { id: 34, name: '冰晶凤凰', nicks: ['冰鸟'] },
  { id: 35, name: '恶魔小丑', nicks: ['阳光男孩'] },
  { id: 36, name: '祖安狂人', nicks: ['蒙多'] },
  { id: 37, name: '琴瑟仙女', nicks: ['奶'] },
  { id: 38, name: '虚空行者', nicks: ['卡萨丁'] },
  { id: 39, name: '刀锋舞者', nicks: ['女刀'] },
  { id: 40, name: '风暴之怒', nicks: ['风女'] },
  { id: 41, name: '海洋之灾', nicks: ['船长'] },
  { id: 42, name: '英勇投弹手', nicks: ['飞机'] },
  { id: 43, name: '天启者', nicks: ['扇子妈'] },
  { id: 44, name: '瓦洛兰之盾', nicks: ['宝石'] },
  { id: 45, name: '邪恶小法师', nicks: ['维嘉'] },
  { id: 48, name: '巨魔之王', nicks: ['大鼻子', '若风'] },
  { id: 50, name: '诺克萨斯统领', nicks: ['乌鸦'] },
  { id: 51, name: '皮城女警', nicks: [] },
  { id: 53, name: '蒸汽机器人', nicks: [] },
  { id: 54, name: '熔岩巨兽', nicks: ['石头', '霸哥'] },
  { id: 55, name: '不祥之刃', nicks: ['卡特'] },
  { id: 56, name: '永恒梦魇', nicks: ['noc'] },
  { id: 57, name: '扭曲树精', nicks: ['大树', '霸哥'] },
  { id: 58, name: '荒漠屠夫', nicks: ['鳄鱼'] },
  { id: 59, name: '德玛西亚皇子', nicks: [] },
  { id: 60, name: '蜘蛛女皇', nicks: [] },
  { id: 61, name: '发条魔灵', nicks: [] },
  { id: 62, name: '齐天大圣', nicks: ['猴子', '孙悟空'] },
  { id: 63, name: '复仇焰魂', nicks: ['火男'] },
  { id: 64, name: '盲僧', nicks: ['瞎子', '李青'] },
  { id: 67, name: '暗夜猎手', nicks: ['vn', '物资', '污渍', 'uzi'] },
  { id: 68, name: '机械公敌', nicks: ['兰博', '蓝宝'] },
  { id: 69, name: '魔蛇之拥', nicks: ['蛇女', '秃子', '莎莉'] },
  { id: 72, name: '水晶先锋', nicks: ['蝎子'] },
  { id: 74, name: '大发明家', nicks: ['大头'] },
  { id: 75, name: '沙漠死神', nicks: ['狗头', '霸哥'] },
  { id: 76, name: '狂野女猎手', nicks: ['豹女'] },
  { id: 77, name: '兽灵行者', nicks: ['乌迪尔'] },
  { id: 78, name: '圣锤之毅', nicks: ['波比'] },
  { id: 79, name: '酒桶', nicks: [] },
  { id: 80, name: '不屈之枪', nicks: ['ps', '潘森', '斯巴达'] },
  { id: 81, name: '探险家', nicks: ['ez'] },
  { id: 82, name: '铁铠冥魂', nicks: ['铁皮', '金属大师'] },
  { id: 83, name: '牧魂人', nicks: ['约里克', '掘墓'] },
  { id: 84, name: '离群之刺', nicks: ['阿卡丽'] },
  { id: 85, name: '狂暴之心', nicks: ['凯南'] },
  { id: 86, name: '德玛西亚之力', nicks: ['盖伦', '霸哥'] },
  { id: 89, name: '曙光女神', nicks: ['日女'] },
  { id: 90, name: '虚空先知', nicks: ['马尔扎哈'] },
  { id: 91, name: '刀锋之影', nicks: ['男刀'] },
  { id: 92, name: '放逐之刃', nicks: ['瑞文', '瑞雯', '兔子'] },
  { id: 96, name: '深渊巨口', nicks: ['大嘴'] },
  { id: 98, name: '暮光之眼', nicks: ['肾', '慎', '腰子'] },
  { id: 99, name: '光辉女郎', nicks: [] },
  { id: 101, name: '远古巫灵', nicks: ['泽拉斯', '挠头'] },
  { id: 102, name: '龙血武姬', nicks: ['龙女'] },
  { id: 103, name: '九尾妖狐', nicks: ['狐狸'] },
  { id: 104, name: '法外狂徒', nicks: ['男枪', '狐臭'] },
  { id: 105, name: '潮汐海灵', nicks: ['小鱼'] },
  { id: 106, name: '不灭狂雷', nicks: ['大熊',] },
  { id: 107, name: '傲之追猎者', nicks: ['狮子狗'] },
  { id: 110, name: '惩戒之箭', nicks: ['维鲁斯', '韦鲁斯'] },
  { id: 111, name: '深海泰坦', nicks: [] },
  { id: 112, name: '机械先驱', nicks: ['三只手', '维克托'] },
  { id: 113, name: '北地之怒', nicks: ['猪妹', '猪女', '4396', '7777'] },
  { id: 114, name: '无双剑姬', nicks: ['jj',] },
  { id: 115, name: '爆破鬼才', nicks: ['炸弹人'] },
  { id: 117, name: '仙灵女巫', nicks: ['露露', '璐璐',] },
  { id: 119, name: '荣耀行刑官', nicks: ['德莱文', '文森特'] },
  { id: 120, name: '战争之影', nicks: ['人马'] },
  { id: 121, name: '虚空掠夺者', nicks: ['螳螂'] },
  { id: 122, name: '诺克萨斯之手', nicks: ['诺手', '小学生'] },
  { id: 126, name: '未来守护者', nicks: ['杰斯', '杰西'] },
  { id: 127, name: '冰霜女巫', nicks: ['丽桑卓'] },
  { id: 131, name: '皎月女神', nicks: ['黛安娜'] },
  { id: 133, name: '德玛西亚之翼', nicks: ['奎因'] },
  { id: 134, name: '暗黑元首', nicks: ['辛德拉', '球女'] },
  { id: 136, name: '铸星龙王', nicks: ['奥瑞利安索尔', '敖兴'] },
  { id: 141, name: '影流之镰', nicks: ['凯隐'] },
  { id: 142, name: '暮光星灵', nicks: ['佐伊'] },
  { id: 143, name: '荆棘之兴', nicks: ['婕拉'] },
  { id: 145, name: '虚空之女', nicks: ['卡萨', '卡莎', 'gala', '嘎子'] },
  { id: 147, name: '星籁歌姬', nicks: ['萨勒芬妮', '347',] },
  { id: 150, name: '迷失之牙', nicks: ['纳尔'] },
  { id: 154, name: '生化魔人', nicks: ['扎克', '翔'] },
  { id: 157, name: '疾风剑豪', nicks: ['亚索', '压缩',] },
  { id: 161, name: '虚空之眼', nicks: ['大眼', '维克兹'] },
  { id: 163, name: '岩雀', nicks: ['塔莉垭'] },
  { id: 164, name: '青钢影', nicks: ['卡蜜尔', '城墙'] },
  { id: 166, name: '影哨', nicks: ['彼得帕克', '阿克尚'] },
  { id: 201, name: '弗雷尔卓德之心', nicks: ['布隆'] },
  { id: 202, name: '戏命师', nicks: ['瘸子', '烬'] },
  { id: 203, name: '永猎双子', nicks: ['千珏', '千玉'] },
  { id: 221, name: '祖安花火', nicks: ['泽丽'] },
  { id: 222, name: '暴走萝莉', nicks: ['金克斯'] },
  { id: 223, name: '河流之王', nicks: ['蛤蟆', '塔姆', '霸哥'] },
  { id: 233, name: '狂厄蔷薇', nicks: ['贝蕾亚'] },
  { id: 234, name: '破败之王', nicks: ['佛耶戈'] },
  { id: 235, name: '涤魂圣枪', nicks: ['赛娜'] },
  { id: 236, name: '圣枪游侠', nicks: ['卢锡安', '卢仙', '奥巴马'] },
  { id: 238, name: '影流之主', nicks: ['劫'] },
  { id: 240, name: '暴怒骑士', nicks: ['克烈'] },
  { id: 245, name: '时间刺客', nicks: ['艾克',] },
  { id: 246, name: '元素女皇', nicks: ['琪亚娜', '北枫'] },
  { id: 254, name: '皮城执法官', nicks: ['楚雨荨', '蔚', '拳姐'] },
  { id: 266, name: '暗裔剑魔', nicks: ['亚托克斯'] },
  { id: 267, name: '唤潮鲛姬', nicks: ['美人鱼', '娜美'] },
  { id: 268, name: '沙漠皇帝', nicks: ['沙皇'] },
  { id: 350, name: '魔法猫咪', nicks: [] },
  { id: 360, name: '沙漠玫瑰', nicks: ['莎弥拉'] },
  { id: 412, name: '魂锁典狱长', nicks: ['锤石', '青蛙'] },
  { id: 420, name: '海兽祭司', nicks: ['触手怪', '俄洛伊'] },
  { id: 421, name: '虚空遁地兽', nicks: ['雷克塞', '挖掘机'] },
  { id: 427, name: '翠神', nicks: ['艾翁'] },
  { id: 429, name: '复仇之矛', nicks: ['卡莉丝塔', '滑板鞋'] },
  { id: 432, name: '星界游神', nicks: ['巴德'] },
  { id: 497, name: '幻翎', nicks: ['洛'] },
  { id: 498, name: '逆羽', nicks: ['霞'] },
  { id: 516, name: '山隐之焰', nicks: ['山羊', '奥恩'] },
  { id: 517, name: '解脱者', nicks: ['塞拉斯', '偷男'] },
  { id: 518, name: '万花通灵', nicks: ['妮蔻'] },
  { id: 523, name: '残月之肃', nicks: ['厄斐琉斯', '吴亦凡',] },
  { id: 526, name: '镕铁少女', nicks: ['芮尔'] },
  { id: 555, name: '血港鬼影', nicks: ['派克'] },
  { id: 711, name: '愁云使者', nicks: ['薇古丝'] },
  { id: 777, name: '封魔剑魂', nicks: ['永恩'] },
  { id: 799, name: '铁血狼母', nicks: ['安蓓萨'] },
  { id: 875, name: '腕豪', nicks: ['劲夫'] },
  { id: 876, name: '含羞蓓蕾', nicks: ['莉莉娅'] },
  { id: 887, name: '灵罗娃娃', nicks: ['格温'] },
  { id: 888, name: '炼金男爵', nicks: ['烈娜塔'] },
  { id: 893, name: '双界灵兔', nicks: ['阿萝拉'] },
  { id: 895, name: '不羁之悦', nicks: ['尼菈'] },
  { id: 897, name: '纳祖芒荣耀', nicks: ['奎桑提', '老黑'] },
  { id: 901, name: '炽炎雏龙', nicks: ['斯莫德', '小火龙'] },
  { id: 902, name: '明烛', nicks: ['米利欧'] },
  { id: 910, name: '异画师', nicks: ['彗'] },
  { id: 950, name: '百裂冥犬', nicks: ['纳亚菲利'] },
]

export interface Config {
  autoAcceptGame: boolean
  autoPickChampID: number
  autoBanChampID: number
  autoSendTeamHorse: boolean
  shouldSendSelfHorse: boolean
  shouldAutoOpenBrowser: boolean
  horseNameConf: string[]
  chooseSendHorseMsg: boolean[]
  chooseChampSendMsgDelaySec?: number

}
export interface HorseInfo {
  horse: string
  score: number
  currKDA: string[]
}
interface VersionInfo {
  downloadUrl: string
  versionTag: string
  zipDownloadUrl: string
}
export function getAllConfig() {
  return bpost<Config>({
    url: '/v1/config/getAll',
  })
}
export function updateConfig(data: Config) {
  data.chooseChampSendMsgDelaySec = 3
  return bpost({
    url: '/v1/config/update',
    data,
  })
}
export function querySummonerScore(name: string) {
  return bpost<HorseInfo>({
    url: '/v1/horse/queryBySummonerName',
    data: {
      summonerName: name,
    },
  })
}

export function getCurrVersion() {
  return bpost<VersionInfo>({
    url: `${lolApiBaseUrl}/lol/getCurrVersion`,
  })
}

