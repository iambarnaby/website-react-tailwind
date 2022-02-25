import { React, useEffect, useRef } from "react";
import SkillReact from "./SkillComponent/SkillReact";
import SkillJs from "./SkillComponent/SkillJs";
import SkillShopify from "./SkillComponent/SkillShopify";
import SkillTailwind from "./SkillComponent/SkillTailwind";
import SkillCSS from "./SkillComponent/SkillCSS";
import SkillFigma from "./SkillComponent/SkillFigma";
const Skills = () => {
  const mySkills = useRef();
  const options = {
    threshold: 0,
    rootMargin: "-500px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("CirclePing").style.display = "block";
        } else {
          document.getElementById("CirclePing").style.display = "none";
        }
      });
    }, options);
    observer.observe(mySkills.current);
  }, []);

  return (
    <>
      <div
        ref={mySkills}
        id="skills"
        className="h-[100vh] bg-[#2a2a2a] overflow-hidden"
      >
        <div className="relative font-poppins text-[#ffcc00] left-10 top-10 font-semibold text-size28">
          Skills
        </div>
        <div className="relative flex justify-center items-center h-[100%] w-[100%]">
          <div className="absolute grid grid-cols-3 grid-rows-2 h-auto w-auto gap-20  pl-[40px] pb-[40px] cursor-default">
            <SkillReact />
            <SkillJs />
            <SkillShopify />
            <SkillTailwind />
            <SkillCSS />
            <SkillFigma />
          </div>
          <div className="grid grid-cols-3 grid-rows-2 h-auto w-auto gap-20 children:bg-[#000000] children:w-[300px] children:h-[300px] children:shadow-[0_0_4px_4px_#000000;]">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
