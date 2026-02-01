export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aaditya Paul',
    url: 'https://aadityapaul.com',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and more.',
    sameAs: [
      'https://github.com/aaditya-paul', // Update with your actual profiles
      'https://linkedin.com/in/aaditya-paul',
      'https://twitter.com/aadityapaul',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Full-Stack Development',
      'Web Development',
      'Frontend Development',
      'Backend Development',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aaditya Paul Portfolio',
    url: 'https://aadityapaul.com',
    description: 'Portfolio of Aaditya Paul, Full-Stack Developer',
    author: {
      '@type': 'Person',
      name: 'Aaditya Paul',
    },
  };
}

export function generateProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Aaditya Paul',
      jobTitle: 'Full-Stack Developer',
      url: 'https://aadityapaul.com',
    },
  };
}
