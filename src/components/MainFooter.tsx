import React from "react";

const MainFooter = () => {
  return (
    <>
      <footer className="relative bg-greenGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <hr className="my-6 border-greenGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-greenGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  className="text-greenGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  travios
                </a>
                <a className="text-greenGray-500 hover:text-greenGray-800">
                  Travel Posts
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
