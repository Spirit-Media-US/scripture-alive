import { defineType, defineField } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'performance',
      title: 'Performance / Program',
      type: 'string',
      description: 'What Jeremy will be performing at this event',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workshopIncluded',
      title: 'Workshop Included?',
      type: 'string',
      options: {
        list: [
          { title: 'No workshop', value: 'none' },
          { title: 'Workshop included', value: 'workshop' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'venueName',
      title: 'Venue Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venueCity',
      title: 'City',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venueState',
      title: 'State / Region',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'Leave blank for single-day events',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Event URL',
      type: 'url',
      description: 'Optional link for more info or registration',
    }),
  ],
  preview: {
    select: {
      performance: 'performance',
      venue: 'venueName',
      city: 'venueCity',
      date: 'startDate',
    },
    prepare({ performance, venue, city, date }) {
      const d = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'No date'
      return {
        title: performance || 'Untitled Event',
        subtitle: `${d} — ${venue || ''}, ${city || ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date (upcoming first)',
      name: 'dateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
  ],
})
