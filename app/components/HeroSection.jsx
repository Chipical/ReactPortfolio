"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Scott",
                1000,
                "A Web Developer",
                1000,
                "A Computer Scientist",
                1000,
                "A Teacher",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 text-black bg-gradient-to-br from-blue-700 via-green-400 to-blue-700">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-400 text-white bg-gradient-to-br from-blue-700 via-green-300 to-blue-700">
              <span className="block bg-gray-950 hover:bg-slate-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gray-700 lg:w-[400px] lg:h-[400px]  w-[250px] h-[250px] relative">
            <Image
              src="/images/hero/meicon.png"
              alt="me"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
