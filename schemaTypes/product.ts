import { defineType, defineField } from 'sanity'
import { BasketIcon } from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Store Product',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'comingSoon',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Coming Soon', value: 'coming_soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. $20.00 — leave blank for Coming Soon products',
      hidden: ({ parent }) => parent?.comingSoon === 'coming_soon',
    }),
    defineField({
      name: 'storeUrl',
      title: 'Store URL',
      type: 'url',
      description: 'Link to purchase page',
      hidden: ({ parent }) => parent?.comingSoon === 'coming_soon',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the store grid',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      status: 'comingSoon',
      media: 'image',
    },
    prepare({ title, price, status, media }) {
      return {
        title: title || 'Untitled',
        subtitle: status === 'coming_soon' ? 'Coming Soon' : price || 'No price set',
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
