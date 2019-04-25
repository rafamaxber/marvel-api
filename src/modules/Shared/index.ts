interface Thumbnail {
  path: string
  extension: string
}

export function translateThumbnail (data: Thumbnail): string {
  if (!data || !data.path) {
    return ''
  }

  return `${data.path}.${data.extension}`
}
