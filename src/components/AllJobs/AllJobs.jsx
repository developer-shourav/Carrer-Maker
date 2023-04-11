import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([]);
     
    useEffect( () => {
        fetch('allJobs.json')
        .then( res => res.json())
        .then( data => setAllJobs(data))
    },[])

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Jobs</h1>
      <p className="text-center text-gray-500 mx-auto my-5 lg:w-8/12">
        Top jobs for you that can change your life. Grew up you career here.
      </p>

      {/*---- Individual Job ---- */}
      <div className="grid pt-5 gap-4 grid-cols-2 ">
        {
            allJobs?.map( job => <SingleJob key={job?.id} jobInfo={job}> </SingleJob>)
        }
      </div>
      
     
    </div>
  );
};

export default AllJobs;
