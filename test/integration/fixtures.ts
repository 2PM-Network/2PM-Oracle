import nock from 'nock'


export const mockResponseSuccess = (): nock.Scope =>
    nock('http://47.236.156.45:6700', {
      encodedQueryParams: true,
    })
      .get('/v1/model/predict/20')
      .query({data: "[1.0, 2.0, 3.0]", tx:"saashfasofhasfasfasf"})
      .reply(200, () => ({
        "inferenceResult": 1
    }), [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ])
      .persist()

