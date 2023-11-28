"use client";

import AchievementSection from "@/components/Homepage/Achievement";
import ActivitySection from "@/components/Homepage/ActivitySection";
import HeroSection from "@/components/Homepage/HeroSection";
import IntroSection from "@/components/Homepage/IntroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ActivitySection />
      <AchievementSection />
    </>
  );
}
