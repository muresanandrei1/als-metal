import React from "react";
export default function Section1() {
  return (
    <section id="section-1">
      <div className="aspect-video h-[450px] md:h-[850px] h-full w-full flex items-center justify-center flex-col font-medium tracking-widest bg-[url('/static/hero1.png')] bg-no-repeat bg-top">
        <h1 className="text-white lg:text-6xl md:text-4xl text-3xl">
          ALS Metal-Innovation
        </h1>
        <h2 className="text-white lg:text-4xl md:text-3xl  pt-4 text-xl">
          -CNC Machining -
        </h2>
      </div>
    </section>
  );
}
