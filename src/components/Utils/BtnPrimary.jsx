import React from "react";
import { Link } from "react-router"

const BtnPrimary = ({path, title}) => {
    return (
      <Link
        to={path}
        className="py-3 px-6 bg-band text-white text-base font-semibold font-workSans rounded-sm"
      >
        {title}
      </Link>
    );
};

export default BtnPrimary;
