import React from "react";

const Banner = ({ onCreateClick }) => {
  
  const date = new Date();
  
  return (
    <section className="w-full max-w-7xl h-35 sm:h-45 rounded-4xl mx-auto overflow-hidden flex justify-center items-center gap-2.5 sm:gap-5 sticky top-5 z-80">
      
      {/* date card */}
      <div className="h-full aspect-square rounded-4xl bg-(--accent-col) shadow-2xl flex flex-col items-center justify-center text-(--txt-headline-col) select-none text-center">
        <span className="text-5xl font-light leading-none">
          {date.toLocaleString("en-US", { month: "short" })}
        </span>
        <span className="text-7xl sm:text-8xl font-black leading-none ">
          {date.getDate()}
        </span>
      </div>

      <div className="w-full h-full rounded-4xl flex flex-col justify-center items-center backdrop-blur-3xl shadow-2xl relative overflow-hidden">
        <img
          src="/silk.jpg"
          alt=""
          className="w-full h-full absolute top-0 left-0 object-bottom-right sm:object-bottom object-cover"
        />

        {/* banner title */}
        <h1 className=" text-2xl sm:text-4xl text-(--txt-headline-col) select-none font-semibold tracking-tighter leading-none sm:leading-tight relative z-10 text-center p-2.5">
          What's on your mind?
        </h1>

        {/* cta btn */}
        <button
          onClick={onCreateClick}
          className="p-1.5 sm:p-2.5 bg-(--accent-col) font-bold tracking-tight leading-tight text-(--txt-headline-col) rounded-lg cursor-pointer select-none relative z-20 shadow-lg text-base sm:text-xl"
        >
          Create Note
        </button>
      </div>
    </section>
  );
};

export default Banner;
