import { withCredentials, apiUrl } from "@/config/prod"
import axios from "axios"

export function iota(): () => number {
  let i = 1
  return () => i++
}
export function iotaStr(): () => string {
  let i = 1
  return () => `${i++}`
}

export function init() {
  // axios.defaults.baseURL = baseUrl
  axios.defaults.baseURL = apiUrl
  axios.defaults.withCredentials = withCredentials
}
