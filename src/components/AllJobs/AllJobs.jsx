import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([]); 
    const [showAll, setShowAll] = useState(false);
     
    useEffect( () => {
        fetch('allJobs.json')
        .then( res => res.json())
        .then( data => setAllJobs(data))
    },[])



  return (
    <div className="">
      <h1 id="jobs" className="text-4xl font-bold text-center">Featured Jobs</h1>
      <p className="text-center text-gray-500 mx-auto my-5 lg:w-8/12">
        Top jobs for you that can change your life. Grew up you career here.
      </p>

      {/*---- Individual Job ---- */}
      <div className="grid pt-5 gap-4 md:grid-cols-2 ">
        
        {
          showAll ? allJobs.map( job => <SingleJob key={job?.id} jobInfo={job}> </SingleJob>) : allJobs.slice(0, 4).map( job => <SingleJob key={job?.id} jobInfo={job}> </SingleJob>) 
        }
      </div>

      
      <div className="relative">
      {
        showAll ?  <button onClick={ () => setShowAll(false)} className="btn-primary absolute w-full md:w-auto  left-0 md:left-1/2 top-5 md:top-10 "> See less</button> : <button onClick={ () => setShowAll(true)} className="btn-primary absolute w-full md:w-auto  left-0 md:left-1/2 top-5 md:top-10 "> See All Jobs</button>
      }
      </div>
      
     
    </div>
  );
};

export default AllJobs;

