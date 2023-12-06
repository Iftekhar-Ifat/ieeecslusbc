"use-client";

import ActivityBanner from "./ActivityBanner";
import ActivityCards from "./ActivityCards";
export default function ActivitySection() {
  return (
    <div className="mb-16 mx-6 lg:mx-40">
      <h1 className="text-4xl text-[#045C99] font-bold text-center">
        Our Activities
      </h1>
      <ActivityBanner />
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 items-center justify-center">
          <ActivityCards />
        </div>
      </div>
    </div>
  );
}
