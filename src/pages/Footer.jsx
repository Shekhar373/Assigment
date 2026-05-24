import React from "react";

const Footer = () => {
  return (
    <div className="h-[70vh] relative w-full">
      <div className="relative">
        <img  src="/footer/footer-background.jpg" className="w-full h-[70vh]" />

        {/* overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      <div className="h-full w-full flex justify-around items-center absolute top-0 z-10">
        <div className="w-[20vw] flex flex-col gap-2">
          <h1 className="lobster text-4xl">
            Snow <span className="text-[#165FF5]">Village</span>
          </h1>
          <p className="text-sm font-medium">
            A magical winter destination where snow, fun, excitement, and
            unforgettable memories come together.
          </p>
          <button className="h-[5vh] w-[16vw] rounded-4xl text-white bg-linear-to-r from-[#296CEE] to-[#064B8B]">Book at snowvillage.in</button>
        </div>
        <div className="w-[20vw] text-sm font-medium flex flex-col gap-2">
          <h1 className="text-md font-bold text-[#165FF5]">Contact</h1>
          <div>
            <div>
              <img src="#" alt="" />
              <h3>
                4th Floor, E Tower, Spectrum Metro Phase 2, Sector 75, Noida,
                Uttar Pradesh 201307
              </h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>+91 921107226</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>info@snowvillage.in</h3>
            </div>
          </div>
        </div>
        <div className="w-[10vw] text-sm font-medium flex flex-col gap-2">
          <h1 className="text-md font-bold text-[#165FF5]">Quick Links</h1>
          <div>
            <div>
              <img src="#" alt="" />
              <h3>Home</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>About us</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>Gallery</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>Activities</h3>
            </div>
          </div>
        </div>
        <div className="w-[15vw] text-sm flex flex-col gap-2 font-medium">
          <h1 className="text-md font-bold text-[#165FF5]">More</h1>
          <div>
            <div>
              <img src="#" alt="" />
              <h3>Contact</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>Privacy Policy</h3>
            </div>
            <div>
              <img src="#" alt="" />
              <h3>Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
