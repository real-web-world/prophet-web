import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { localStoragePrefix } from '@/config/prod'
export const JsonReturnCode = {
  success: 0x0,
}
export function delay(time: number) {
  return new Promise(s => setTimeout(s, time))
}
export interface DbBase {
  id: number
  ctime: string
  utime: string
  dtime: string
}

export interface SQLRecord {
  sql: string
  level: string
  currTime: string
  source: string
  execTime: string
  affectRows: number
  others: any
}
export interface JsonResExtra<T = any> {
  reqID: string // 本次请求id
  sqls: SQLRecord[]
  procTime: string // 处理时长
  tempData: T // 其他数据
}
export interface JsonRes<T = unknown, D = any> {
  code: number
  data: T
  page?: number
  limit?: number
  count?: number
  msg?: string
  extra?: JsonResExtra<D>
}
export async function rawReq<T = any>(param: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  param.headers = param.headers || {}
  if (LocalStorage.has('token')) {
    param.headers.token = LocalStorage.get('token')
  }
  return new Promise<AxiosResponse<T>>((s, j) => {
    axios
      .request<T>(param)
      .then(data => {
        s(data)
      })
      .catch(err => j(err))
  })
}
export async function req<T = any>(param: AxiosRequestConfig): Promise<JsonRes<T>> {
  return new Promise((s, j) => {
    const headers: any = {}
    if (LocalStorage.has('token')) {
      headers.token = LocalStorage.get('token')
    }
    axios
      .request<JsonRes<T>>({
        ...param,
        headers,
      })
      .then(resp => {
        if (!isObject(resp.data)) {
          return j({ msg: '返回值不是正确的值', data: resp.data })
        }
        const json = resp.data
        const { code, msg } = json
        if (code !== JsonReturnCode.success) {
          return j({ msg })
        }
        return s(json)
      })
      .catch(e => {
        if (e?.response?.data?.code !== undefined && e?.response?.data?.msg) {
          j({ msg: e.response.data.msg })
        } else {
          console.log(e, e.code, e.msg)
          j({ msg: `网络请求失败,错误信息: ${e}`, data: e })
        }
      })
  })
}

export async function bget<T = any>(param: { url: string; param?: Record<string, any> }) {
  const { url, param: params } = param
  return req<T>({
    method: 'GET',
    url,
    params,
  })
}

export async function bpost<T = any>(param: AxiosRequestConfig) {
  param.method = 'POST'
  return req<T>(param)
}

const localStorage = window.localStorage
const ALL_TIME = 0
export type StorageKey = string | number

export const LocalStorage = {
  set(key: StorageKey, v: any, expire: number = ALL_TIME): void {
    const data = {
      val: v,
      expire,
    }
    if (data.expire !== ALL_TIME) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    const k = typeof key === 'number' ? key.toString() : key
    localStorage.setItem(localStoragePrefix + k, JSON.stringify(data))
  },
  get(key: StorageKey) {
    let data: any
    const now = new Date()
    const k = typeof key === 'number' ? key.toString() : key
    try {
      const res = localStorage.getItem(localStoragePrefix + k)
      if (res === null) {
        return null
      }
      data = JSON.parse(res)
    } catch (e) {
      return null
    }
    if (data === null) {
      return null
    }
    const realData = data.val
    if (data.expire !== ALL_TIME && now > new Date(data.expire)) {
      this.remove(k)
      return null
    }
    return realData
  },
  has(k: StorageKey): boolean {
    return this.get(k) !== null
  },
  remove(key: StorageKey) {
    const k = typeof key === 'number' ? key.toString() : key
    return localStorage.removeItem(localStoragePrefix + k)
  },
  clear() {
    return localStorage.clear()
  },
}

export function isObject(obj: any) {
  return obj != null && typeof obj === 'object' && !Array.isArray(obj);
}