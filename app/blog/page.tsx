'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { client } from '@/src/sanity/client'
import { BLOG_POSTS_QUERY, FEATURED_POSTS_QUERY } from '@/src/sanity/lib/queries'
import { urlFor } from '@/src/sanity/client'
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { BlogPost } from '@/src/sanity/types'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [, setFeaturedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [allPosts, featured] = await Promise.all([
          client.fetch<BlogPost[]>(BLOG_POSTS_QUERY),
          client.fetch<BlogPost[]>(FEATURED_POSTS_QUERY),
        ])
        setPosts(allPosts)
        setFeaturedPosts(featured)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some((cat) => cat.slug.current === selectedCategory)
      )
    : posts

  const allCategories = Array.from(
    new Set(posts.flatMap((post) => post.categories || []))
  ).filter((cat, index, self) => 
    index === self.findIndex((c) => c.slug.current === cat.slug.current)
  )

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

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-primary dark:text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Dispatches from the Stream
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Thoughts on digital strategy, technical solutions, and the occasional fly fishing metaphor.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {allCategories.length > 0 && (
        <section className="relative px-4 pb-12 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-casting-green text-white'
                    : 'bg-surface dark:bg-dark-card text-secondary hover:bg-casting-green/10'
                }`}
              >
                All Posts
              </button>
              {allCategories.map((category) => (
                <button
                  key={category.slug.current}
                  onClick={() => setSelectedCategory(category.slug.current)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.slug.current
                      ? 'bg-casting-green text-white'
                      : 'bg-surface dark:bg-dark-card text-secondary hover:bg-casting-green/10'
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.slug.current && category.color
                        ? category.color
                        : undefined,
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-casting-green">Loading posts...</div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                {selectedCategory
                  ? 'No posts found in this category.'
                  : 'No blog posts available yet.'}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <article className="dark:bg-dark-card/80 dark:ring-dark-border dark:hover:ring-casting-green/50 h-full overflow-hidden rounded-2xl bg-surface backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl dark:ring-1">
                    {post.mainImage && (
                      <div className="aspect-video overflow-hidden bg-gradient-to-br from-stream-blue to-deep-water">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(338).url()}
                          alt={post.title}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <span
                              key={category.slug.current}
                              className="text-xs font-medium px-2 py-1 rounded-full bg-casting-green/10 text-casting-green"
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

                      <h2 className="text-primary dark:text-primary mb-2 text-xl font-bold line-clamp-2 group-hover:text-casting-green transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-secondary mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
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
                        <ArrowRight
                          size={20}
                          className="text-casting-green opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
                        />
                      </div>

                      {/* Author */}
                      <div className="mt-4 pt-4 border-t border-dark-border/20 flex items-center gap-3">
                        {post.author.image && (
                          <Image
                            src={urlFor(post.author.image).width(32).height(32).url()}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <span className="text-sm text-muted-foreground">
                          {post.author.name}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}