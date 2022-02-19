import { OssPolicyToken, Region } from '@/typings'
import { ConditionType } from '@/utils/constant'
import { bget, bpost, LocalStorage as storage } from '@utils/jsbdk'
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
  F extends string = any,
  O extends string = DefaultOrderKeys,
  E extends BaseExtra<any> = BaseExtra<DefaultScene>,
> {
  page?: number
  limit?: number
  filter?: Partial<Record<F, { condition: ConditionType; val: FilterVal }>>
  order?: Partial<Record<O, 'desc' | 'asc'>>
  extra?: Partial<E> // 扩展用来放一些其他参数 比如withSubUsers:true,表示带上所有的子用户
}

export async function getRegion() {
  if (storage.has('region')) {
    let res: { data: { region: Region[] } } = { data: { region: storage.get('region') } }
    return res
  }
  return bpost<{ region: Region[] }>({ url: '/getRegion' })
}
// 获取obj-url 图片的blob数据
export function getBlobFromObjectUrl(url: string) {
  return new Promise<Blob>((s, j) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (this.status === 200) {
        let blob = this.response
        s(blob)
      }
    }
    xhr.onerror = () => {
      j('get Object.Url failed')
    }
    xhr.send()
  })
}
interface BraftMediaUploadFnParam {
  file: File
  progress: (progress: number) => void
  libraryId: string
  success: (res: {
    url: string
    meta: {
      id: string
      title: string
      alt: string
      loop: boolean
      autoPlay: boolean
      controls: boolean
      poster: string
    }
  }) => void
  error: (err: { msg: string }) => void
}

export const notLimit = 0
export { bget }
export { bpost }
