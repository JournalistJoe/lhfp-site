import { client } from '@/src/sanity/client'
import { BLOG_POST_QUERY, BLOG_POSTS_QUERY } from '@/src/sanity/lib/queries'
import { urlFor } from '@/src/sanity/client'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag, Github, Globe, Twitter, Linkedin } from '@phosphor-icons/react/dist/ssr'
import { notFound } from 'next/navigation'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: {
    name: string
    slug?: { current: string }
    image?: any
    bio?: string
    role?: string
    social?: {
      twitter?: string
      linkedin?: string
      github?: string
      website?: string
    }
  }
  excerpt: string
  mainImage?: any
  categories: Array<{
    title: string
    slug: { current: string }
    color?: string
  }>
  tags?: string[]
  publishedAt: string
  body: any[]
  readingTime?: number
}

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  )
  return posts.map((post) => ({ slug: post.slug.current }))
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-muted-foreground text-center mt-2">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-dark-card text-muted-foreground text-sm px-4 py-2 rounded-t-lg font-mono">
              {value.filename}
            </div>
          )}
          <pre className={`bg-dark-card text-primary overflow-x-auto p-4 ${value.filename ? 'rounded-b-lg' : 'rounded-lg'}`}>
            <code className="text-sm font-mono">{value.code}</code>
          </pre>
        </div>
      )
    },
  },
  marks: {
    code: ({ children }: any) => (
      <code className="bg-dark-card/50 text-casting-green px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-casting-green hover:underline underline-offset-4"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-primary dark:text-primary mt-12 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-primary dark:text-primary mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-primary dark:text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-primary dark:text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-casting-green pl-6 my-6 text-secondary italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-secondary mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-secondary">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-secondary">
        {children}
      </ol>
    ),
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch<BlogPost>(BLOG_POST_QUERY, {
    slug: params.slug,
  })

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const socialIcons: Record<string, any> = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
    website: Globe,
  }

  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-current-teal/20 animation-delay-2000 absolute bottom-1/3 right-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      <article className="relative">
        {/* Back to Blog */}
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-casting-green transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className="text-sm font-medium px-3 py-1 rounded-full bg-casting-green/10 text-casting-green"
                    style={{
                      backgroundColor: category.color
                        ? `${category.color}20`
                        : undefined,
                      color: category.color || undefined,
                    }}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-primary dark:text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>

            <p className="text-secondary text-xl mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <p className="text-primary dark:text-primary font-medium">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-sm">{post.author.role}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                {post.readingTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="px-4 pb-12 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-stream-blue to-deep-water">
                <img
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-dark-border/20">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={20} className="text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-muted-foreground hover:text-casting-green transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              {post.author.bio && (
                <div className="mt-12 pt-8 border-t border-dark-border/20">
                  <div className="flex gap-4">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image).width(80).height(80).url()}
                        alt={post.author.name}
                        className="w-20 h-20 rounded-full flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-primary dark:text-primary font-semibold text-lg mb-2">
                        About {post.author.name}
                      </h3>
                      <p className="text-secondary mb-3">{post.author.bio}</p>
                      {post.author.social && (
                        <div className="flex gap-3">
                          {Object.entries(post.author.social).map(
                            ([platform, url]) => {
                              if (!url) return null
                              const Icon = socialIcons[platform]
                              return (
                                <a
                                  key={platform}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-casting-green transition-colors"
                                >
                                  <Icon size={20} />
                                </a>
                              )
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}