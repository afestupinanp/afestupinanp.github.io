const BASE_URL = 'https://afestupinanp.pages.dev';

export const useSchema = (schema: Record<string, unknown> | Record<string, unknown>[]) => {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const script = schemas.map((s) => JSON.stringify(s, null, 2)).join('\n');
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: script,
        key: `schema-${schemas[0]?.['@type'] ?? 'custom'}`,
      },
    ],
  });
}

export const createWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Andrés Felipe Estupiñan Peláez',
    alternateName: 'Andrés Peláez',
    url: BASE_URL,
    description: 'Personal portfolio and blog of Andrés Felipe Estupiñan Peláez, a software engineer.',
    inLanguage: ['en-US', 'es-ES'],
  };
}

export const createPersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrés Felipe Estupiñan Peláez',
    givenName: 'Andrés Felipe',
    familyName: 'Estupiñan Peláez',
    alternateName: 'Andrés Peláez',
    url: BASE_URL,
    jobTitle: 'Full Stack Software Developer',
    knowsAbout: [
      'JavaScript', 'TypeScript', 'Java', 'PHP', 'C#', 'Python', 'Go',
      'Laravel', 'Vue.js', 'Nuxt', 'React', 'Docker',
      'GitLab CI/CD', 'GitHub Actions', 'MySQL', 'PostgreSQL', 'MongoDB',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Nacional Abierta y a Distancia (UNAD)',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Servicio Nacional de Aprendizaje (SENA)',
      },
    ],
    worksFor: [
      { '@type': 'Organization', name: 'Leanware' },
      { '@type': 'Organization', name: 'Priverion' },
      { '@type': 'CollegeOrUniversity', name: 'Universidad Santiago de Cali' },
    ],
  };
}

export const createProfilePageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'About Me - Andrés Peláez',
    description: 'Get to know Andrés Felipe Estupiñan Peláez, learn how his career began and his academic titles.',
    url: `${BASE_URL}/about`,
    mainEntity: createPersonSchema(),
  };
}

export const createBlogPostingSchema = (post: {
  title: string;
  description: string;
  path: string;
  date?: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}${post.path}`,
    ...(post.date && { datePublished: post.date }),
    ...(post.image?.startsWith('http') ? { image: post.image } : {}),
    author: {
      '@type': 'Person',
      name: 'Andrés Felipe Estupiñan Peláez',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Andrés Felipe Estupiñan Peláez',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${post.path}`,
    },
  };
}

export const createBreadcrumbSchema = (items: { name: string; path: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export const createBlogSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Andrés Peláez - Blog',
    description: 'Exploring personal topics and engineering.',
    url: `${BASE_URL}/blog`,
  };
}
