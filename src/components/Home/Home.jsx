import React from "react";
import HeroImg from '../../assets/image/hero.png';

const Home = () => {
  return (
    <div className="container  pt-5">

      <div className="flex flex-col md:flex-row justify-end items-center  mt-5 gap-4">

        {/* Hero Text  section*/}
        <div className="">
            <h1 className="text-6xl font-bold hero-line-height text-black">One Step <br/> Closer To Your <br/> <span className="text-purple-400">Dream Job</span> </h1>

            <p className="my-5 md:w-2/3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

            <button className="btn-primary ">Get Started</button>
        </div>

        {/* Hero image section */}
        <div className="">
          <img src={HeroImg} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Home;
