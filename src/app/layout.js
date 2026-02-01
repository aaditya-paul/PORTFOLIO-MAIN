import {
  Geist,
  Geist_Mono,
  Fira_Code,
  Poppins,
  Roboto,
  Ubuntu,
  Playwrite_IN,
} from "next/font/google";
import "./globals.css";
import { generatePersonSchema, generateWebsiteSchema } from "./schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const playwriteIN = {
//   variable: "--font-playwrite",
// };

const playwrite = Playwrite_IN({
  variable: "--font-playwrite",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aaditya-paul.in"), // Update with your actual domain
  title: {
    default: "Aaditya Paul | Full-Stack Developer Portfolio",
    template: "%s | Aaditya Paul",
  },
  description:
    "Portfolio of Aaditya Paul, Full-Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience in React, Next.js, Node.js, and more.",
  keywords: [
    "Aaditya Paul",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Aaditya Paul" }],
  creator: "Aaditya Paul",
  publisher: "Aaditya Paul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aaditya-paul.in",
    title: "Aaditya Paul | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Aaditya Paul, Full-Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience.",
    siteName: "Aaditya Paul Portfolio",
    images: [
      {
        url: "/preview/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Aaditya Paul - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Paul | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Aaditya Paul, Full-Stack Developer specializing in modern web technologies.",
    creator: "@aadityapaul", // Update with your Twitter handle
    images: ["/preview/og-image.jpg"], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  links: [
    {
      href: "https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap",
      rel: "stylesheet",
    },
  ],
};

export default function RootLayout({ children }) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${poppins.variable} ${roboto.variable} ${ubuntu.variable} antialiased`}
        style={{ "--font-playwrite": "'Playwrite IN', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
