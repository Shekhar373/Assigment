import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <div className="relative">
        <img
          src="/footer/footer-background.jpg"
          className="w-full h-[70vh] object-cover"
          alt="Footer Background"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-center md:justify-around items-stretch md:items-center px-6 py-8 gap-6 md:gap-0">
        {/* Snow Village / About */}
        <div className="w-full md:w-[22vw] flex flex-col gap-2 mb-4 md:mb-0 items-center md:items-start text-center md:text-left">
          <h1 className="lobster text-3xl md:text-4xl">
            Snow <span className="text-[#165FF5]">Village</span>
          </h1>
          <p className="text-xs md:text-sm font-medium max-w-[300px]">
            A magical winter destination where snow, fun, excitement, and
            unforgettable memories come together.
          </p>
          <button className="h-[42px] w-[70vw] md:w-[16vw] mt-2 rounded-4xl text-white bg-gradient-to-r from-[#296CEE] to-[#064B8B] text-xs md:text-base">
            Book at snowvillage.in
          </button>
        </div>
        {/* Contact */}
        <div className="w-full md:w-[23vw] text-xs md:text-sm font-medium flex flex-col gap-2 mb-4 md:mb-0 items-center md:items-start text-center md:text-left">
          <h1 className="text-base md:text-md font-bold text-[#165FF5]">
            Contact
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              {/* Replace # with proper contact icon */}
              <img src="#" alt="" className="hidden" />
              <h3>
                4th Floor, E Tower, Spectrum Metro Phase 2, Sector 75, Noida,
                Uttar Pradesh 201307
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>+91 921107226</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>info@snowvillage.in</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col">
          {/* Quick Links */}
        <div className="w-1/2 lg:w-full md:w-[13vw] text-xs md:text-sm font-medium flex flex-col gap-2 mb-4 md:mb-0 items-center md:items-start text-center md:text-left">
          <h1 className="text-base md:text-md font-bold text-[#165FF5]">
            Quick Links
          </h1>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Home</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>About us</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Gallery</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Activities</h3>
            </div>
          </div>
        </div>
        {/* More */}
        <div className="w-1/2 lg:w-full md:w-[15vw] text-xs md:text-sm flex flex-col gap-2 font-medium items-center md:items-start text-center md:text-left">
          <h1 className="text-base md:text-md font-bold text-[#165FF5]">
            More
          </h1>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Contact</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Privacy Policy</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="#" alt="" className="hidden" />
              <h3>Terms & Conditions</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
