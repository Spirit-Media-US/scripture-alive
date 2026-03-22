import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title / Role',
      type: 'string',
      description: 'e.g. Senior Pastor, Author, Conference Speaker',
    }),
    defineField({
      name: 'authorOrganization',
      title: 'Organization',
      type: 'string',
      description: 'e.g. Cornerstone Church, Moody Publishers',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: 'Show this testimonial in the homepage carousel',
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
      name: 'authorName',
      org: 'authorOrganization',
      quote: 'quote',
    },
    prepare({ name, org, quote }) {
      return {
        title: name || 'Unknown',
        subtitle: org ? `${org} — "${quote?.slice(0, 60)}..."` : `"${quote?.slice(0, 60)}..."`,
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
