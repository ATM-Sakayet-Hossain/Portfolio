import React from "react";
import BtnPrimary from "../components/Utils/BtnPrimary";
import BtnSecondary from "../components/Utils/BtnSecondary"
import { LuDownload } from "react-icons/lu"
import SocialIcon from "../components/Utils/SocialIcon"

const About = () => {
  return (
    <section>
      <div className="container flex justify-between p-[112px] bg-white rounded-4xl shadow-2xl translate-y-[108px]">
        <div className="w-[424px] h-[468px] bg-[#F0F1F3] rounded-3xl">
          <img className="w-full" src="/about.png" alt="Banner Image" />
          <SocialIcon/>
        </div>
        <div className="w-1/2 pt-[78px] ">
          <h2 className="w-[536px] text-4xl text-praimary font-workSans font-semibold">
            I am Professional User Experience Designer
          </h2>
          <p className="w-[536px] py-6 text-lg text-secondary font-workSans font-normal">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <p className="w-[536px] py-6 text-lg text-secondary font-workSans font-normal">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services.
          </p>
          <div className="flex gap-[16px]">
            <BtnPrimary path="/" title="My Project" />
            <BtnSecondary path="/" title="Download CV">
              <LuDownload/>
            </BtnSecondary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
