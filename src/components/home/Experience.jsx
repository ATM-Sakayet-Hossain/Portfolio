import React from 'react'

const Experience = ({title, Exper}) => {
  return (
    <div className="flex flex-col gap-2 text-center py-4 px-3 bg-bandSecond rounded-sm">
      <h2 className="w-50 text-praimary text-[32px] font-workSans font-semibold">{title}</h2>
      <p className="w-50 text-secondary text-[16px] font-workSans font-normal">{Exper}</p>
    </div>
  );
}

export default Experience
