import Tilt from "react-vanilla-tilt";
import { IconContext } from "react-icons/lib";
import { FaJs } from "react-icons/fa";

const SkillJs = () => {
  return (
    <div className="hover:translate-y-[-20px] hover:translate-x-[20px] transition-all children:!bg-[#1d1d1d] children:w-[300px] children:h-[300px]">
      <Tilt id="skill-card" className="group">
        <div className="flex justify-center items-center">
          <IconContext.Provider
            value={{
              size: "150px",
              color: "",
              className: "",
            }}
          >
            <FaJs className=" absolute group-hover:opacity-[0.5] group-hover:w-16 group-hover:translate-y-[-90px] text-[#F7E018] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#F7E018] transition-all duration-700 group-hover:translate-y-7">
            A key foundation for any project. JavaScript has taught me alot
            about how things work and how to solve a problem.
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillJs;
