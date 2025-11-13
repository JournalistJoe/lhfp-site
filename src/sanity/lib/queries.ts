import { groq } from 'next-sanity'

export const CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    projectUrl,
    services,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }
`

export const CASE_STUDY_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    projectUrl,
    services,
    excerpt,
    problem,
    observation,
    solution,
    results,
    testimonial,
    technologies,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }
`

export const BLOG_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title,
      slug,
      color
    },
    tags,
    publishedAt,
    readingTime,
    featured
  }
`

export const BLOG_POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      name,
      slug,
      image,
      bio,
      role,
      social
    },
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title,
      slug,
      color
    },
    tags,
    publishedAt,
    body,
    readingTime
  }
`

export const FEATURED_POSTS_QUERY = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title,
      slug,
      color
    },
    publishedAt,
    readingTime
  }
`