import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Skills = () => {
  return (
    <>
      <div id="skills" className="h-[100vh] bg-[#2a2a2a] overflow-hidden">
        <div className="relative font-poppins text-[#ffcc00] left-10 top-10 font-semibold text-size28">
          Skills
        </div>
        <div className="relative flex justify-center items-center h-[100%] w-[100%]">
          <div className="absolute grid grid-cols-3 grid-rows-2 h-auto w-auto gap-20 children:bg-[#1d1d1d] children:w-[300px] children:h-[300px] pl-[40px] pb-[40px]">
            <div>
              <FontAwesomeIcon icon={["fab", "apple"]} />
            </div>
            <div>JavaScript</div>
            <div>Shopify</div>
            <div>Tailwindcss</div>
            <div>Figma</div>
            <div>CSS</div>
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
