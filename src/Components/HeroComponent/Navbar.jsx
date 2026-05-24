import React from "react";

const Navbar = () => {
  return <div className="h-fit w-screen flex justify-center relative z-999">
    <img className="h-[20vh] w-screen absolute top-0" src="/Hero-assets/navbar.png" alt="" />
    <div className="w-full flex justify-between items-center relative z-10 px-10">
       <img className="h-[10vh] w-[8vw] object-cover" src="/Hero-assets/snow-village.png" alt="" />
       <div className=" text-sm font-bold flex gap-5">
        <h1>Home</h1>
        <h1>About us</h1>
        <h1>Activities</h1>
        <h1>Gallery</h1>
        <h1>Contact us</h1>
       </div>
       <button className="bg-linear-to-r from-[#296CEE] to-[#064B8B] px-3 py-2 rounded-4xl text-white text-xs font-medium ">Book Your Snow Day</button>
    </div>
  </div>;
};

export default Navbar;
