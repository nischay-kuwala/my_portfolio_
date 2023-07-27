import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { IoGlobeOutline } from "react-icons/io5";
function Project() {
  return (
    <>
      <div className="w-full h-full px-16 mt-32" id="project">
        <div className="flex flex-col items-center">
          <div className="font-mono text-5xl font-extrabold ">
            MY Recent Work
          </div>
          <div className="mt-4 text-xl font-semibold">
            Here are a few past projects I've worked on. Want to see more?
            <a
              href="https://github.com/nischay-kuwala?tab=repositories"
              className="ml-2 font-semibold text-blue-700 hover:underline hover:font-bold"
            >
              Checkout Github
            </a>
          </div>
        </div>
        <div className="my-6 border-4 border-black lg:w-3/4 rounded-xl">
          <div className="flex flex-row ">
            <img
              className="flex justify-end w-1/2 h-48 m-4 duration-300 border-4 border-gray-700 rounded-3xl hover:-translate-y-1 hover:scale-90"
              src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg"
            />

            <div className="flex flex-col justify-center w-2/5">
              <div className="font-serif text-2xl font-bold">Trend shop</div>
              <div className="flex flex-wrap justify-center w-full border-4 border-black lg:mx-8 rounded-2xl">
                <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                  Tailwind CSS
                </div>
                <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                  React.js
                </div>
                <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                  Postman API
                </div>
              </div>
              <div className="flex mt-4 border-4 border-black rounded-2xl justify-evenly lg:mx-8">
                <a
                  href="https://github.com/nischay-kuwala/trend-shop"
                  target="_blank"
                  className="flex items-center px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl"
                >
                  GITHUB <VscGithubInverted className="ml-1 " />
                </a>
                <a
                  href="https://trend-shop.netlify.app/"
                  target="_blank"
                  className="flex items-center px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl"
                >
                  LIVE
                  <IoGlobeOutline className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="h-full my-6 border-4 border-black lg:w-3/4 rounded-xl">
            <div className="flex flex-row">
              <img
                className="w-1/2 h-48 m-4 duration-300 border-4 border-gray-700 rounded-3xl hover:-translate-y-1 hover:scale-90"
                src="https://cdn.discordapp.com/attachments/1001501223750479953/1134003238996279407/istockphoto-1374486343-612x612.jpg"
              />

              <div className="flex flex-col justify-center w-2/5">
                <div className="font-serif text-2xl font-bold">TODO APP</div>
                <div className="flex flex-wrap justify-center w-full border-4 border-black lg:mx-8 rounded-2xl">
                  <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                    Tailwind CSS
                  </div>
                  <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                    React.js
                  </div>
                  <div className="px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl">
                    HTML5
                  </div>
                </div>
                <div className="flex mt-4 border-4 border-black rounded-2xl justify-evenly lg:mx-8">
                  <a
                    href="https://github.com/nischay-kuwala/todoapp"
                    target="_blank"
                    className="flex items-center px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl"
                  >
                    GITHUB <VscGithubInverted className="ml-1 " />
                  </a>
                  <a
                    href="https://dummy-web-todo.netlify.app/"
                    target="_blank"
                    className="flex items-center px-2 m-2 font-semibold border-4 border-green-400 w-fit hover:bg-green-400 rounded-2xl"
                  >
                    LIVE
                    <IoGlobeOutline className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
