import { baseUrl, withCredentials, apiUrl } from '@/config/prod'
import { getRegion } from '@api/api'
import { LocalStorage as storage } from '@utils/jsbdk'
import axios from 'axios'
export enum OssStyle {
  'avatar' = 'avatar',
}

export const styleMapOssStyle: Record<OssStyle, string> = {
  avatar: 'avatar',
}

export function iota(): () => number {
  let i = 1
  return () => i++
}
export function iotaStr(): () => string {
  let i = 1
  return () => i++ + ''
}

export function init() {
  // axios.defaults.baseURL = baseUrl
  axios.defaults.baseURL = apiUrl
  axios.defaults.withCredentials = withCredentials
}

/**
 * 获取图片的完整url
 */
export function getPicFullUrl(url: string): string {
  return url.indexOf('http') === 0 ? url : baseUrl + url
}
