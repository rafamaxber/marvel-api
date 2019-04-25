/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Marvel } from './'

class MarvelApi extends Marvel {
  public async fetchCharacters (filters = {}) {
    const PATH = '/characters'

    await this.fetch(PATH, filters)
  }

  public async fetchCharactersComics (id: string, filters = {}) {
    const PATH = `/characters/${id}/comics`

    await this.fetch(PATH, filters)
  }
}

export default MarvelApi
