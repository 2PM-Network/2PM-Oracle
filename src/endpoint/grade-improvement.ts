import { AdapterEndpoint } from '@chainlink/external-adapter-framework/adapter'
import { InputParameters } from '@chainlink/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@chainlink/external-adapter-framework/util'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { httpTransport } from '../transport/grade-improvement'

// Input parameters define the structure of the request expected by the endpoint. The second parameter defines example input data that will be used in EA readme
export const inputParameters = new InputParameters({
  data: {
    aliases: [],
    required: true,
    type: 'string',
    description: 'the Inference Input Data for the model',
  },
  tx: {
    aliases: [],
    required: false,
    type: 'string',
    description: 'The on-chain transaction hash for the data',
  },
})
// Endpoints contain a type parameter that allows specifying relevant types of an endpoint, for example, request payload type, Adapter response type and Adapter configuration (environment variables) type
export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  // Endpoint name
  name: 'grade-improvement',
  // Alternative endpoint names for this endpoint
  aliases: [],
  // Transport handles incoming requests, data processing and communication for this endpoint
  transport: httpTransport,
  // Supported input parameters for this endpoint
  inputParameters,
  // Overrides are defined in the `/config/overrides.json` file. They allow input parameters to be overriden from a generic symbol to something more specific for the data provider such as an ID.
  overrides: overrides['2pm-network-logistic-ai-demo']
})
