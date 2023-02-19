import React from "react";
import "@/app/globals.css";
const MainFooter = () => {
  return (
    <footer className="bg-white mt-10 py-8">
      <p className="text-center text-gray-500 text-sm">
        all rights reserved &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default MainFooter;
