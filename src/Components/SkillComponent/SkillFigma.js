import { IconContext } from "react-icons/lib";
import Tilt from "react-vanilla-tilt";
import { FaFigma } from "react-icons/fa";

const SkillFigma = () => {
  return (
    <div className="hover:translate-y-[-20px] hover:translate-x-[20px] transition-all children:bg-[#1d1d1d] children:w-[300px] children:h-[300px]">
      <Tilt id="skill-card" className="group">
        <div className="flex justify-center items-center">
          <IconContext.Provider
            value={{
              size: "150px",
              color: "",
              className: "",
            }}
          >
            <FaFigma className=" absolute group-hover:opacity-[0.5] group-hover:w-14 group-hover:translate-y-[-90px] text-[#fafafa] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#fafafa] transition-all duration-700 group-hover:translate-y-7">
            Figma has been a great tool in streamlining the process of design.
            It makes it very easy to put ideas on paper
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillFigma;
