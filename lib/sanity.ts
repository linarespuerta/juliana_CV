import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'km3k177u', // Replaced with generated ID
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
