import { IconContext } from "react-icons/lib";
import Tilt from "react-vanilla-tilt";
import { FaReact } from "react-icons/fa";
const SkillReact = () => {
  return (
    <div className="hover:translate-y-[-20px] hover:translate-x-[20px] transition-all children:bg-[#1d1d1d] children:w-[300px] children:h-[300px]">
      <Tilt id="skill-card" className="group">
        <div className=" transition-all flex justify-center items-center">
          <IconContext.Provider
            value={{
              size: "150px",
              color: "#61DAFB",
              className: "",
            }}
          >
            <FaReact className=" absolute group-hover:opacity-[0.5] group-hover:w-20 group-hover:translate-y-[-90px] text-[#61DAFB] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#61DAFB] transition-all duration-700 group-hover:translate-y-7">
            Reactjs Is an amazing library that takes all the capabilities of
            Vanilla JS and puts it into nice little components.
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillReact;
