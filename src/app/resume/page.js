import Resume from "@/components/Resume";
import React from "react";

export const metadata = {
  title: "Resume",
  description:
    "View Aaditya Paul's professional resume, work experience, education, and technical skills. Full-Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Resume - Aaditya Paul",
    description:
      "View my professional resume, work experience, and technical skills.",
  },
  alternates: {
    canonical: "https://aaditya-paul.in/resume",
  },
};

function Page() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default Page;
