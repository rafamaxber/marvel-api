import axios from 'axios'
import { BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from '../../config/constants'
import MarvelApi from '../../services/MarvelApi'

const clientHttpInstance = axios.create({
  baseURL: BASE_URL
})

export const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY
})

export const translateThumbnail = data => {
  if (!data || !data.path) {
    return ''
  }
  return `${data.path}.${data.extension}`
}
