import { MarvelStruct, AppResponse } from './'
import generateMD5Hash from '../../helpers/MD5'
import { AxiosInstance } from 'axios'

interface MarvelConfig {
  clientHttpInstance: AxiosInstance
  publicKey: string
  privateKey: string
}

interface Parameters {
  ts: number
  apikey: string
  hash: string
}

export default class Marvel {
  public readonly nameApp = 'Marvel';
  protected readonly clientHttpInstance: AxiosInstance
  private readonly publicKey: string
  private readonly privateKey: string

  public constructor ({ clientHttpInstance, publicKey, privateKey }: MarvelConfig) {
    if (!clientHttpInstance || !publicKey || !privateKey) {
      throw new Error('Is necessary send all parameters!')
    }
    this.clientHttpInstance = clientHttpInstance
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  protected getParameters (timestamp: number = Date.now()): Parameters {
    const parameters = `${timestamp}${this.privateKey}${this.publicKey}`
    const hash = generateMD5Hash(parameters)

    return {
      apikey: this.publicKey,
      ts: timestamp,
      hash
    }
  }

  protected templateResponse ({ data, config, request, headers, statusText, status }: MarvelStruct): AppResponse {
    const { data: response } = data
    const results = response.results
    const offset = response.offset
    const limit = response.limit
    const total = response.total
    const count = response.count

    return {
      results,
      offset,
      limit,
      total,
      count,
      status,
      statusText,
      headers,
      config,
      request
    }
  }

  protected fetch (path: string, filters: {}): Promise<{}> {
    const params = Object.assign({}, this.getParameters(), filters)
    return this.clientHttpInstance
      .get(path, {
        params
      })
      .then((response: MarvelStruct) => this.templateResponse(response))
      .catch(error => {
        throw new Error(error)
      })
  }
}
