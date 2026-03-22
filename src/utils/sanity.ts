import { sanityClient } from 'sanity:client'
import { defineQuery } from 'groq'

// ── Events ────────────────────────────────────────────────────
export const EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(startDate asc) {
    _id,
    performance,
    workshopIncluded,
    venueName,
    venueCity,
    venueState,
    venueAddress,
    startDate,
    endDate,
    bookingUrl,
    eventSubtitle,
    tags,
    description
  }
`)

export async function getEvents() {
  return sanityClient.fetch(EVENTS_QUERY)
}

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    authorTitle,
    authorOrganization,
    featured,
    order
  }
`)

export const FEATURED_TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    quote,
    authorName,
    authorTitle,
    authorOrganization
  }
`)

export async function getTestimonials() {
  return sanityClient.fetch(TESTIMONIALS_QUERY)
}

export async function getFeaturedTestimonials() {
  return sanityClient.fetch(FEATURED_TESTIMONIALS_QUERY)
}

// ── Performances ──────────────────────────────────────────────
export const PERFORMANCES_QUERY = defineQuery(`
  *[_type == "performance"] | order(order asc) {
    _id,
    title,
    description,
    duration,
    translations,
    youtubeId,
    image,
    order
  }
`)

export async function getPerformances() {
  return sanityClient.fetch(PERFORMANCES_QUERY)
}

// ── Interviews ────────────────────────────────────────────────
export const INTERVIEWS_QUERY = defineQuery(`
  *[_type == "interview"] | order(order asc) {
    _id,
    title,
    platform,
    description,
    mediaType,
    youtubeId,
    externalUrl,
    thumbnail,
    order
  }
`)

export async function getInterviews() {
  return sanityClient.fetch(INTERVIEWS_QUERY)
}

// ── Products ──────────────────────────────────────────────────
export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc) {
    _id,
    title,
    image,
    comingSoon,
    price,
    storeUrl,
    order
  }
`)

export async function getProducts() {
  return sanityClient.fetch(PRODUCTS_QUERY)
}

// ── Blog Posts ────────────────────────────────────────────────
export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    featuredImage
  }
`)

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    featuredImage,
    body
  }
`)

export async function getBlogPosts() {
  return sanityClient.fetch(BLOG_POSTS_QUERY)
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(BLOG_POST_QUERY, { slug })
}

// ── Resources ─────────────────────────────────────────────────
export const RESOURCES_QUERY = defineQuery(`
  *[_type == "resource"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    image,
    pdfUrl,
    order
  }
`)

export async function getResources() {
  return sanityClient.fetch(RESOURCES_QUERY)
}
