import FeaturedActivity from "@/components/ActivityPage/FeaturedActivity";

export default function Activity() {
  return (
    <>
      <div className="mx-6 lg:mx-52">
        <h1 className="flex justify-center my-2 text-[#045C99] font-bold capitalize text-6xl">
          Activities
        </h1>
        <FeaturedActivity />
      </div>
    </>
  );
}
