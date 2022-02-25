import { IconContext } from "react-icons/lib";
import { FaShopify } from "react-icons/fa";
import Tilt from "react-vanilla-tilt";

const SkillShopify = () => {
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
            <FaShopify className=" absolute group-hover:opacity-[0.5] group-hover:w-16 group-hover:translate-y-[-90px] text-[#95BF47] transition-all duration-700" />
          </IconContext.Provider>
          <div className="relative opacity-0 group-hover:opacity-100 text-[#95BF47] transition-all duration-700 group-hover:translate-y-7">
            Shopify Liquid is an awesome templating language that has helped
            greatly when building store pages.
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillShopify;
