import React from "react";

function HeroSection() {
  return (
    <div className="relative bg-green-50">
      <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
            <h1 className="font-bold text-4xl text-green-900 md:text-5xl lg:w-10/12">
              All about travel, food, and lifestyle
            </h1>

            <p className="mt-8 text-gray-700 lg:w-10/12">
              Go, Find,Explore. Keep calm and travel on.{" "}
              <a href="#" className="text-green-700">
                Feed Your
              </a>{" "}
              Wanderlust. Travelling made as easy as a walk in the park!.
            </p>
          </div>
          <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
            <img
              src="https://img.freepik.com/free-vector/travel-time-typography-design-with-travelling-objects_1308-89005.jpg"
              className="relative"
              alt="food illustration"
              loading="lazy"
              width="4500"
              height="4500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
