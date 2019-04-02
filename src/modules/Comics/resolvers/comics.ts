import { translateThumbnail, marvelApi } from '../../Shared'

export const translateComics = data => {
  return data.map(item => ({
    id: item.id,
    title: item.title,
    author: item.author,
    description: item.description,
    topic: item.topic,
    url: item.url,
    thumbnail: translateThumbnail(item.thumbnail)
  }))
}

export const getCharactersComics = async (id, args) => {
  const charactersComics = await marvelApi
    .fetchCharactersComics(id, args)
    .then(data => translateComics(data.results))

  return charactersComics
}

export const mergeComicsInCharacters = async (characters, args) => {
  return characters.map(async character => {
    try {
      const charactersComics = await getCharactersComics(character.id, args)
      character.comics = charactersComics
    } catch (error) {
      console.log('error => ', error)
    }
    return character
  })
}

export default {
  Query: {
    comics: () => ({}),
    comic: () => ({})
  }
}
