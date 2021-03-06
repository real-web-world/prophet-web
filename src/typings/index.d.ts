export interface Picture {
  id: number
  name: string
  url: string
}
export interface Action<T = any> {
  type: string
  preload?: T
}
export type RegionLevel = 'province' | 'city' | 'county'
export interface Region {
  cid: string
  value: string
  label: string
  areaName: string
  level: RegionLevel
  children?: Region[]
}

/**
 * oss上传token
 */
export interface OssPolicyToken {
  accessKeyID: string
  host: string
  expire: number
  signature: string
  policy: string
  dir: string
  callback: string
}

export interface DbBaseField {
  id: number
  ctime?: string
  utime?: string
  dtime?: string
  create_time?: string
  update_time?: string
}
/**
 * 侧边栏的菜单
 */
export interface MenuItem {
  icon?: string
  href?: string
  title: string
  requirePermissionID?: number
  child: MenuItem[] | null
}
export type BoolStr = 'true' | 'false'
export const notLimit = 0
export type Extends<T, U extends T> = U
