import { expose, ServerInstance } from '@chainlink/external-adapter-framework'
import { Adapter } from '@chainlink/external-adapter-framework/adapter'
import { config } from './config'
import { gradeImprovement } from './endpoint'

export const adapter = new Adapter({
  //Requests will direct to this endpoint if the `endpoint` input parameter is not specified.
  defaultEndpoint: gradeImprovement.name,
  // Adapter name
  name: '2PM_NETWORK-LOGISTIC-AI-DEMO',
  // Adapter configuration (environment variables)
  config,
  // List of supported endpoints
  endpoints: [gradeImprovement],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
