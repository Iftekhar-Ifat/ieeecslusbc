"use client";

import AchievementSection from "@/components/Homepage/Achievement";
import ActivitySection from "@/components/Homepage/ActivitySection/ActivitySection";
import EndSection from "@/components/Homepage/EndSection";
import HeroSection from "@/components/Homepage/HeroSection";
import IntroSection from "@/components/Homepage/IntroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ActivitySection />
      <AchievementSection />
      <EndSection />
    </>
  );
}
