import React from "react";

const FreshSnow = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] bg-[linear-gradient(180deg,rgba(231,251,255,1),rgba(208,245,255,1),rgba(198,240,255,1))]">
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        {/* overlay first so it's under images (z-order!) */}
        <div className="absolute inset-0 z-20 bg-white/60"></div>
        {/* Main BG Ice */}
        <img
          className="absolute z-10 bottom-0 md:bottom-10 h-[40vh] md:h-[80vh] w-full object-cover"
          src="/About-assets/3d-ice.png"
          alt=""
        />
        {/* Side Ices - right */}
        <img
          className="hidden md:block absolute z-10 top-0 -rotate-10 right-0 h-[35vh] md:h-[60vh] w-[50vw] md:w-[40vw] object-cover"
          src="/About-assets/3d-ice.png"
          alt=""
        />
        {/* Side Ices - left */}
        <img
          className="hidden md:block absolute z-10 top-0 rotate-15 left-0 h-[35vh] md:h-[60vh] w-[50vw] md:w-[40vw] object-cover"
          src="/About-assets/3d-ice.png"
          alt=""
        />
      </div>

      {/* Painting Image */}
      <img
        className="absolute z-20 rounded-2xl w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] h-[28vh] sm:h-[34vh] md:h-[40vh] lg:h-[60vh] top-[8vh] sm:top-[10vh] md:top-[15vh] left-1/2 -translate-x-1/2 md:left-[5vw] md:translate-x-0"
        src="/Fresh-snow/painting.jpg"
        alt="Fresh Snow"
      />

      {/* Heading */}
      <div className="absolute flex justify-center items-center z-20 top-[38vh] md:top-[5vh] lg:top-[35vh] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[70vw] md:w-[80vw] lg:w-[45vw] h-[13vh] sm:h-[18vh] md:h-[20vh] rounded-3xl shadow-[0_0_10px_rgba(22,95,245,0.5)] bg-[#001A45] p-2 sm:p-4">
        <h1 className="text-base sm:text-lg md:text-2xl text-white text-center leading-tight">
          Not Old. Not Stored.{" "}
          <span className="lobster text-[#165FF5]">Just Fresh Snow.</span>
          <br className="hidden sm:block" /> Walk In.{" "}
          <span className="lobster text-[#165FF5]">Feel Winter</span>. Walk Out
          Grinning.
        </h1>
      </div>

      {/* Side Decorations */}
      <div>
        {/* House Image - adjusts with screen */}
        <img
          className="
            absolute object-cover 
            top-[52vh] max-md:right-2 max-md:z-20 opacity-65
            h-[8vh] w-[20vw]
            sm:top-[28vh] sm:right-2 sm:h-[14vh] sm:w-[15vw]
            md:top-[18vh] md:-right-5 md:h-[20vh] md:w-[10vw]
          "
          src="/About-assets/about-house.png"
          alt="House"
        />
        {/* Tree, only on md+ */}
        <img
          className="
            hidden md:block
            absolute h-[8vh] w-[5vw] top-[28vh] right-[9vw] object-cover
          "
          src="/Hero-assets/tree.png"
          alt="Tree"
        />
        {/* Bear */}
        <img
          className="
            absolute z-20
            right-[-2vw] bottom-0
            h-[15vh] w-[19vw]
            sm:h-[25vh] sm:w-[18vw]
            md:h-[35vh] md:w-[20vw]
            rotate-y-180
          "
          src="/Fresh-snow/bear.png"
          alt="Bear"
        />
        {/* Raindeer */}
        <img
          className="
            absolute z-20
            hidden sm:block
            right-[35vw] bottom-4
            sm:right-[26vw] sm:bottom-[8vh]
            md:right-[35vw] md:bottom-20
            h-[8vh] w-[14vw]
            sm:h-[13vh] sm:w-[15vw]
            md:h-[15vh] md:w-[15vw]
            rotate-y-180
          "
          src="/Fresh-snow/raindear.png"
          alt="Reindeer"
        />
        {/* Penguin */}
        <img
          className="
            absolute z-20
            bottom-[2vh] left-1/2 -translate-x-1/2
            md:bottom-20 md:left-[40vw] md:translate-x-0
            h-[6vh] w-[12vw]
            sm:h-[8vh] sm:w-[10vw]
            md:h-[8vh] md:w-[5vw]
          "
          src="/About-assets/blue-penguin.png"
          alt="Penguin"
        />
      </div>
    </div>
  );
};

export default FreshSnow;
