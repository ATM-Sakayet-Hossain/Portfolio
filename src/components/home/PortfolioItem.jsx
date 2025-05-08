import React from 'react'
import BtnSecondary from '../Utils/BtnSecondary'
import { FaArrowRight } from 'react-icons/fa'

const PortfolioItem = ({ image, catagory, title, children }) => {
  return (
    <div>
      <img className="w-full" src={image} alt="Portfolio Images" />
      <div className="p-8 bg-white shadow-sm rounded-b-lg ">
        <small className="font-workSans font-medium text-[12px] text-secondary ">
          {catagory}
        </small>
        <h3 className="font-workSans font-semibold text-sm pt-1 pb-3">
          {title}
        </h3>
        <p className="w-90 font-workSans font-normal text-sm pb-5 text-secondary ">
          {children}
        </p>
        <BtnSecondary path="/" title="Case Study">
          <FaArrowRight />
        </BtnSecondary>
      </div>
    </div>
  );
};

export default PortfolioItem
