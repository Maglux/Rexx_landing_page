import React from "react";

const Loading = async () => {
  return (
    <section className="bg-black overflow-hidden h-[100vh] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center flex-col gap-4">
        <img
          src="/animation_circle_small_5.gif"
          alt="loading animation"
          className="h-[30px] w-[30px]"
        />
        <p className="text-white">Loading...</p>
      </div>
    </section>
  );
};

export default Loading;
