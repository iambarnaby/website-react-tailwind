import Triangle from "./images/NavButtons/PlayStationTriangle.svg.png";
import Square from "./images/NavButtons/PlayStationSquare.svg.png";
import Circle from "./images/NavButtons/PlayStationCircle.svg.png";
import Cross from "./images/NavButtons/PlayStationCross.svg.png";
const Navigation = () => {
  const sectionOne = document.querySelectorAll("#topNavBar");
  console.log(sectionOne);

  return (
    <>
      <div
        id="sideNav"
        className=" fixed z-40 flex right-5 top-[34%]  transition-opactiy ease-in-out duration-300"
      >
        <div className="grid gap-7 z-10">
          <a href="#top" data-tooltip="Top">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-red-600 border-red-400 border-l-4 hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <div className=" text-red-900 font-teko font-bold text-size">
                Start
              </div>
            </button>
          </a>
          <a href="#portfolio" data-tooltip="Portfolio">
            <button className="flex justify-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img className="h-[35px] w-auto" src={Triangle} alt="tri"></img>
            </button>
          </a>
          <a href="#about" data-tooltip="About">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img className="h-[35px] w-auto" src={Square} alt="square"></img>
            </button>
          </a>
          <a href="#skills" data-tooltip="Skills">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img src={Circle} alt="circle"></img>
            </button>
          </a>
          <a href="#testimonials" data-tooltip="Testimonials">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img className="h-[35px] w-auto" src={Cross} alt="cross"></img>
            </button>
          </a>
        </div>
        <div className="absolute grid gap-7 top-[6px]">
          <div className="w-[50px] h-[50px] rounded-full bg-red-800"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#afbcc5]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#afbcc5]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#afbcc5]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#afbcc5]"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
