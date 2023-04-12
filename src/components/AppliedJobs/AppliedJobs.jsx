import React from "react";
import AppliedSingleJob from "../AppliedSingleJob/AppliedSingleJob";
import { useLoaderData } from "react-router-dom";
const AppliedJobs = () => {

    const jobsApplied = useLoaderData();
  return (
    <div className="container">
      <div className="py-10 mb-20 lg:py-20 bg-indigo-50 rounded-md">
        <h1 className="text-3xl font-bold  text-center">Applied Jobs</h1>
      </div>

      <div className="my-20">

       {
        jobsApplied?.map( job => <AppliedSingleJob key={job.index} jobInfo = {job}> </AppliedSingleJob>)
       }

        
      </div>
    </div>
  );
};

export default AppliedJobs;
