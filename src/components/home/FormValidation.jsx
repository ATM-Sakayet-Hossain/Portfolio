import React from "react";
import { SlLocationPin } from "react-icons/sl"
import UserInformation from "../Utils/UserInformation"
import { MdMailOutline } from "react-icons/md"
import { LuPhoneCall } from "react-icons/lu"

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
                  <MdMailOutline />
                </span>
                <div>
                  <small className="font-poppins font-normal text-lg text-secondary">
                    My Email:
                  </small>
                  <p className="font-poppins font-semibold text-lg text-praimary ">
                    mymail@mail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-6 hover:bg-white hover:shadow-xl rounded-[10px]">
                <span className="px-4 py-3.5 text-2xl text-band hover:text-white bg-[#EDD8FF] hover:bg-band rounded-sm">
                  <LuPhoneCall />
                </span>
                <div>
                  <small className="font-poppins font-normal text-lg text-secondary">
                    Call Me Now:
                  </small>
                  <p className="font-poppins font-semibold text-lg text-praimary ">
                    00-1234 00000
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
            <UserInformation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormValidation;
