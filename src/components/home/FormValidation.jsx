import React from "react";
import { SlLocationPin } from "react-icons/sl"

const FormValidation = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between p-22 bg-white rounded-2xl shadow-2xl">
          <div className="w-150">
            <h2 className="heading">Let’s discuss your Project</h2>
            <p className="secondary w-120">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="py-9 grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-6 hover:bg-white hover:shadow-xl rounded-[10px]">
                <span className="px-4 py-3.5 text-2xl text-band hover:text-white bg-[#EDD8FF] hover:bg-band rounded-sm">
                  <SlLocationPin />
                </span>
                <div>
                  <small className="font-poppins font-normal text-lg text-secondary">
                    Address:
                  </small>
                  <p className="font-poppins font-semibold text-lg text-praimary ">
                    New Mexico 31134
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-6 hover:bg-white hover:shadow-xl rounded-[10px]">
                <span className="px-4 py-3.5 text-2xl text-band hover:text-white bg-[#EDD8FF] hover:bg-band rounded-sm">
                  <SlLocationPin />
                </span>
                <div>
                  <small className="font-poppins font-normal text-lg text-secondary">
                    Address:
                  </small>
                  <p className="font-poppins font-semibold text-lg text-praimary ">
                    New Mexico 31134
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-6 hover:bg-white hover:shadow-xl rounded-[10px]">
                <span className="px-4 py-3.5 text-2xl text-band hover:text-white bg-[#EDD8FF] hover:bg-band rounded-sm">
                  <SlLocationPin />
                </span>
                <div>
                  <small className="font-poppins font-normal text-lg text-secondary">
                    Address:
                  </small>
                  <p className="font-poppins font-semibold text-lg text-praimary ">
                    New Mexico 31134
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-140">
            <p className="secondary pb-12.5 ">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form className="grid grid-cols-1">
              <input type="text" placeholder="Name" required className="py-2 pl-4 broder-b-1" />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Location" />
              <div className="grid grid-cols-2">
                <input type="text" placeholder="Budget" required />
                <input type="text" placeholder="Subject" required />
              </div>
              <input type="text" placeholder="Message" required />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormValidation;
