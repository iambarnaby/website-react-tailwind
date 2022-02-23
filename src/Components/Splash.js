import splashMe from "./images/splash-me.png";
import splash from "./images/splash.jpg";
const Splash = () => {
  /*
  document.addEventListener("mousemove", (event) => {
    console.log(event.offsetX);
  });*/
  return (
    <>
      <div
        id="top"
        className="flex bg-[#EA8C55]  h-[994px] w-[100vw] max-w-full"
      >
        <div className="absolute flex space-x-4 pt-5 pl-5 w-auto h-auto z-30">
          <div className="bg-[#2367C2] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
            In
          </div>
          <div className="bg-[#505050] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
            Git
          </div>
          <div className="bg-[#319BF0] w-[45px] h-[45px] rounded-md hover:translate-y-[-4px] transition-transform active:translate-y-[2px]">
            Twit
          </div>
        </div>
        <div
          id="topNavBar"
          className="absolute flex space-x-32  font-poppins font-semibold pt-[30px] right-[10vw] h-[50px] w-auto text-[#2a2a2a]  z-30"
        >
          <div className="hover:underline cursor-pointer">
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="hover:underline cursor-pointer">
            <a href="#about">About</a>
          </div>
          <div className="hover:underline cursor-pointer">
            <a href="#skills">Skills</a>
          </div>
          <div className="hover:underline cursor-pointer">
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute top-[280px] left-[200px] font-poppins font-normal text-size48 z-20">
            <span className="text-[#Fafafa]">My Passion.</span>
            <span className="text-[#2a2a2a]"> Your Project.</span>
          </div>
          <div className="absolute w-full h-full z-20 ">
            <div className="relative w-[230px] h-[230px] rounded-full bg-[#fafafa] left-[7.5rem] top-[38rem]"></div>
            <div className="relative h-0 w-0 -rotate-[-45deg]  border-b-[#fafafa] border-b-[150px] border-r-[90px] border-l-[90px] border-r-transparent border-l-transparent left-[34rem] top-[32.5rem]"></div>
            <div className="relative h-0 w-[320px] -rotate-[43deg] border-solid bg-[#ffffff] border-[#ffffff] border-2 left-[13.5vw] top-[9vh]"></div>
          </div>
          <img
            src={splashMe}
            className="absolute h-full w-auto z-20"
            alt="splash-me"
          ></img>
          <img
            src={splash}
            alt="splash"
            className="absolute h-full  w-[475px] opacity-50 object-cover object-left mix-blend-darken"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Splash;
