import { groq } from 'next-sanity'

// Get all posts (events)
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage{
      ...,
      asset->
    },
    publishedAt
  }
`

// Get latest 3 posts for homepage Events section
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage{
      ...,
      asset->
    },
    publishedAt
  }
`

// Get single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    mainImage{
      ...,
      asset->
    },
    publishedAt
  }
`

// Get footer settings
export const footerSettingsQuery = groq`
  *[_type == "footerSettings"][0] {
    contactEmail,
    contactPhone,
    contactAddress,
    socialFacebook,
    socialInstagram,
    socialLinkedIn,
    socialTelegram
  }
`

// Get scholarships page content
export const scholarshipsPageQuery = groq`
  *[_type == "scholarshipsPage"][0] {
    title,
    subtitle,
    aboutTitle,
    aboutDescription1,
    aboutDescription2,
    criteriaTitle,
    criteria[] {
      title,
      description
    },
    statusTitle,
    statusDescription,
    statusCta
  }
`

// Get peer groups page content
export const peerGroupsPageQuery = groq`
  *[_type == "peerGroupsPage"][0] {
    title,
    subtitle,
    howItWorksTitle,
    howItWorksDescription,
    features[] {
      title,
      description
    },
    topicsTitle,
    topicsDescription,
    topics[] {
      title,
      description
    },
    ctaTitle,
    ctaDescription,
    ctaButtonText
  }
`

// Get club page content
export const clubPageQuery = groq`
  *[_type == "clubPage"][0] {
    title,
    subtitle,
    whatTitle,
    whatDescription1,
    whatDescription2,
    typesTitle,
    activityTypes[] {
      title,
      description,
      items
    },
    benefitsTitle,
    benefits[] {
      title,
      description
    },
    ctaTitle,
    ctaDescription,
    ctaTelegramText,
    ctaIdeasText
  }
`
