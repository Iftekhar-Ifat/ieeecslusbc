import activity_img from "@/public/assets/Activity_1.jpg";
import { StaticImageData } from "next/image";

type ActivityCardDataType = {
  id: number;
  title: string;
  subtitle: string;
  image_url: StaticImageData;
};

type FeaturedActivityCardDataType = {
  id: number;
  type: string;
  card_data: ActivityCardDataType[];
};

export const featuredActivityCardData: FeaturedActivityCardDataType[] = [
  {
    id: 1,
    type: "research",
    card_data: [
      {
        id: 1,
        title: "Developing Advanced Security Professionals",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
      {
        id: 2,
        title: "Developing Advanced Security Professionals",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
      {
        id: 3,
        title: "Developing Advanced Security Professionals",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
    ],
  },
  {
    id: 2,
    type: "android",
    card_data: [
      {
        id: 1,
        title: "Flutter Bootcamp 2022",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
      {
        id: 2,
        title: "Flutter Bootcamp 2022",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
      {
        id: 3,
        title: "Flutter Bootcamp 2022",
        subtitle:
          "Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.",
        image_url: activity_img,
      },
    ],
  },
];
