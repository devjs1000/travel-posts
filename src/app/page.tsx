import React from "react";
import MainFooter from "@/components/MainFooter";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div>
      <div className="relative w-full min-h-[80vh]">
        <Nav />
        <HeroSection />
      </div>
      <MainFooter />
    </div>
  );
};

export default Home;
