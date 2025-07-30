import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/src/sanity/client'
import { PortableTextImage, PortableTextCode } from '@/src/sanity/types'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: PortableTextImage }) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
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
    code: ({ value }: { value: PortableTextCode }) => {
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
    code: ({ children }) => (
      <code className="bg-dark-card/50 text-casting-green px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value?.href || '#'}
          rel={rel}
          className="text-casting-green hover:underline underline-offset-4"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-primary dark:text-primary mt-12 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-primary dark:text-primary mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-primary dark:text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-primary dark:text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-casting-green pl-6 my-6 text-secondary italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-secondary mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-secondary">
        {children}
      </ol>
    ),
  },
}