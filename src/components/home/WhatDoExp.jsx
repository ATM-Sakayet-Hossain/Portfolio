import React from 'react'
import BtnPrimary from '../Utils/BtnPrimary'

const WhatDoExp = () => {
  return (
    <section className="bg-[#F0F1F3] py-37">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="heading">What I do?</h2>
            <div className="secondary w-132 pt-6 pb-12">
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
            </div>
            <BtnPrimary path="/" title="Say Hello!" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="w-162 p-8 bg-white rounded-md shadow-xl ">
              <h3 className="font-poppins font-semibold text-2xl text-nav pb-4">
                User Experience (UX)
              </h3>
              <p className="font-poppins font-normal text-base text-[#787878]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="w-162 p-8 bg-white rounded-md shadow-xl ">
              <h3 className="font-poppins font-semibold text-2xl text-nav pb-4">
                User Interface (UI)
              </h3>
              <p className="font-poppins font-normal text-base text-[#787878]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="w-162 p-8 bg-white rounded-md shadow-xl ">
              <h3 className="font-poppins font-semibold text-2xl text-nav pb-4">
                Web Development
              </h3>
              <p className="font-poppins font-normal text-base text-[#787878]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatDoExp
