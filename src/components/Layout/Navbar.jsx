import React from "react";
import { Link } from "react-router";
import BtnPrimary from "../Utils/BtnPrimary"

const Navbar = () => {
  return (
    <>
      <nav className="py-5 bg-white">
        <div className="container flex justify-between items-center">
          <div className="">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="flex">
            <ul className="flex items-center">
              <li>
                <Link to="/" className="py-3 px-6 font-workSans">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="py-3 px-6 font-workSans ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="py-3 px-6 font-workSans ">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/protfolio" className="py-3 px-6 font-workSans ">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-3 px-6 font-workSans ">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className="py-3 px-6 font-workSans ">
                  Services
                </Link>
              </li>
            </ul>
            <BtnPrimary path="/" title="Contact" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
