import { defineType, defineField } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const performance = defineType({
  name: 'performance',
  title: 'Performance',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "40 minutes" or "25–40 minutes"',
    }),
    defineField({
      name: 'translations',
      title: 'Bible Translations Used',
      type: 'string',
      description: 'e.g. NET, NIV, ESV',
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID — e.g. LzF0Aym-APM (not the full URL)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Poster Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the Performances page',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      media: 'image',
    },
    prepare({ title, order, media }) {
      return {
        title: title || 'Untitled',
        subtitle: order !== undefined ? `Order: ${order}` : '',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
