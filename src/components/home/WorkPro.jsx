import React from "react";

const WorkPro = ({ icon, title, pera }) => {
  return (
    <div className="w-78 bg-white p-[32px] rounded-[12px] shadow-xl ">
      <div className="w-[72px] bg-band p-[20px] rounded-[6px] text-3xl text-white " >{icon}</div>
      <h2 className="text-[20px] font-semibold text-praimary pt-[32px] pb-[12px] font-workSans ">
        {title}
      </h2>
      <p className="text-[16px] font-normal text-secondary font-workSans ">
        {pera}
      </p>
    </div>
  );
};

export default WorkPro;
