import React from "react";
import WorkPro from "../components/home/WorkPro";
import { LuNotepadText } from "react-icons/lu";
import { GoGraph, GoPencil } from "react-icons/go";
import { CiLaptop } from "react-icons/ci";


const Process = () => {
  return (
    <section className="bg-[rgba(240,241,243,0.6)] ">
      <div className="container pt-[248px] pb-35 flex items-center justify-between">
        {/* pt-[240px] */}
        <div>
          <h2 className="text-[48px] text-praimary font-semibold">
            Work Process
          </h2>
          <p className="w-[529px] text-lg font-workSans text-praimary font-normal pt-6 pb-[16px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet, <br /> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
            varius eget velit non.
          </p>
        </div>
        <div className="flex justify-between gap-[24px] ">
          <div className="flex flex-col gap-[24px] ">
            <WorkPro
              icon={<LuNotepadText />}
              title="1. Research"
              pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkPro
              icon={<GoPencil />}
              title="3. Design"
              pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </div>
          <div className="flex flex-col gap-[24px] pt-6">
            <WorkPro
              icon={<GoGraph />}
              title="2. Analyze"
              pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkPro
              icon={<CiLaptop />}
              title="4. Launch"
              pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
