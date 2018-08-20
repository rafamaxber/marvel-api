import axios from 'axios'
import { BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from '../../../config/vars'
import MarvelApi from '../../../services/MarvelApi'

const clientHttpInstance = axios.create({
  baseURL: BASE_URL
})

const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY
})

const getCharacter = async args => {
  const characters = await marvelApi
    .fetchCharacters(args)
    .then(data => data.data.data.results)

  return characters.filter(character => character.id === id)[0]
}

const getCharacters = async args => {
  const characters = await marvelApi
    .fetchCharacters(args)
    .then(data => data.data.data.results)

  return characters
}

const root = {
  character: getCharacter,
  characters: getCharacters
}

export default root
