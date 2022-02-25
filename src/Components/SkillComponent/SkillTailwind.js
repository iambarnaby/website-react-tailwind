import { IconContext } from "react-icons/lib";
import Tilt from "react-vanilla-tilt";
import { SiTailwindcss } from "react-icons/si";

const SkillTailwind = () => {
  return (
    <div className="hover:translate-y-[-20px] hover:translate-x-[20px] transition-all children:bg-[#1d1d1d] children:w-[300px] children:h-[300px]">
      <Tilt id="skill-card" className="group hover:">
        <div className="flex justify-center items-center ">
          <IconContext.Provider
            value={{
              size: "150px",
              className: "",
            }}
          >
            <SiTailwindcss className=" absolute group-hover:opacity-[0.5] group-hover:w-20 group-hover:translate-y-[-90px] text-[#38BDF8] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#38BDF8] transition-all duration-700 group-hover:translate-y-7">
            Tailwind is an awesome resource and greatly increases productivity.
            It gives my CSS skills a nitro boost!
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillTailwind;
