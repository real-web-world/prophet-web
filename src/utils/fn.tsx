import { withCredentials, apiUrl, faroUrl, faroAppName } from "@/config/prod"
import {
  createReactRouterV6DataOptions,
  getWebInstrumentations,
  initializeFaro,
  ReactIntegration,
} from "@grafana/faro-react"
import { TracingInstrumentation } from "@grafana/faro-web-tracing"
import axios from "axios"
import { matchRoutes } from "react-router-dom"
import meta from "@/../package.json"
export function iota(): () => number {
  let i = 1
  return () => i++
}
export function iotaStr(): () => string {
  let i = 1
  return () => `${i++}`
}
function initAxios() {
  axios.defaults.baseURL = apiUrl
  axios.defaults.withCredentials = withCredentials
}
console.log({
  name: faroAppName,
  version: meta.version,
  environment: import.meta.env.MODE,
  bundleId: import.meta.env.VITE_COMMIT_ID,
})
function initFaro() {
  initializeFaro({
    url: faroUrl,
    app: {
      name: faroAppName,
      version: import.meta.env.VITE_COMMIT_ID ?? "unknown commitID",
      environment: import.meta.env.MODE,
    },
    sessionTracking: {
      samplingRate: 1,
      persistent: true,
    },
    instrumentations: [
      // Mandatory, omits default instrumentations otherwise.
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
      new ReactIntegration({
        router: createReactRouterV6DataOptions({
          matchRoutes,
        }),
      }),
    ],
  })
}
export function init() {
  initAxios()
  initFaro()
}
