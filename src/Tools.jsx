import React from "react";
function Tools() {
  return (
    <>
      <div className="flex flex-col p-6 mx-4 my-6 shadow-2xl shadow-black lg:mx-40 h-4/5 rounded-3xl md:flex-row sm:flex-row md:justify-center sm:justify-center">
        <div className="flex flex-col items-center justify-center font-mono text-3xl font-extrabold lg:w-1/2 ">
          <img
            className="h-14 w-14"
            src="https://cdn.icon-icons.com/icons2/72/PNG/256/next_arrow_14422.png"
          ></img>
          <div className="flex items-center justify-center w-full text-center">
            {" "}
            Tools & technologies
          </div>
        </div>
        <div className="p-3 shadow-2xl lg:m-4 lg:w-1/2 shadow-lime-300 h-72 hover:filter-none">
          <div className="flex flex-row justify-evenly ">
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w1.pngwing.com/pngs/951/574/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/792/780/png-transparent-python-computer-icons-tutorial-computer-programming-social-icons-miscellaneous-angle-text-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue-thumbnail.png"
              />
            </div>
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/66/60/png-transparent-web-development-cascading-style-sheets-css3-computer-icons-css-miscellaneous-blue-angle-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/5/56/png-transparent-website-development-html5-logo-world-wide-web-consortium-world-wide-web-angle-web-design-text-thumbnail.png"
              />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="w-10 h-10 "
                src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
              />
            </div>
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex items-center justify-center w-20 h-20 border border-white shadow-lg shadow-yellow-300 hover:bg-cyan-200">
              <img
                className="h-14 w-14 "
                src="https://w7.pngwing.com/pngs/354/683/png-transparent-logo-mysql-database-phpmyadmin-oracle-sql-logo-blue-text-logo-thumbnail.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
