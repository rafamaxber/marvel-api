/* eslint-disable @typescript-eslint/no-explicit-any */
export { default as Marvel } from './Marvel'
export { default as MarvelApi } from './MarvelApi'

interface Results {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: Date
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  resourceURI: string
  textObjects: []
  urls: []
  variants: []
  series?: Record<string, any>[]
  collections?: []
  collectedIssues?: []
  dates?: []
  prices?: []
  thumbnail?: Record<string, any>[]
  images?: []
  creators?: Record<string, any>[]
  characters?: Record<string, any>[]
  stories?: Record<string, any>[]
  events?: Record<string, any>[]
}

interface Data {
  data: {
    results: Results,
    offset: number
    limit: number
    total: number
    count: number
  }
}

interface Headers {
  etag: string
  'content-type': string
  'content-length': string
  date: Date
  connection: string
}

export interface MarvelStruct {
  data: Data
  config: Record<string, any>
  request: Record<string, any>
  headers: Headers
  statusText: string
  status: number
}

export interface AppResponse {
  results: Results
  offset: number
  limit: number
  total: number
  count: number
  status: number
  statusText: string
  headers: Headers
  config: Record<string, any>
  request: Record<string, any>
}
