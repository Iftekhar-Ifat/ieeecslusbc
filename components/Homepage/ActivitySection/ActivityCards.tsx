import {
  Briefcase,
  Laptop,
  Microscope,
  Sprout,
  Target,
  Vote,
} from "lucide-react";
import React from "react";
import { activityCardData } from "@/components/data/ActivityCardsData";

export default function ActivityCards() {
  return (
    <>
      {activityCardData.map((card) => (
        <div
          key={card.id}
          className="max-w-sm p-4 bg-[rgba(4,92,153,0.11)] border border-gray-200 rounded-lg shadow hover:scale-105"
        >
          {card.title === "Research Bootcamp" ? (
            <Microscope size={40} />
          ) : card.title === "Election" ? (
            <Vote size={40} />
          ) : card.title === "Workshop" ? (
            <Briefcase size={40} />
          ) : card.title === "Development Bootcamp" ? (
            <Laptop size={40} />
          ) : card.title === "Social Service" ? (
            <Sprout size={40} />
          ) : card.title === "Seminar and Webinars" ? (
            <Target size={40} />
          ) : null}
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {card.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">{card.subtitle}</p>
        </div>
      ))}
    </>
  );
}
