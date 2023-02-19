"use client";
import React from "react";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

export function NavAuth(){
  const { status, logout } = useAuth();

  return (
    <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
      <div className="w-full space-y-2 border-green-200 lg:space-y-0 md:w-max lg:border-l">
        {status ? (
          <button
            type="button"
            title="Start buying"
            onClick={logout}
            className="w-full py-3 px-6 text-center rounded-full transition active:bg-green-200 focus:bg-green-100 sm:w-max"
          >
            logout
          </button>
        ) : (
          <>
            <button
              type="button"
              title="Start buying"
              className="w-full py-3 px-6 text-center rounded-full transition active:bg-green-200 focus:bg-green-100 sm:w-max"
            >
              <Link href={"/login"} className="block text-green-800 font-semibold text-sm">
                Sign up
              </Link>
            </button>
            <button
              type="button"
              title="Start buying"
              className="w-full py-3 px-6 text-center rounded-full transition bg-green-300 hover:bg-green-100 active:bg-green-400 focus:bg-green-300 sm:w-max"
            >
              <Link href={"/login"} className="block text-green-900 font-semibold text-sm">
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
