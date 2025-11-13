import { client } from '@/src/sanity/client'
import { BLOG_POST_QUERY } from '@/src/sanity/lib/queries'
import { urlFor } from '@/src/sanity/client'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag, GithubLogo, Globe, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { BlogPost } from '@/src/sanity/types'
import { portableTextComponents } from '@/components/portable-text'

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  )
  return posts.map((post) => ({ slug: post.slug.current }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(BLOG_POST_QUERY, {
    slug,
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

  const socialIcons: Record<string, typeof TwitterLogo> = {
    twitter: TwitterLogo,
    linkedin: LinkedinLogo,
    github: GithubLogo,
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
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    width={48}
                    height={48}
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
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={675}
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
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        width={80}
                        height={80}
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