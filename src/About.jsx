import React from "react";
function About() {
  console.log("about page khul gya");
  return (
    <>
      <div
        className="flex flex-col justify-center h-full py-6 mx-8 mb-8 text-center bg-blue-500 rounded-xl"
        id="about"
      >
        <h4 className="flex justify-center m-8 font-serif text-4xl ">
          Hi, I'm Nischay Kuwala. Nice to meet you.
        </h4>
        <h3 className="flex justify-center text-xl font-bold ">
          Currently a student, BCA Sophomore at AGI, Haldwani, Uttrakhand.
        </h3>

        <h3 className="flex justify-center text-xl font-bold ">
          devloping scalable frontend using HTML , CSS and React.js.
        </h3>

        <h3 className="flex justify-center text-xl font-bold ">
          Automating workflows, managing cloud clusters
        </h3>

        <h3 className="flex justify-center text-xl font-bold ">
          open for collaborations, holding worthy internship and project
          experiences.
        </h3>

        <h3 className="flex justify-center text-xl font-bold ">
          loves to code (obviously), Exploring new places (a lot sometimes),
          being creative.
        </h3>
      </div>
    </>
  );
}
export default About;
