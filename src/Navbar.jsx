import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function Navbar() {
  const [open, setopen] = useState(false);
  const [navbar, setnavbar] = useState(false);
  return (
    <>
      <div className="fixed z-0 w-full pb-4 transition duration-500 ease-in bg-purple-800 rounded-b-full">
        <div className="top-0 flex items-center justify-between h-20 pt-0 outer">
          <div className=" mx-4 cursor-pointer font-[Cursive] text-3xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
            <span className=" font-[Fantasy] font-extrabold italic mb-3 mx-3 text-5xl">
              N
            </span>
            ISCHAY
          </div>

          <div className="items-center justify-end hidden w-full h-12 px-4 sm:flex">
            <button className="mx-2 font-bold text-white hover:underline">
              <Link smooth to="#topbar">
                HOME
              </Link>
            </button>
            <button className="mx-2 font-bold text-white hover:underline">
              <Link smooth to="#project">
                PROJECTS
              </Link>
            </button>
            <button className="mx-2 font-bold text-white hover:underline">
              <Link
                to="#about"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                ABOUT
              </Link>
            </button>
            <button className="h-8 px-2 mx-4 text-xl font-bold text-white border rounded-full border-cyan-500 hover:bg-yellow-300">
              <Link to="">RESUME</Link>
            </button>
          </div>
          <div
            onClick={() => {
              setopen(!open);
              setnavbar(!navbar);
            }}
            className="mr-10 text-2xl font-bold text-white sm:hidden"
          >
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
        <div
          className={
            navbar
              ? "flex flex-col items-center justify-center text-black sm:hidden "
              : "hidden transition duration-500 ease-in"
          }
        >
          <button className="mx-2 font-bold hover:underline">
            <Link smooth to="#topbar">
              HOME
            </Link>
          </button>
          <button className="mx-2 font-bold hover:underline">
            <Link smooth to="#project">
              PROJECTS
            </Link>
          </button>
          <button className="mx-2 font-bold hover:underline">
            <Link
              to="#about"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              ABOUT
            </Link>
          </button>
          <button className="flex justify-center h-8 px-2 mx-4 text-xl font-bold border rounded-full w-fit border-cyan-500 hover:bg-yellow-300">
            <Link to="">RESUME</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
