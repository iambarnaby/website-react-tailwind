import React, { useRef } from "react";
import ContactForm from "./ContactFormComponent/ContactForm";

const ContactFooter = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("barnaby.payne@protonmail.com");
    document.getElementById("email-copied").style.opacity = "1";
    document.getElementById("email-copied").style.marginLeft = "280px";
  };
  return (
    <div className="grid grid-cols-[1fr_2fr] bg-[#2c2c2c] h-[470px] pl-[150px] pt-[20px]">
      <ContactForm />
      <div>
        <div className=" text-size28 text-yellow-500 ">Get in touch</div>
        <div className="text-white w-[700px]">
          Feel free to send me a message using the form on the left. Your
          message will be sent with one of my fastest owls. I will respond
          within 24 hours.
          <div className="mt-[50px]">Prefer to email directly?</div>
        </div>
        <div className="children:text-white ">
          <div>
            <button
              onClick={copyEmailToClipboard}
              className="absolute bg-yellow-400 p-2 text-[#2c2c2c] font-bold rounded z-20 hover:translate-y-[-0.25rem] transition-all active:translate-y-1"
            >
              barnaby.payne@protonmail.com
            </button>
            <div className="absolute bg-[#131313] h-10 mt-2 p-2 font-bold rounded text-[#131313]">
              barnaby.payne@protonmail.com
            </div>
            <div
              id="email-copied"
              className=" opacity-0 !text-green-600 transition-all  p-2 mt-1"
            >
              Copied! :)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
