import { defineType, defineField } from 'sanity'
import { MicrophoneIcon } from '@sanity/icons'

export const interview = defineType({
  name: 'interview',
  title: 'Interview',
  type: 'document',
  icon: MicrophoneIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform / Show',
      type: 'string',
      description: 'e.g. Moody Radio, Scripture Memory Podcast, Generations Radio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube Video', value: 'youtube' },
          { title: 'External Link (audio/web)', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID — e.g. e79dXsKfhK8',
      hidden: ({ parent }) => parent?.mediaType !== 'youtube',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'external',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used for external (non-YouTube) interviews',
      hidden: ({ parent }) => parent?.mediaType !== 'external',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      platform: 'platform',
      media: 'thumbnail',
    },
    prepare({ title, platform, media }) {
      return {
        title: title || 'Untitled',
        subtitle: platform || '',
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
