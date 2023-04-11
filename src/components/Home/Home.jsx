import React from "react";
import HeroArea from "../HeroArea/HeroArea";
import JobCategories from "../JobCategories/JobCategories";
const Home = () => {
  return (
    <div className="container  pt-5">
      {/*-------- Hero area ----- */}
      <HeroArea> </HeroArea>

      {/*-------- Job Category area ----- */}
      <JobCategories> </JobCategories>

      <div>
        <h1>Featured Jobs</h1>
      </div>
    </div>
  );
};

export default Home;
