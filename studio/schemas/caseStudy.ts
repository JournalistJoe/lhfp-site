import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project or client website (will be displayed as a dofollow link for SEO)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for preview cards',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'The Problem',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'observation',
      title: 'Observation',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Reading the Water',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'The Solution',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'The Results',
        },
        {
          name: 'metrics',
          title: 'Key Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'metric',
                  title: 'Metric',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'content',
          title: 'Additional Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { client } = selection
      return { ...selection, subtitle: client && `Client: ${client}` }
    },
  },
})