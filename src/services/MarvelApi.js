import generateMD5Hash from '../helpers/MD5'
import cache from 'memory-cache'

const mcache = new cache.Cache()

class Marvel {
  constructor({ clientHttpInstance, publicKey, privateKey }) {
    if (!clientHttpInstance || !publicKey || !privateKey) {
      throw new Error('Is necessary send all parameters!')
    }
    this.clientHttpInstance = clientHttpInstance
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  getParameters(timestamp = Date.now()) {
    const parameters = `${timestamp}${this.privateKey}${this.publicKey}`
    const hash = generateMD5Hash(parameters)
    return {
      ts: String(timestamp),
      apikey: String(this.publicKey),
      hash
    }
  }
}

class MarvelApi extends Marvel {
  constructor(marvelConfig) {
    super(marvelConfig)
    this.nameApp = 'Marvel'
  }

  templateResponse(response) {
    const results = response.data.data.results
    const offset = response.data.data.offset
    const limit = response.data.data.limit
    const total = response.data.data.total
    const count = response.data.data.count
    const status = response.status
    const statusText = response.statusText
    const headers = response.headers
    const config = response.config
    const request = response.request

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

  fetch(path, filters) {
    const PATH = path
    const CACHE_KEY = `__marvel__${PATH}${JSON.stringify(filters)}`
    const cacheValue = mcache.get(CACHE_KEY)

    if (cacheValue) {
      return Promise.resolve(cacheValue)
    }

    const params = Object.assign({}, this.getParameters(), filters)
    return this.clientHttpInstance
      .get(PATH, {
        params
      })
      .then(response => {
        const templateResponse = this.templateResponse(response)
        mcache.put(CACHE_KEY, templateResponse, 900000)
        return templateResponse
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  fetchCharacters(filters = {}) {
    const PATH = '/characters'
    return this.fetch(PATH, filters)
  }

  fetchCharactersComics(id, filters = {}) {
    const PATH = `/characters/${id}/comics`
    return this.fetch(PATH, filters)
  }
}

export default MarvelApi
