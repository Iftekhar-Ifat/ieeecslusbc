"use-client";
import Image from "next/image";
import { achievementCardData } from "@/components/data/AchievementCardsData";

export default function AchievementSection() {
  return (
    <div className="mb-16 mx-6 lg:mx-40">
      <h1 className="text-4xl text-[#045C99] font-bold text-center mb-3">
        Achievements
      </h1>

      <div className="flex flex-col lg:flex-row gap-2">
        {achievementCardData.map((card) => (
          <div
            key={card.id}
            className="card sm:w-4/4 lg:w-1/4 bg-[rgb(4,92,153)] shadow-xl"
          >
            <figure className="px-10 pt-10">
              <Image src={card.img} alt="card-icon" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
