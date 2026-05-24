import React from "react";

const Test = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="relative">
        <img  src="/footer/footer-background.jpg" className="w-full h-full" />

        {/* overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
    </div>
  );
};

export default Test;
