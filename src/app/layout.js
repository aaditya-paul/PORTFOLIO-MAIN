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
  title: "Aaditya Paul",
  description: "Portfolio of Aaditya Paul, Full-Stack Developer",
  icons: {
    icon: [
      {url: "/favicon.ico", sizes: "32x32", type: "image/x-icon"},
      {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
      {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
    ],
    apple: [
      {url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"},
    ],
  },
  links: [
    {
      href: "https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap",
      rel: "stylesheet",
    },
  ],
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${poppins.variable} ${roboto.variable} ${ubuntu.variable} antialiased`}
        style={{"--font-playwrite": "'Playwrite IN', sans-serif"}}
      >
        {children}
      </body>
    </html>
  );
}
