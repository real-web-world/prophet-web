export interface Picture {
  id: number
  name: string
  url: string
}
export interface Action<T = unknown> {
  type: string
  preload?: T
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