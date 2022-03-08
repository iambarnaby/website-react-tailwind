import { FaGithub } from "react-icons/fa";
import { RiPlayLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import ReactData from "./TabData/reactProjectData.json";
const ReactTab = () => {
  console.log(ReactData);
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 mt-[50px]  gap-10">
        {ReactData.map((project) => (
          <div
            id={project.id}
            className="bg-no-repeat bg-cover border-4 border-[#61DAFB] rounded"
          >
            <div
              key={project.name}
              className={
                "opacity-0 hover:opacity-100 !bg-[#161616c2] transition-all h-[300px] flex justify-center items-center "
              }
            >
              <div className="flex justify-center items-center flex-row children:h-[54px] children:w-[54px] children:bg-[#d6d6d6] children:rounded-full children:mx-[5px]">
                <div className="flex justify-center items-center">
                  <a href={project.github}>
                    <IconContext.Provider
                      value={{
                        size: "50px",
                        color: "#2c2c2c",
                        className: "global-class-name",
                      }}
                    >
                      <FaGithub />
                    </IconContext.Provider>
                  </a>
                </div>
                <a
                  href={project.url}
                  className="flex justify-center items-center"
                >
                  <IconContext.Provider
                    value={{
                      size: "50px",
                      color: "#2c2c2c",
                      className: "global-class-name",
                    }}
                  >
                    <RiPlayLine />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReactTab;
