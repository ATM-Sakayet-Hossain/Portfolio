import React from "react";
import BtnPrimary from "../Utils/BtnPrimary";
import Experience from "./Experience"

const Banner = () => {
  return (
    <div className="container pt-32 pb-55 flex justify-between">
      <div className="w-1/2 pt-13">
        <h1 className="w-5/6 text-7xl text-praimary font-workSans font-semibold">
          Hello, I’m Brooklyn Gilbert
        </h1>
        <p className="w-5/6 py-6 text-lg text-secondary font-workSans font-normal">
          I'm a Freelance UI/UX Designer and Developer based in London, England.
          I strives to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </p>
        <BtnPrimary path="/" title="Say Hello!" />
        <div className="flex items-center gap-0.5 pt-35">
          <Experience title="15 Y" Exper="Experience" />
          <Experience title="250+" Exper="Project Completed" />
          <Experience title="58" Exper="Happy Client" />
        </div>
      </div>
      <div className="w-[536px] shadow-[0 2 0 0] rounded-3xl">
        <img className="w-full" src="/bannerImg.png" alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
