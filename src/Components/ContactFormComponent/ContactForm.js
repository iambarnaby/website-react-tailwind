import emailjs from "emailjs-com";
import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";
const ContactForm = () => {
  const submitEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pnzb4gl",
        "template_56z6idg",
        e.target,
        "fs7rcM2OcTmKpPfzk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex flex-col">
      <div className="w-[500px]">
        <form
          onSubmit={submitEmail}
          className=" flex flex-col children:mt-[10px] children:bg-transparent children:border-b-2 children:text-white children:border-white children:outline-none"
        >
          <div className="absolute z-30 left-[640px] !border-0">
            <div className=" transition-all">
              <div className="absolute bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="absolute bg-yellow-400 w-4 h-4 rounded-full animate-ping"></div>
            </div>

            <IconContext.Provider
              value={{
                size: "16px",
                color: "#22e62f",
                className: "global-class-name",
              }}
            >
              <TiTick />
            </IconContext.Provider>
          </div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="h-[50px]"
          ></input>
          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="h-[50px]"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            className=" h-[150px]"
          ></textarea>
          <div className="!border-0">
            <button
              type="submit"
              className="h-[50px] !bg-[#535353] !border-0 text-white absolute z-10 w-[500px] hover:translate-y-[-0.25rem] active:translate-y-1 transition-all rounded"
            >
              Submit
            </button>
            <div className="!border-0 absolute !bg-[#1b1b1b] h-[50px] !w-[500px] mt-2 rounded"></div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
