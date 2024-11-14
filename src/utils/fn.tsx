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

function initFaro() {
  if (import.meta.env.DEV) {
    return
  }
  initializeFaro({
    url: faroUrl,
    app: {
      name: faroAppName,
      version: import.meta.env.VITE_COMMIT_ID.substring(0, 8),
      environment: import.meta.env.MODE,
    },
    sessionTracking: {
      samplingRate: 1,
      persistent: true,
    },
    instrumentations: [
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
