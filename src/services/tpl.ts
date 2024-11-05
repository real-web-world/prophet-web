import type { DbBaseField } from '@/typings'
import { type BaseExtra, type GetListParam, bpost } from './api'
interface User extends DbBaseField { }
/**
 * tpl
 */
export interface Tpl extends DbBaseField {
  uid: User['id']
}

type Model = Tpl
type FilterKeys = 'search' | 'id' | 'ctime'
type OrderKeys = 'id' | 'ctime'
type Scene = 'admin' | 'default'
interface QueryExtra extends BaseExtra<Scene> { }
type ActGetListParam = GetListParam<FilterKeys, OrderKeys, QueryExtra>
const route = '/tpl'
type AddData = Omit<Model, 'id'>
type EditData = AddData & Pick<Model, 'id'>

export async function list<T = Model>(data: ActGetListParam) {
  return bpost<T[]>({
    url: `${route}/list`,
    data,
  })
}
export async function detail<T = Model>(data: { id: number; scene?: Scene }) {
  return bpost<T>({
    url: `${route}/detail`,
    data,
  })
}
export async function add(data: AddData) {
  return bpost({
    url: `${route}/add`,
    data,
  })
}
export async function edit(data: EditData) {
  return bpost({
    url: `${route}/edit`,
    data,
  })
}
export async function del(ids: Model['id'][]) {
  return bpost({
    url: `${route}/del`,
    data: {
      ids,
    },
  })
}
