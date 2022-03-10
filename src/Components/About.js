import { React, useEffect, useRef } from "react";
import AboutMe from "./images/AboutMe.jpg";
const About = () => {
  const myAbout = useRef();
  const options = {
    threshold: 0,
    rootMargin: "-50%",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("SquarePing").style.display = "block";
        } else {
          document.getElementById("SquarePing").style.display = "none";
        }
      });
    }, options);
    observer.observe(myAbout.current);
  }, []);

  return (
    <>
      <div
        ref={myAbout}
        id="about"
        className="bg-[#C75146] h-[100vh] font-poppins p-32 flex justify-center items-center"
      >
        <div className="relative text-white grid grid-cols-[1.5fr_1fr] grid-rows-[3fr_1fr] gap-10 h-auto">
          <div className="">
            <div className="pb-10">About_</div>I am a skilled and enthusiastic
            Developer who’s focus is user interaction and attractive design. I
            believe good design complimented with straight forward and
            understandable functionality is key to any project.
            <div className=" mt-4">
              I love to travel and see the world for how it really is. It always
              widens my perspective on all aspects of my life. When I'm not
              making awesome websites and apps, I'm illustrating. Whether that's
              for someones webcomic, childrens book or just to relax, I love to
              draw.
            </div>
          </div>
          <span className="flex justify-center">
            <img src={AboutMe} className=" h-auto" alt="me"></img>
          </span>
          <div className="flex flex-row gap-4">
            <a href="#testimonials" className="h-[70px]">
              <div className="group h-[70px] w-[250px] bg-transparent border-4 border-slate-600 rounded shadow-xl hover:shadow-cyan-500/50 transition-all hover:translate-y-[-3px] hover:translate-x-2 active:translate-y-[3px] active:translate-x-[-0.5rem]">
                <div className=" bg-slate-600 h-[0%] relative group-hover:h-[100%] transition-all flex justify-center ">
                  <div className=" absolute top-[20px] font-extrabold">
                    Contact Me
                  </div>
                </div>
              </div>
            </a>
            <a href="#testimonials">
              <div className="group h-[70px] w-[250px] bg-transparent border-4 border-slate-600 rounded shadow-xl hover:shadow-cyan-500/50 transition-all hover:translate-y-[-3px] hover:translate-x-2">
                <div className=" bg-slate-600 w-[0%] h-[100%] relative group-hover:w-[100%] transition-all flex items-center">
                  <div className=" absolute left-[105px]  font-extrabold">
                    CV
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
