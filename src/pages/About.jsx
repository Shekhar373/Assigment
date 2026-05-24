import React from "react";
import Review from "../Components/Review";
import FreshSnow from "../Components/FreshSnow";

const About = () => {
  const aboutArr = [
    {
      img: (<svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
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
      </svg>),
      text: "Real Snow, Ready For You.",
    },
    {
      img: (<svg width="25" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="48" rx="24" fill="url(#paint0_linear_0_301)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9091 11C20.951 11 19.3637 12.746 19.3637 14.9V25.2995C17.9284 26.4854 17 28.3734 17 30.5C17 34.0899 19.6456 37 22.9091 37C26.1726 37 28.8182 34.0899 28.8182 30.5C28.8182 28.3734 27.8898 26.4854 26.4545 25.2995V14.9C26.4545 12.746 24.8672 11 22.9091 11ZM27.6363 12.3H30V13.6H27.6363V12.3ZM27.6363 16.2H30V17.5H27.6363V16.2ZM30 20.1H27.6363V21.4H30V20.1ZM27.6363 24H30V25.3H27.6363V24ZM22.9091 33.1C24.2145 33.1 25.2728 31.936 25.2728 30.5C25.2728 29.064 24.2145 27.9 22.9091 27.9C21.6037 27.9 20.5454 29.064 20.5454 30.5C20.5454 31.936 21.6037 33.1 22.9091 33.1Z" fill="#F8F5FF"/>
        <defs>
        <linearGradient id="paint0_linear_0_301" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#155DF0"/>
        <stop offset="1" stop-color="#1457E2"/>
        </linearGradient>
        </defs>
        </svg>
        ),
      text: "Real indoor snow experience at -10C",
    },
    {
      img: (<svg width="25" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="48" rx="24" fill="url(#paint0_linear_0_303)"/>
        <g clip-path="url(#clip0_0_303)">
        <path d="M17.4081 14.6316C18.0882 14.6316 18.7405 14.8915 19.2214 15.3542C19.7023 15.8169 19.9724 16.4444 19.9724 17.0987C19.9724 17.753 19.7023 18.3805 19.2214 18.8432C18.7405 19.3059 18.0882 19.5658 17.4081 19.5658C16.728 19.5658 16.0758 19.3059 15.5948 18.8432C15.1139 18.3805 14.8438 17.753 14.8438 17.0987C14.8438 16.4444 15.1139 15.8169 15.5948 15.3542C16.0758 14.8915 16.728 14.6316 17.4081 14.6316ZM14.5232 33.1349V30.051H13.81C13.3733 30.051 13.0648 29.6385 13.201 29.2376L14.4471 25.6372L13.3012 27.0943C12.8724 27.6379 12.0671 27.7419 11.5061 27.3333C10.9452 26.9247 10.833 26.1499 11.2577 25.6064L13.6177 22.6111C14.5152 21.4701 15.9216 20.7994 17.4081 20.7994C18.8946 20.7994 20.301 21.4701 21.1985 22.6111L23.5585 25.6064C23.9872 26.1499 23.875 26.9247 23.3101 27.3333C22.7451 27.7419 21.9398 27.6379 21.515 27.0943L20.3691 25.6372L21.6152 29.2376C21.7554 29.6385 21.4429 30.051 21.0062 30.051H20.293V33.1349C20.293 33.8172 19.72 34.3684 19.0108 34.3684C18.3016 34.3684 17.7286 33.8172 17.7286 33.1349V30.051H17.0876V33.1349C17.0876 33.8172 16.5146 34.3684 15.8054 34.3684C15.0962 34.3684 14.5232 33.8172 14.5232 33.1349ZM30.2298 14.6316C30.9099 14.6316 31.5621 14.8915 32.043 15.3542C32.5239 15.8169 32.7941 16.4444 32.7941 17.0987C32.7941 17.753 32.5239 18.3805 32.043 18.8432C31.5621 19.3059 30.9099 19.5658 30.2298 19.5658C29.5497 19.5658 28.8974 19.3059 28.4165 18.8432C27.9356 18.3805 27.6654 17.753 27.6654 17.0987C27.6654 16.4444 27.9356 15.8169 28.4165 15.3542C28.8974 14.8915 29.5497 14.6316 30.2298 14.6316ZM29.9092 29.4342V33.1349C29.9092 33.8172 29.3363 34.3684 28.6271 34.3684C27.9179 34.3684 27.3449 33.8172 27.3449 33.1349V26.2154L26.828 27.0057C26.4514 27.5839 25.658 27.7535 25.061 27.3912C24.464 27.0288 24.2837 26.2655 24.6604 25.6912L26.7319 22.5263C27.437 21.4508 28.6671 20.7955 29.9853 20.7955H30.4782C31.8004 20.7955 33.0305 21.447 33.7317 22.5263L35.8032 25.695C36.1798 26.2732 35.9995 27.0327 35.4025 27.395C34.8055 27.7574 34.0121 27.5839 33.6355 27.0095L33.1146 26.2154V33.1349C33.1146 33.8172 32.5417 34.3684 31.8325 34.3684C31.1233 34.3684 30.5503 33.8172 30.5503 33.1349V29.4342H29.9092Z" fill="#F8F5FF"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_0_303" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#155DF0"/>
        <stop offset="0.706897" stop-color="#1459E6"/>
        </linearGradient>
        <clipPath id="clip0_0_303">
        <rect width="25" height="20" fill="white" transform="translate(11 14)"/>
        </clipPath>
        </defs>
        </svg>
        ),
      text: "Fun for kids aged 3 and above",
    },
    {
      img: (<svg width="25" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="48" rx="24" fill="url(#paint0_linear_0_306)"/>
        <path d="M23.5731 14.1201C23.6995 14.0418 23.848 14 24 14C24.152 14 24.3005 14.0418 24.4269 14.1201C26.67 15.5088 29.6269 16.8768 33.3077 17.2183C33.4974 17.236 33.6733 17.3185 33.8013 17.4499C33.9292 17.5812 34 17.752 34 17.9291V24.0011C34 26.7728 32.3662 29.1231 30.3838 30.8204C28.4054 32.5148 25.9708 33.6571 24.1415 33.9757L24 34L23.8585 33.9757C22.0292 33.6571 19.5946 32.5148 17.6162 30.8204C15.6338 29.1231 14 26.7728 14 24.0011V17.9291C14 17.752 14.0708 17.5812 14.1988 17.4499C14.3267 17.3185 14.5026 17.236 14.6923 17.2183C18.3731 16.8768 21.3308 15.5088 23.5731 14.1201ZM29.1592 21.6495C29.3036 21.5155 29.3847 21.3338 29.3848 21.1443C29.3848 20.9548 29.3039 20.773 29.1596 20.639C29.0154 20.505 28.8197 20.4296 28.6157 20.4295C28.4116 20.4295 28.2159 20.5047 28.0715 20.6386L22.4615 25.8485L20.6977 24.2104C20.5526 24.0803 20.3583 24.0083 20.1566 24.0099C19.9549 24.0116 19.762 24.0867 19.6194 24.2191C19.4767 24.3516 19.3959 24.5308 19.3941 24.7181C19.3923 24.9054 19.4699 25.0858 19.61 25.2205L21.9177 27.3636C22.0619 27.4975 22.2576 27.5728 22.4615 27.5728C22.6655 27.5728 22.8611 27.4975 23.0054 27.3636L29.1592 21.6495Z" fill="#F8F5FF"/>
        <defs>
        <linearGradient id="paint0_linear_0_306" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#155DF0"/>
        <stop offset="0.706897" stop-color="#1459E6"/>
        </linearGradient>
        </defs>
        </svg>
        ),
      text: "Fully supervised enviroment",
    },
    {
      img: (<svg width="25" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="48" rx="24" fill="url(#paint0_linear_0_309)"/>
        <path d="M14 31C14 32.7 15.3 34 17 34H31C32.7 34 34 32.7 34 31V23H14V31ZM31 16H29V15C29 14.4 28.6 14 28 14C27.4 14 27 14.4 27 15V16H21V15C21 14.4 20.6 14 20 14C19.4 14 19 14.4 19 15V16H17C15.3 16 14 17.3 14 19V21H34V19C34 17.3 32.7 16 31 16Z" fill="#F8F5FF"/>
        <defs>
        <linearGradient id="paint0_linear_0_309" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#155DF0"/>
        <stop offset="0.706897" stop-color="#1459E6" stop-opacity="0.787931"/>
        <stop offset="1" stop-color="#1457E2" stop-opacity="0.7"/>
        </linearGradient>
        </defs>
        </svg>
        ),
      text: "Open every day, 11AM and 10PM",
    },
    {
      img: (<svg width="25" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="48" rx="24" fill="url(#paint0_linear_0_312)"/>
        <path d="M23.5 22.875C22.6949 22.875 21.9227 22.5458 21.3534 21.9597C20.7841 21.3737 20.4643 20.5788 20.4643 19.75C20.4643 18.9212 20.7841 18.1263 21.3534 17.5403C21.9227 16.9542 22.6949 16.625 23.5 16.625C24.3051 16.625 25.0773 16.9542 25.6466 17.5403C26.2159 18.1263 26.5357 18.9212 26.5357 19.75C26.5357 20.1604 26.4572 20.5667 26.3046 20.9459C26.1521 21.325 25.9285 21.6695 25.6466 21.9597C25.3647 22.2499 25.03 22.4801 24.6617 22.6371C24.2934 22.7942 23.8987 22.875 23.5 22.875ZM23.5 11C21.2457 11 19.0837 11.9219 17.4896 13.5628C15.8955 15.2038 15 17.4294 15 19.75C15 26.3125 23.5 36 23.5 36C23.5 36 32 26.3125 32 19.75C32 17.4294 31.1045 15.2038 29.5104 13.5628C27.9163 11.9219 25.7543 11 23.5 11Z" fill="#F8F5FF"/>
        <defs>
        <linearGradient id="paint0_linear_0_312" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#155DF0"/>
        <stop offset="0.706897" stop-color="#1459E6"/>
        </linearGradient>
        </defs>
        </svg>
        ),
      text: "At Spectrum Mail Phase 2, Noida",
    },
  ];

  return (
    <>
      <div className="h-[80vh] lg:h-screen w-full bg-[linear-gradient(180deg,rgba(238,253,255,1),rgba(183,235,254,1),rgba(248,245,255,1))] relative">
        <div className="relative h-[80vh] lg:h-screen w-full">
          <img src="/footer/footer-background.jpg" className="w-full h-full" />

          {/* overlay */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div>
          <img
            className="h-[20vh] lg:h-[60vh] w-[40vw] rotate-y-180 lg:object-cover absolute z-20 top-[55vh] lg:top-[20vh] lg:-left-10"
            src="/About-assets/about-house.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[10vh] lg:h-[25vh] w-[15vw] lg:w-[10vw] lg:object-cover absolute z-20 bottom-[5vh] lg:bottom-[20vh] left-[10vw]"
            src="/About-assets/blue-penguin.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[7vh] w-[4vw] absolute top-[32vh] rotate-y-180 right-[15vw]"
            src="/About-assets/blue-penguin.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[4vh] w-[3vw] absolute z-20 -rotate-12 top-[35vh] rotate-y-180 right-[16vw]"
            src="/About-assets/penguin-tree.png"
            alt=""
          />
        </div>
       
        <div>
        <img
          className="h-[10vh] lg:h-[15vh] w-[15vw] lg:w-[10vw] absolute right-0 top-[55vh] lg:top-[50vh]"
          src="/Hero-assets/tree.png"
          alt="Tree"
        />
        <img
          className="h-[10vh] lg:h-[15vh] w-[15vw] lg:w-[10vw] absolute left-[25vw] top-[55vh] lg:top-[50vh]"
          src="/Hero-assets/tree.png"
          alt="Tree"
        />
        </div>
        <div>
          <img
            className="h-[15vh] w-[10vw] hidden lg:visible lg:object-cover absolute bottom-[10vh] left-[32vw]"
            src="/About-assets/about-tree.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[25vh] lg:h-[50vh] w-[15vw] lg:object-cover absolute z-10 bottom-[30vh] -left-25"
            src="/About-assets/about-tree.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[10vh] w-[15vw] absolute bottom-[32vh] -left-5"
            src="/About-assets/tree-bottom.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[15vh] lg:h-[30vh] w-[25vw] lg:w-[20vw] absolute z-10 bottom-[10vh] lg:bottom-[5vh] right-5"
            src="/About-assets/penguin.png"
            alt=""
          />
        </div>
        <div className="h-[80vh] w-screen lg:w-[40vw] flex flex-col items-center  gap-5 absolute top-5 lg:top-[10vh] lg:right-[15vw]">
          <div className=" flex flex-col items-center">
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
              <div className="h-[2px] w-7 bg-[#165FF5]"></div>
              <h1 className="text-sm font-medium text-[#165FF5]">WHO WE ARE</h1>
              <div className="h-[2px] w-7 bg-[#165FF5]"></div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="lobster text-[8vw] lg:text-[3.5vw] [text-shadow:2px_2px_20px_#fff] leading-[8vw] lg:leading-[4vw]">
              Noida's Indoor Snow Park —
              <span className="text-[#165FF5]">Open All Year!</span>
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            {aboutArr.map((about,idx) => {
              return (
                <div key={idx} className="flex items-center gap-4 h-[4vh] lg:h-[6vh] w-[80vw] lg:w-[40vw] border-none bg-[linear-gradient(to_top,rgba(192,236,250,1),rgba(229,248,255,1),rgba(248,247,250,1))] border rounded-4xl">
                  <div className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] flex justify-center items-center rounded-full bg-[#165FF5]">
                  {about.img}
                  </div>
                  <h1 className="text-xs lg:text-lg">{about.text}</h1>
                </div>
              );
            })}
          </div>
          <div className="lg:w-full">
          <button className="max-md:text-xs bg-linear-to-r from-[#296CEE] to-[#064B8B] px-3 py-2 rounded-2xl text-white">Explore Snow Village</button>
          </div>
        </div>
      </div>
      <Review />
      <FreshSnow />
    </>
  );
};

export default About;
