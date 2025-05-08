import React, { Children } from "react";
import { Link } from "react-router";

const BtnSecondary = ({ path, title, children }) => {
  return (
    <Link
      to={path}
      className="w-fit py-3 px-6 border-2 outline-band  text-band hover:text-white hover:bg-band text-base font-semibold font-workSans rounded-sm flex! items-center gap-3"
    >
      <span>{title}</span>
      {children}
    </Link>
  );
};

export default BtnSecondary;
