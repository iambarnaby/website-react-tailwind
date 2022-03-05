import { useState, useEffect, useRef } from "react";
import { TestimonialData } from "./TabComponents/TestimonialData";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { IconContext } from "react-icons";
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === TestimonialData.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? TestimonialData.length - 1 : currentSlide - 1
    );
  };

  const myTestimonials = useRef();
  const options = {
    threshold: 0,
    rootMargin: "-50%",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("CrossPing").style.display = "block";
        } else {
          document.getElementById("CrossPing").style.display = "none";
        }
      });
    }, options);
    observer.observe(myTestimonials.current);
  }, []);
  return (
    <>
      <div
        ref={myTestimonials}
        id="testimonials"
        className="relative flex items-center justify-center h-[540px] bg-[#FDD061] "
      >
        <div className="absolute w-[700px] h-[486px]  bg-[#fafafa] rounded-lg shadow-[-6px_6px_4px] shadow-[rgb(0,0,0,0.25)] ">
          <button className="absolute z-20 left-10 top-56" onClick={prevSlide}>
            <div className="h-[15px] w-[15px] rounded-full bg-[#FDD061]">
              <IconContext.Provider
                value={{ size: "25px", className: "global-class-name" }}
              >
                <CgArrowLongLeft />
              </IconContext.Provider>
            </div>
          </button>
          <button className="absolute z-20 right-10 top-56" onClick={nextSlide}>
            <IconContext.Provider
              value={{
                size: "25px",
                className: "global-class-name absolute left-[-10px]",
              }}
            >
              <CgArrowLongRight />
            </IconContext.Provider>
            <div className="h-[15px] w-[15px] rounded-full bg-[#FDD061] "></div>
          </button>

          {TestimonialData.map((slide, index) => {
            return (
              <>
                {index === currentSlide && (
                  <div
                    key={slide.name}
                    className="flex flex-col relative justify-center items-center font-poppins pl-28 pr-28 pt-10"
                  >
                    <a
                      href={slide.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center"
                    >
                      {slide.image ? (
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-[100px] h-[auto] rounded-full"
                        ></img>
                      ) : (
                        <div className="h-[100px] w-[100px] rounded-full bg-slate-600 mr-0"></div>
                      )}

                      <div className="font-semibold ">
                        <div className="relative z-20">{slide.name}</div>
                        <div className="relative w-[100%] h-[10px] bg-[#FDD061] top-[-10px] z-10"></div>
                      </div>
                    </a>
                    <div className=" font-medium mb-3">{slide.job}</div>
                    <div className="text-center">"{slide.copy}"</div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
