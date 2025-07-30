import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-07-30',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}