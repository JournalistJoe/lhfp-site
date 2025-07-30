export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'x7yc1coz'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn('Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Using default value.')
}