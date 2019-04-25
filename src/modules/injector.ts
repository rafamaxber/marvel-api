import { HttpRest } from '../services/HttpRest'
import MarvelApi from '../services/Marvel/MarvelApi'

const clientHttpInstance = HttpRest.create({
  baseURL: process.env.URL_API
})

export const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey: process.env.PUBLIC_KEY || '',
  privateKey: process.env.PRIVATE_KEY || ''
})
