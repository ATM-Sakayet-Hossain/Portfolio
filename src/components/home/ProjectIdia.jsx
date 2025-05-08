import React from "react";
import BtnSecondary from "../Utils/BtnSecondary";
import { FaArrowRight } from "react-icons/fa";

const ProjectIdia = () => {
  return (
    <section className="py-25 bg-praimary">
      <div className="container flex flex-col items-center ">
        <h2 className="w-155 font-workSans font-semibold text-5xl text-white">
          Do you have Project Idia? Let's discuss your project!
        </h2>
        <p className="w-135 text-center py-8 font-workSans font-normal text-lg text-secondary">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <BtnSecondary path="/" title="Let’s work Together">
          <FaArrowRight />
        </BtnSecondary>
      </div>
    </section>
  );
};

export default ProjectIdia;
