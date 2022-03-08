import splashMe from "./images/splash-me.png";
import splash from "./images/splash.jpg";
import { useRef, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Splash = () => {
  /*
  document.addEventListener("mousemove", (event) => {
    console.log(event.offsetX);
  });*/
  const myTopNav = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries;
      entry[0].isIntersecting
        ? (document.getElementById("sideNav").style.opacity = "0")
        : (document.getElementById("sideNav").style.opacity = "1");
    });
    observer.observe(myTopNav.current);
  }, []);

  return (
    <div>
      <div
        id="top"
        className="flex bg-[#EA8C55]  h-[994px] w-[100vw] max-w-full"
      >
        <div className="fixed flex space-x-4 pt-5 pl-5 w-auto h-auto z-30">
          <a href="https://linkedin.com/in/b-payne/">
            <div className="bg-[#81b3f5] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <IconContext.Provider
                value={{
                  size: "50px",
                  color: "#2367C2",
                  className: "global-class-name",
                }}
              >
                <FaLinkedin />
              </IconContext.Provider>
            </div>
          </a>
          <a href="https://github.com/lampshed/website-react-tailwind">
            <div className="bg-[#c0c0c0] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <IconContext.Provider
                value={{
                  size: "50px",
                  color: "#1b1b1b",
                  className: "global-class-name",
                }}
              >
                <FaGithubSquare />
              </IconContext.Provider>
            </div>
          </a>
          <a href="https://twitter.com/barnaby_payne">
            <div className="bg-[#e9f5ff] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <IconContext.Provider
                value={{
                  size: "50px",
                  color: "#319BF0",
                  className: "global-class-name",
                }}
              >
                <FaTwitterSquare />
              </IconContext.Provider>
            </div>
          </a>
        </div>
        <div
          id="topNavBar"
          className="absolute flex space-x-32  font-poppins font-semibold pt-[30px] right-[10vw] h-[50px] w-auto text-[#2a2a2a]  z-30"
        >
          <div ref={myTopNav} className="group cursor-pointer">
            <a href="#portfolio">Portfolio</a>

            <div className="transition-all  w-[0%] h-[5px] bg-slate-600 group-hover:w-[100%] group-hover:transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group cursor-pointer">
            <a href="#about">About</a>
            <div className="transition-all  w-[0%] h-[5px] bg-slate-600 group-hover:w-[100%] group-hover:transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group cursor-pointer">
            <a href="#skills">Skills</a>
            <div className="transition-all  w-[0%] h-[5px] bg-slate-600 group-hover:w-[100%] group-hover:transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group cursor-pointer">
            <a href="#testimonials">Testimonials</a>
            <div className="transition-all  w-[0%] h-[5px] bg-slate-600 group-hover:w-[100%] group-hover:transition-all duration-300 ease-in-out"></div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute top-[280px] left-[200px] font-poppins font-normal text-size48 z-20">
            <span className="text-[#Fafafa]">My Passion.</span>
            <span className="text-[#2a2a2a]"> Your Project.</span>
          </div>
          <div className="absolute top-[450px] left-[500px] font-teko tracking-widest text-[24px] animate-pulse">
            Welcome to my new website! It's currently under maintenance and a
            little rough around the edges, but feel free to look around!
          </div>
          <div className="absolute w-full h-full z-20 ">
            <div className="relative w-[230px] h-[230px] rounded-full bg-[#fafafa] left-[7.5rem] top-[38rem]"></div>
            <div className="relative h-0 w-0 -rotate-[-45deg]  border-b-[#fafafa] border-b-[150px] border-r-[90px] border-l-[90px] border-r-transparent border-l-transparent left-[34rem] top-[32.5rem]"></div>
            <div className="relative h-0 w-[320px] -rotate-[43deg] border-solid bg-[#ffffff] border-[#ffffff] border-2 left-[13.5vw] top-[9vh]"></div>
          </div>
          <img
            src={splashMe}
            className="absolute h-full w-auto z-20"
            alt="splash-me"
          ></img>
          <img
            src={splash}
            alt="splash"
            className="absolute h-full  w-[475px] opacity-50 object-cover object-left mix-blend-darken"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Splash;
