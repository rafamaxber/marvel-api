import { translateThumbnail, marvelApi } from '../../Shared'
import { mergeComicsInCharacters } from '../../Comics/resolvers/comics'

const translateCharacter = data => {
  return data.map(item => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      thumbnail: translateThumbnail(item.thumbnail),
      modified: item.modified,
      resourceURI: item.resourceURI,
      urls: item.urls,
      comics: [],
      stories: item.stories.items,
      events: item.events.items,
      series: item.series.items
    }
  })
}

const getCharacter = async args => {
  const characters = await marvelApi
    .fetchCharacters(args)
    .then(data => data.data.data.results)

  return characters.filter(character => character.id === id)[0]
}

const getCharacters = async args => {
  const characters = await marvelApi
    .fetchCharacters(args)
    .then(data => translateCharacter(data.results))
    .then(data => mergeComicsInCharacters(data, args))

  return characters
}

const root = {
  character: getCharacter,
  characters: getCharacters
}

export default root
