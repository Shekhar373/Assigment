import React from "react";

const Questions = () => {
  const questionArr = [
    {
      img: "",
      text: "Where is Snow Village?",
    },
    {
      img: "",
      text: "What should I wear?",
    },
    {
      img: "",
      text: "What are the opening hours?",
    },
    {
      img: "",
      text: "Is it syitable for young children?",
    },
    {
      img: "",
      text: "is the snow real?",
    },
    {
      img: "",
      text: "How long is a session?",
    },
    {
      img: "",
      text: "How cold is it inside?",
    },
    {
      img: "",
      text: "How do i book tickets?",
    },
  ];

  return (
    <div className="h-[80vh] w-full relative bg-[linear-gradient(180deg,rgba(238,253,255,1),rgba(183,235,254,1),rgba(248,245,255,1))]">
      <div>
        <img
          className="absolute z-20 bottom-0 h-[90vh] w-full"
          src="/About-assets/3d-ice.png"
          alt=""
        />
        <img
          className="h-[17vh] w-[10vw] rotate-y-180 absolute z-20 bottom-[25vh] "
          src="/Hero-assets/hero-snow-house.png"
          alt="Snow House"
        />
        <img
          className="absolute h-[15vh] w-[10vw] bottom-[27vh] left-20 object-cover"
          src="/Hero-assets/tree.png"
          alt="Tree"
        />
        <img
          className=" absolute z-20 h-[15vh] w-[12vw] bottom-[10vh] right-0"
          src="/Hero-assets/child.png"
          alt="Child"
        />
        <img
          className="h-[15vh] w-[8vw] absolute bottom-[31vh] right-0"
          src="/About-assets/about-tree.png"
          alt=""
        />
      </div>
      <div className=" absolute top-10 h-[30vh] w-full flex flex-col gap-2 items-center">
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
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] w-10 bg-[#165FF5]"></div>
          <h1 className="text-sm font-medium text-[#165FF5]">
            FREQUESTILY ASKED QUESTIONS
          </h1>
          <div className="h-[2px] w-10 bg-[#165FF5]"></div>
        </div>
        <h1 className="lobster text-4xl">
          Quik Answers -{" "}
          <span className="text-[#165FF5]">Before You Visit</span>
        </h1>
        <p className="text-sm">
          Everything you need to know, answered fast. More questions? Visit
          snowvillage.in.
        </p>
      </div>
      <div className="absolute bottom-0 z-40 h-[50vh] w-full flex flex-wrap gap-y-0 gap-x-20 justify-center">
        {questionArr.map((arr,idx) => {
          return (
            <div key={idx} className="h-[7vh] w-[30vw] flex gap-5 px-3 items-center rounded-2xl bg-white/30">
              <div className="bg-[#165FF5] p-1.5 rounded-full">
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
                      fill="#fff"
                      d="M12 2a1 1 0 0 1 1 1v.962l.654-.346a1 1 0 0 1 .935 1.768L13 6.224v1.902c.715.184 1.352.56 1.854 1.071l1.648-.951-.067-1.796a1 1 0 0 1 1.999-.075l.027.74.833-.481a1 1 0 1 1 1 1.732l-.833.48.627.394a1 1 0 1 1-1.064 1.694l-1.522-.956-1.647.95a4.001 4.001 0 0 1 0 2.143l1.647.951 1.522-.956a1 1 0 0 1 1.064 1.694l-.626.393.832.481a1 1 0 1 1-1 1.732l-.832-.48-.028.739a1 1 0 0 1-1.999-.075l.067-1.796-1.648-.951c-.502.51-1.14.887-1.854 1.071v1.902l1.589.84a1 1 0 0 1-.935 1.768L13 20.038V21a1 1 0 1 1-2 0v-.962l-.654.346a1 1 0 1 1-.935-1.768l1.589-.84v-1.902a3.996 3.996 0 0 1-1.854-1.072l-1.648.952.067 1.796a1 1 0 0 1-1.999.074l-.027-.739-.833.48a1 1 0 1 1-1-1.731l.833-.481-.627-.394a1 1 0 0 1 1.064-1.693l1.522.956 1.647-.951a4.004 4.004 0 0 1 0-2.142l-1.647-.95-1.522.955a1 1 0 0 1-1.064-1.693l.627-.394-.833-.48a1 1 0 0 1 1-1.733l.833.481.027-.74a1 1 0 0 1 1.999.075l-.067 1.796 1.648.952A3.996 3.996 0 0 1 11 8.126V6.224l-1.589-.84a1 1 0 0 1 .935-1.768l.654.346V3a1 1 0 0 1 1-1m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                    />
                  </g>
                </svg>
              </div>

              <h1 className="text-md font-light">{arr.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
