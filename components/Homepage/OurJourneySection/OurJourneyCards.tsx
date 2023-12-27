import Image from "next/image";
import journeyimage_1 from "@/public/assets/our_journey.jpg";
import journeyimage_2 from "@/public/assets/oj2.jpg";
import journeyimage_3 from "@/public/assets/oj3.jpg";
import journeyimage_4 from "@/public/assets/oj4.jpg";
import journeyimage_5 from "@/public/assets/oj5.jpg";

export default function OurJourneyCards() {
  return (
    <>
      <div className="w-full md:h-3/4 col-span-1 row-start-1 row-end-3 self-end aspect-[2/3] max-h-full max-w-full hidden lg:block">
        <div className="aspect-[2/3]">
          <Image
            className="inset-0 h-full w-full object-cover rounded-md"
            src={journeyimage_1}
            alt=""
          />
        </div>
      </div>
      <div className="relative top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-1 md:row-end-2 self-end grid">
        <div className="aspect-[2/3]">
          <Image
            className="inset-0 h-full w-full object-cover rounded-md"
            src={journeyimage_2}
            alt=""
          />
        </div>
      </div>
      <div className="relative -top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
        <div className="aspect-[2/3]">
          <Image
            className="inset-0 h-full w-full object-cover rounded-md"
            src={journeyimage_3}
            alt=""
          />
        </div>
      </div>
      <div className="relative -top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-1 row-end-2 self-end grid">
        <div className="aspect-[2/3]">
          <Image
            className="inset-0 h-full w-full object-cover rounded-md"
            src={journeyimage_4}
            alt=""
          />
        </div>
      </div>
      <div className="relative top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
        <div className="aspect-[2/3]">
          <Image
            className="inset-0 h-full w-full object-cover rounded-md"
            src={journeyimage_5}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
