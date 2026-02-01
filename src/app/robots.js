export default function robots() {
  const baseUrl = "https://aaditya-paul.in"; // Update with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
