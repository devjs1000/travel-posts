import React from "react";
import Link from "next/link";
import { NavAuth } from "./NavAuth";
function Nav(){
  return (
    <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
            <Link
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <img
                src="https://cdn.dribbble.com/users/60166/screenshots/11603032/media/b5785a0b8b6bc0426e1c7a761458c731.jpg?compress=1&resize=400x300"
                className="w-12"
                alt="tailus logo"
                width="144"
                height="133"
              />
              <span className="text-2xl font-bold text-green-900">
                Travel <span className="text-green-700">Posts</span>
              </span>
            </Link>

            <button
              aria-label="humburger"
              id="hamburger"
              className="relative w-10 h-10 -mr-2 lg:hidden"
            >
              <div
                aria-hidden="true"
                id="line"
                className="inset-0 w-6 h-0.5 m-auto rounded bg-green-900 transtion duration-300"
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-green-900 transtion duration-300"
              ></div>
            </button>
          </div>

          <NavAuth />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
