"use client";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section>
      <div className="w-full h-full flex justify-center items-center">
        <img
          src="/animation_circle_small_5.gif"
          alt="loading animation"
          className="h-[30px] w-[30px]"
        />
        <p className="text-white">Loading</p>
      </div>
    </section>
  );
}
