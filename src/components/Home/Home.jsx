import React from "react";
import HeroArea from "../HeroArea/HeroArea";
import JobCategories from "../JobCategories/JobCategories";
import AllJobs from "../AllJobs/AllJobs";
const Home = () => {
  return (
    <div className="container  pt-5">
      {/*-------- Hero area ----- */}
      <HeroArea> </HeroArea>

      {/*-------- Job Category area ----- */}
      <JobCategories> </JobCategories>

      {/*-------- All Jobs Section  ----- */}
      <AllJobs> </AllJobs>
    </div>
  );
};

export default Home;
