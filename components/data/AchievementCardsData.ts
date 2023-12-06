import research_icon from "@/public/assets/icon _researchgate square_.svg";
import trophy_icon from "@/public/assets/trophy.svg";
import camera_icon from "@/public/assets/icon _photo camera_.svg";
import best_branch_icon from "@/public/assets/icon _best practices_.svg";
import globe_icon from "@/public/assets/icon _international_.svg";
import { StaticImageData } from "next/image";

type AchievementCardDataType = {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
};

export const achievementCardData: AchievementCardDataType[] = [
  {
    id: 1,
    title: "Research Papers",
    description: "15 accepted papers & 10 on going papers",
    img: research_icon,
  },
  {
    id: 2,
    title: "Competitive Programming",
    description: "IEEEXtream-14 Champion Bangladesh Section",
    img: trophy_icon,
  },
  {
    id: 3,
    title: "Photo Contest",
    description: "IEEE Day Photo Contest Winner 2023",
    img: camera_icon,
  },
  {
    id: 4,
    title: "Best Student Branch",
    description: "Best student branch 2022",
    img: best_branch_icon,
  },
  {
    id: 5,
    title: "International Conference",
    description: "Our Advisor joining the re-known conference in Malaysia",
    img: globe_icon,
  },
];
