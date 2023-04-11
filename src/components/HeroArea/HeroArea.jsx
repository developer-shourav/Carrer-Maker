import React from "react";
import HeroImg from '../../assets/image/hero.png';
const HeroArea = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-end items-center  mt-5 gap-4">
        {/* Hero Text  section*/}
        <div className="">
          <h1 className="text-6xl font-bold hero-line-height text-black">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-indigo-400">Dream Job</span>{" "}
          </h1>

          <p className="my-5 md:w-2/3">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <button className="btn-primary "><a href="#jobs">Get Started</a></button>
        </div>

        {/* Hero image section */}
        <div className="">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
