import { RepeatIcon } from "lucide-react";
import React from "react";
import { BsFire } from "react-icons/bs";

function Contact() {
  return (
    <>
      <div className="items-center justify-center h-full p-4 bg-indigo-900 sm:flex lg:flex-row rounded-3xl sm:py-4 ">
        <div className="mx-12 font-serif text-3xl font-extrabold text-center text-white ">
          Start a Project
        </div>
        <div className="items-center text-lg text-center text-white">
          <div>
            {" "}
            Interested in working together? We should queue up a time to chat.
          </div>
          <div className="flex justify-center"> I'll buy the coffee.</div>
        </div>
        <div className="flex justify-center w-full md:w-fit">
          <a
            className="flex p-2 mx-10 my-3 text-2xl border border-cyan-500 rounded-xl hover:bg-blue-400 hover:underline"
            href="mailto:nischaykuwala@gmail.com"
            target="_blank"
          >
            <BsFire className="m-2 hover:text-yellow-500 " />
            Let's do this
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full pt-8 bg-blue-500">
        <div className=" cursor-pointer font-[Cursive] text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">
          <span className=" font-[Fantasy] font-extrabold italic m-3 text-5xl">
            N
          </span>
          ISCHAY
        </div>
        <div className="flex flex-col justify-center mt-8 text-xl font-semibold">
          <span className="flex justify-center">
            Living, learning, & leveling up
          </span>{" "}
          <span className="flex justify-center">one day at a time</span>
        </div>
        <div className="flex mt-10 justify-evenly">
          <a
            href="https://instagram.com/kuwalanaman?igshid=ZDc4ODBmNjlmNQ=="
            target="_blank"
          >
            <div className="w-10 h-10 p-1 m-2 overflow-hidden border border-black rounded-full">
              <img
                className=" h-fit w-fit"
                src="https://cdn.discordapp.com/attachments/1001501223750479953/1132884003914010736/pngfind.com-instagram-symbol-png-381345.png"
              />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nischay-kuwala" target="_blank">
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132886331647868998/pngwing.com_2.png"
            />
          </a>
          <a href="mailto:nischaykuwala@gmail.com" target="_blank">
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132886379571970138/pngwing.com_3.png"
            />
          </a>

          <a href="https://github.com/nischay-kuwala" target="_blank">
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132885706075803698/pngwing.com.png"
            />
          </a>
          <a
            href="https://twitter.com/KuwalaNischay?t=iTJklMFct5pgdcQguJC7sw&s=09"
            target="_blank"
          >
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132886296629620766/pngwing.com_1.png"
            />
          </a>
          <a
            href="https://www.facebook.com/naman.kuwala?mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132885133641392178/pngfind.com-facebook-png-icon-262815.png"
            />
          </a>
        </div>
        <div className="mt-24 text-white ">Made with 💕 by Nischay Kuwala</div>
      </div>
    </>
  );
}
export default Contact;
