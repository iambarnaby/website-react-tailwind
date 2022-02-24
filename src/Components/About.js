import { React, useEffect, useRef } from "react";
import AboutMe from "./images/AboutMe.jpg";
const About = () => {
  const myAbout = useRef();
  const options = {
    threshold: 0,
    rootMargin: "-500px",
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
          <div>
            <button className=" mr-10 py-5 px-10 bg-slate-600 border-4 border-slate-600">
              Contact Me
            </button>
            <button className="py-5 px-10 border-4 border-slate-600">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
