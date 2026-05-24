import React from "react";

const Review = () => {
  const reviewArr = [
    {
      text: "'Best snow experience we've had in india my kids are still taling about it a mobth later!'",
     Name: "Priya M.",
      city: "Delhi",
    },
    {
      text: "My daughter's first ever snow experience, slides, snowman, real snowfall and she loved every second",
      Name: "Arjun S.",
      city: "Gurugram",
    },
    {
      text: "Every photo looked like i was on mountain holiday, the snow felt so real and fresh",
      Name: "Neha R.",
      city: "Noida",
    },
  ];

  return (
    <div className="h-[60vh] w-full relative bg-[linear-gradient(180deg,rgba(242,253,255,1),rgba(200,241,255,1))]">
      <div className="h-[60vh] w-full">
        <img src="/About-assets/3d-ice.png" className="w-full h-full" />

        {/* overlay */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="h-full w-full absolute top-0 z-10 flex flex-col justify-center items-center">
      <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <title>snow_line</title>
              <g id="snow_line" fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="#165FF5FF"
                  d="M12 2a1 1 0 0 1 1 1v.962l.654-.346a1 1 0 0 1 .935 1.768L13 6.224v1.902c.715.184 1.352.56 1.854 1.071l1.648-.951-.067-1.796a1 1 0 0 1 1.999-.075l.027.74.833-.481a1 1 0 1 1 1 1.732l-.833.48.627.394a1 1 0 1 1-1.064 1.694l-1.522-.956-1.647.95a4.001 4.001 0 0 1 0 2.143l1.647.951 1.522-.956a1 1 0 0 1 1.064 1.694l-.626.393.832.481a1 1 0 1 1-1 1.732l-.832-.48-.028.739a1 1 0 0 1-1.999-.075l.067-1.796-1.648-.951c-.502.51-1.14.887-1.854 1.071v1.902l1.589.84a1 1 0 0 1-.935 1.768L13 20.038V21a1 1 0 1 1-2 0v-.962l-.654.346a1 1 0 1 1-.935-1.768l1.589-.84v-1.902a3.996 3.996 0 0 1-1.854-1.072l-1.648.952.067 1.796a1 1 0 0 1-1.999.074l-.027-.739-.833.48a1 1 0 1 1-1-1.731l.833-.481-.627-.394a1 1 0 0 1 1.064-1.693l1.522.956 1.647-.951a4.004 4.004 0 0 1 0-2.142l-1.647-.95-1.522.955a1 1 0 0 1-1.064-1.693l.627-.394-.833-.48a1 1 0 0 1 1-1.733l.833.481.027-.74a1 1 0 0 1 1.999.075l-.067 1.796 1.648.952A3.996 3.996 0 0 1 11 8.126V6.224l-1.589-.84a1 1 0 0 1 .935-1.768l.654.346V3a1 1 0 0 1 1-1m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                />
              </g>
            </svg>
      <div className='flex items-center justify-center gap-4'>
              <div className='h-[2px] w-7 bg-[#165FF5]'></div>
              <h1 className='text-sm font-medium text-[#165FF5]'>REVIEW</h1>
              <div className='h-[2px] w-7 bg-[#165FF5]'></div>
        </div>
        <h1 className="lobster text-[3.5vw]">
          What Our <span className="text-[#165FF5]">Visitors</span> Says
        </h1>
        <div className="flex gap-[5vw]">
          {reviewArr.map((review,idx) => {
            return (
              <div key={idx} className="p-0.5 rounded-3xl bg-linear-to-r from-[rgba(21,92,238,1)] to-[rgba(0,26,69,1)]">
                <div className="h-[20vh] w-[25vw] flex flex-col items-center rounded-3xl bg-[linear-gradient(to_top,rgba(192,236,250,1),rgba(229,248,255,1),rgba(248,247,250,1))] ">
                  <div className="text-xs flex items-center font-medium h-1/2  w-[22vw]">
                    <h1>{review.text}</h1>
                  </div>
                  <div className="w-full h-1/2 flex pl-10">
                    <img src={review.img} alt="" />
                    <div className=" flex flex-col  justify-center items-start">
                      <h1 className="text-sm font-bold">{review.Name}</h1>
                      <h3 className="text-xs font-medium">{review.city}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
