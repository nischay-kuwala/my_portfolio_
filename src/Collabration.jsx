import React from "react";
import { MdOutlineMessage } from "react-icons/md";
function Collabration() {
  return (
    <>
      <div className="my-16 item-center">
        <div className="flex justify-center">
          <img className=" w-fit" src="./dogGif.gif" />
        </div>
        <div className="mb-6 text-4xl font-bold text-center">
          Interested in collaborating with me?
        </div>
        <div className="mb-4 font-semibold text-center">
          I'm always open to collaborate, discuss or partnership opportunities.
        </div>
        <div className="flex items-center justify-center w-full text-center">
          <a
            className="flex items-center p-2 mx-3 text-2xl font-semibold text-blue-600 border-2 border-gray-700 rounded-xl hover:bg-cyan-400"
            href="mailto:nischaykuwala@gmail.com"
            target="_blank"
          >
            <MdOutlineMessage className="items-center m-2 text-4xl hover:text-yellow-500 " />
            Start a Conversation
          </a>
        </div>
      </div>
    </>
  );
}
export default Collabration;
