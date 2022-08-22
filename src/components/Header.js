import React from "react";

const Header = () => {
  return (
    <div className="h-full bg-[#fff] flex items-center  justify-between custom-px border shadow-sm">
      <div>
        {" "}
        <p className="text-[#338573] text-[28px] font-semibold"> Job Portal</p>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <p className="text-[18px] text-[#338573] font-semibold">Login</p>
        <button className="custom-btn text-[18px] ">Post a job</button>
      </div>
    </div>
  );
};

export default Header;
