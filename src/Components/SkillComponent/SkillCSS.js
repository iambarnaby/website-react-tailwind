import { IconContext } from "react-icons/lib";
import Tilt from "react-vanilla-tilt";
import { FaCss3 } from "react-icons/fa";

const SkillCSS = () => {
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
            <FaCss3 className=" absolute group-hover:opacity-[0.5] group-hover:w-16 group-hover:translate-y-[-90px] text-[#1B73BA] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#1f8be4] transition-all duration-700 group-hover:translate-y-7">
            Another <i>!important</i> foundation when building a good looking
            website. I know it well, and it serves me well.
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillCSS;
