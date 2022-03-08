const NodeTab = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 mt-[50px]">
        <div
          id="steam-trader"
          className="h-[300px] bg-no-repeat bg-cover border-4 bg-center rounded-tl"
        ></div>
        <div id="BOT1" className="h-[300px] bg-no-repeat bg-cover bg-center">
          <a
            href="https://steamcommunity.com/id/LampShedBOT1/"
            className={
              "opacity-50 hover:opacity-100 !bg-[#161616c2] transition-all h-[300px] flex justify-center items-center text-white text-size28 font-poppins"
            }
          >
            BOT#1
          </a>
        </div>
        <div id="BOT2" className="h-[300px] bg-no-repeat bg-cover  bg-center">
          <a
            href="https://steamcommunity.com/id/LampShedBOT2/"
            className={
              "opacity-50 hover:opacity-100 !bg-[#161616c2] transition-all h-[300px] flex justify-center items-center text-white text-size28 font-poppins"
            }
          >
            BOT#2
          </a>
        </div>
        <div id="BOT3" className="h-[300px] bg-no-repeat bg-cover  bg-center">
          <a
            href="https://steamcommunity.com/id/LampShedBOT3/"
            className={
              "opacity-50 hover:opacity-100 !bg-[#161616c2] transition-all h-[300px] flex justify-center items-center text-white text-size28 font-poppins"
            }
          >
            BOT#3
          </a>
        </div>
      </div>
    </>
  );
};

export default NodeTab;
