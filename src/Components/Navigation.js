import Triangle from "./images/NavButtons/PlayStationTriangle.svg.png";
import Square from "./images/NavButtons/PlayStationSquare.svg.png";
import Circle from "./images/NavButtons/PlayStationCircle.svg.png";
import Cross from "./images/NavButtons/PlayStationCross.svg.png";
const Navigation = () => {
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
              <img
                id="TrianglePing"
                className="absolute h-[35px] w-auto animate-ping delay-100"
                src={Triangle}
                alt="tri"
              ></img>
            </button>
          </a>
          <a href="#about" data-tooltip="About">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img className="h-[35px] w-auto" src={Square} alt="square"></img>
              <img
                id="SquarePing"
                className="absolute h-[35px] w-auto animate-ping delay-100"
                src={Square}
                alt="tri"
              ></img>
            </button>
          </a>
          <a href="#skills" data-tooltip="Skills">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img src={Circle} alt="circle"></img>
              <img
                id="CirclePing"
                className="absolute animate-ping delay-100"
                src={Circle}
                alt="tri"
              ></img>
            </button>
          </a>
          <a href="#testimonials" data-tooltip="Testimonials">
            <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2edf5] hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
              <img className="h-[35px] w-auto" src={Cross} alt="cross"></img>
              <img
                id="CrossPing"
                className="h-[35px] w-auto absolute animate-ping delay-100"
                src={Cross}
                alt="cross"
              ></img>
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
