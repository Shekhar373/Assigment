import React from "react";

const Navbar = () => {
  return <div className="h-fit w-screen flex justify-center relative z-999">
    <img className="h-[13vh] lg:h-[20vh] w-screen absolute top-0" src="/Hero-assets/navbar.png" alt="" />
    <div className="w-full flex justify-between items-center relative z-10 px-5 lg:px-10">
       <img className="h-[6vh] lg:h-[10vh] w-[15vw] lg:w-[8vw] object-cover" src="/Hero-assets/snow-village.png" alt="" />
       <div className=" text-sm font-bold hidden lg:flex  gap-5">
        <h1 className="text-[#165FF5]">Home</h1>
        <h1>About us</h1>
        <h1>Activities</h1>
        <h1>Gallery</h1>
        <h1>Contact</h1>
       </div>
       <button className="bg-linear-to-r from-[#296CEE] to-[#064B8B] max-md:h-fit px-1.5 py-1 lg:px-3 lg:py-2 rounded-4xl text-white text-xs font-medium ">Book Your Snow Day</button>
    </div>
  </div>;
};

export default Navbar;
