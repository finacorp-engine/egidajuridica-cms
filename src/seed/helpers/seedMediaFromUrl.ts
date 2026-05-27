import type { Payload } from 'payload'

const mediaCache = new Map<string, string>()

export const getMediaCache = () => mediaCache

export const seedMediaFromUrl = async (
  payload: Payload,
  key: string,
  url: string,
  alt: string,
): Promise<string> => {
  const cached = mediaCache.get(key)
  if (cached) return cached

  const existing = await payload.find({
    collection: 'media',
    where: {
      alt: {
        equals: alt,
      },
    },
    limit: 1,
  })

  if (existing.docs[0]?.id) {
    mediaCache.set(key, existing.docs[0].id)
    return existing.docs[0].id
  }

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`No se pudo descargar la imagen ${url}: ${response.status}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.includes('png') ? 'png' : 'jpg'
  const filename = `${key}.${extension}`

  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    file: {
      data: buffer,
      mimetype: contentType,
      name: filename,
      size: buffer.length,
    },
  })

  mediaCache.set(key, doc.id)
  return doc.id
}

export const imageWithAlt = (mediaId: string, alt: string) => ({
  image: mediaId,
  alt,
})
