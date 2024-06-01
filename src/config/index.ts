import { AdapterConfig } from '@chainlink/external-adapter-framework/config'

export const config = new AdapterConfig(
  {
    // API_KEY: {
    //   description:
    //     'An API key for Data Provider',
    //   type: 'string',
    //   required: false,
    //   sensitive: false,
    // },
    API_ENDPOINT: {
      description:
        'An API endpoint for Data Provider',
      type: 'string',
      default: 'http://47.236.156.45:6700',
    },
    WS_API_ENDPOINT: {
      description:
        'WS endpoint for Data Provider',
      type: 'string',
      default: 'ws://localhost:9090',
    },

  },
)
