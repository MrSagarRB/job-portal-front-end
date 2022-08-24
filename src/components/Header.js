import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-full bg-[#fff] flex items-center  justify-between custom-px border shadow-sm">
      <div>
        <Link to="/">
          <p className="text-[#338573] text-[28px] font-semibold">
            {" "}
            Job Portal
          </p>
        </Link>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <Link to="/login">
          <p className="text-[18px] text-[#338573] font-semibold">Login</p>
        </Link>
        <Link to="/create-job">
          <button className="custom-btn text-[18px] ">Post a job</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
