import zhCN from "@/locales/zh-cn"
import EN from "@/locales/en"
export enum Lang {
  简体中文 = "zh-cn",
  English = "en",
}
const msg: Record<string, any> = {
  [Lang.English]: EN,
  [Lang.简体中文]: zhCN,
}
export default {
  lang: Lang,
  msg,
}
