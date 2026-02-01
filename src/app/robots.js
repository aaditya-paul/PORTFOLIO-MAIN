export default function robots() {
  const baseUrl = "https://aadityapaul.com"; // Update with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
