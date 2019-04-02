import axios from 'axios'
import MarvelApi from '../../services/MarvelApi'

const clientHttpInstance = axios.create({
  baseURL: process.env.URL_API
})

export const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
})

export const translateThumbnail = data => {
  if (!data || !data.path) {
    return ''
  }
  return `${data.path}.${data.extension}`
}
