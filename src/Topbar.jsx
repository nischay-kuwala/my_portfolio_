import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

function Topbar() {
  return (
    <>
      <div className="h-24 overflow-hidden" id="topbar"></div>
      <TypeAnimation
        aria-hidden="true"
        className="flex justify-center h-full my-10 font-mono text-2xl font-extrabold text-purple-800 md:text-4xl lg:text-6xl lg:my-16"
        sequence={[
          "Devloper",
          300,
          "Devloper|", //  Continuing previous Text
          300,
          "Devloper|Student",
          2000,
          "Devloper|",
          90,
          "Devloper",
          90,
          "",
          300,
        ]}
        //style={{ fontSize: "3em" }}
        repeat={Infinity}
        speed={{ type: "keyStrokeDelayInMs", value: 250 }}
        deletionSpeed={90}
      />
      <div className="flex justify-center m-2 font-mono text-2xl text-center">
        I love to code explore and helping out others
      </div>
      <div className="flex justify-center">
        <img
          className="w-72 h-72"
          src="https://cdn.discordapp.com/attachments/1001501223750479953/1130834682267836530/photo.png"
        />
      </div>
      <div className="flex justify-center my-6">
        <img src="https://cdn.discordapp.com/attachments/1001501223750479953/1130335328222322829/png-transparent-paper-window-graphic-design-structure-cartoon-computer-cartoon-character-blue-furniture-removebg-preview.png" />
      </div>
    </>
  );
}
export default Topbar;
