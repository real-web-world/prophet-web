import type { ConditionType } from '@/utils/constant'
import { bget, bpost, } from '@utils/jsbdk'
export type DefaultScene = 'default' | 'admin'
export interface BaseExtra<S extends string> {
  scene: S
}
export interface UpdateRespData {
  affectRows: number
}
export type FilterVal = boolean | string | number | string[] | number[]
export type DefaultOrderKeys = 'id' | 'ctime'
export interface GetListParam<
  F extends string = "",
  O extends string = DefaultOrderKeys,
  E extends BaseExtra<string> = BaseExtra<DefaultScene>,
> {
  page?: number
  limit?: number
  filter?: Partial<Record<F, { condition: ConditionType; val: FilterVal }>>
  order?: Partial<Record<O, 'desc' | 'asc'>>
  extra?: Partial<E>
}

export const notLimit = 0
export { bget }
export { bpost }
