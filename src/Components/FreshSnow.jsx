import React from "react";

const FreshSnow = () => {
  return (
    <div className="h-[80vh] relative w-full bg-[linear-gradient(180deg,rgba(231,251,255,1),rgba(208,245,255,1),rgba(198,240,255,1))]">
      <div className="h-[80vh] w-full relative">
        {/* overlay first so it's under images (z-order!) */}
        <div className="absolute inset-0 z-20 bg-white/60"></div>
        <img
          className="absolute z-10 bottom-10 h-[80vh] w-full"
          src="/About-assets/3d-ice.png"
          alt=""
        />
        <img
          className="absolute z-10 top-0 -rotate-10 right-0  h-[60vh] w-[40vw]"
          src="/About-assets/3d-ice.png"
          alt=""
        />
        <img
          className="absolute z-10 top-0 rotate-15 left-0  h-[60vh] w-[40vw]"
          src="/About-assets/3d-ice.png"
          alt=""
        />
      </div>

      <img
        className="absolute z-20 h-[40vh] lg:h-[60vh] rounded-2xl w-[80vw] lg:w-[30vw] top-[15vh] left-[5vw]"
        src="/Fresh-snow/painting.jpg"
        alt=""
      />

      <div className="h-[20vh] w-[80vw] lg:w-[45vw] flex justify-center shadow-[0_0_10px_rgba(22,95,245,0.5)] items-center z-20 right-[10vw] top-[5vh] lg:top-[35vh] rounded-3xl absolute bg-[#001A45]">
        <h1 className="text-2xl text-white">
          Not Old. Not Stored.{" "}
          <span className="lobster text-[#165FF5]">Just Fresh Snow.</span>{" "}
          <br /> Walk In.{" "}
          <span className="lobster text-[#165FF5]">Feel Winter</span>. Walk Out
          Grinning.
        </h1>
      </div>
      <div>
        <img
          className="h-[20vh] w-[10vw] object-cover absolute top-[18vh] -right-5"
          src="/About-assets/about-house.png"
          alt=""
        />
        <img
          className="absolute h-[8vh] w-[5vw] top-[28vh] right-25 object-cover"
          src="/Hero-assets/tree.png"
          alt="Tree"
        />
        <img
          className="h-[35vh] w-[20vw] rotate-y-180 absolute z-20 bottom-0 right-0"
          src="/Fresh-snow/bear.png"
          alt=""
        />

        <img
          className="h-[15vh] w-[15vw] rotate-y-180 absolute z-20 bottom-20 right-60"
          src="/Fresh-snow/raindear.png"
          alt=""
        />
        <img
          className="h-[8vh] w-[5vw] absolute z-20 bottom-20 left-[40vw]"
          src="/About-assets/blue-penguin.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FreshSnow;
