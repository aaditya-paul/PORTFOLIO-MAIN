import Prologue from "@/components/Prologue";
import OriginStory from "@/components/OriginStory";
import MissionLog from "@/components/MissionLog";
import SignalBeacon from "@/components/SignalBeacon";
import Epilogue from "@/components/Epilogue";
import ParticleField from "@/components/ParticleField";
import ChapterNav from "@/components/ChapterNav";
import GSAPProvider from "@/components/GSAPProvider";

export const metadata = {
  title: "Home",
  description:
    "Welcome to Aaditya Paul's portfolio. Full-Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and more. View my projects and get in touch.",
  openGraph: {
    title: "Aaditya Paul | Full-Stack Developer",
    description:
      "Welcome to my portfolio. Full-Stack Developer specializing in modern web technologies.",
  },
  alternates: {
    canonical: "https://aaditya-paul.in",
  },
};

export default function Home() {
  return (
    <GSAPProvider>
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
        {/* Fixed ambient background */}
        <ParticleField />
        {/* Chapter navigation */}
        <ChapterNav />
        {/* Story chapters */}
        <main>
          <Prologue />
          <OriginStory />
          <MissionLog />
          <SignalBeacon />
          <Epilogue />
        </main>
      </div>
    </GSAPProvider>
  );
}
