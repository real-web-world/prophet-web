import zhCN from "@/locales/zh-cn"
import zhTW from "@/locales/zh-tw"
import EN from "@/locales/en"
export enum Lang {
  简体中文 = "zh-cn",
  繁体中文 = "zh-tw",
  English = "en",
}
const msg: Record<string, any> = {
  [Lang.English]: EN,
  [Lang.简体中文]: zhCN,
  [Lang.繁体中文]: zhTW,
}
export default {
  lang: Lang,
  msg,
}
