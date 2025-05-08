import React from 'react'
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SlSocialDribbble } from 'react-icons/sl'
import { TfiFacebook } from 'react-icons/tfi'

const SocialIcon = () => {
  return (
    <div className="w-66 flex p-3 bg-white rounded-sm m-auto shadow-md -translate-y-9 ">
      <span className="w-12 text-[16px] p-[15px] text-band font-semibold hover:text-white hover:bg-band transition-all rounded-sm">
        <TfiFacebook />
      </span>
      <span className="w-12 text-[16px] p-[15px] text-band font-semibold hover:text-white hover:bg-band transition-all rounded-sm">
        <SlSocialDribbble />
      </span>
      <span className="w-12 text-[16px] p-[15px] text-band font-semibold hover:text-white hover:bg-band transition-all rounded-sm">
        <FaInstagram />
      </span>
      <span className="w-12 text-[16px] p-[15px] text-band font-semibold hover:text-white hover:bg-band transition-all rounded-sm">
        <FaLinkedinIn />
      </span>
      <span className="w-12 text-[16px] p-[15px] text-band font-semibold hover:text-white hover:bg-band transition-all rounded-sm">
        <FaBehance/>
      </span>
    </div>
  );
}

export default SocialIcon