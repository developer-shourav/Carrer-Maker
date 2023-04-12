import { useState } from "react";
import AppliedSingleJob from "../AppliedSingleJob/AppliedSingleJob";
import { useLoaderData } from "react-router-dom";
const AppliedJobs = () => {
  const jobsApplied = useLoaderData();
  const [sortedAppliedJobs, setSortedAppliedJobs] = useState(jobsApplied);

  const handleChange = (e) => {
    const value = e.target.value;
    if( value == 'Onsite'){
      const allOnsiteJobs = jobsApplied?.filter ( job => job?.jobType == value);
      setSortedAppliedJobs(allOnsiteJobs);
    }

    else if( value == 'Remote'){
      const allOnsiteJobs = jobsApplied?.filter ( job => job?.jobType == value);
      setSortedAppliedJobs(allOnsiteJobs);
    }

    else if( value == 'Full Time'){
      const allOnsiteJobs = jobsApplied?.filter ( job => job?.jobDuration == value);
      setSortedAppliedJobs(allOnsiteJobs);
    }

    else if( value == 'Part Time'){
      const allOnsiteJobs = jobsApplied?.filter ( job => job?.jobDuration == value);
      setSortedAppliedJobs(allOnsiteJobs);
    }

    else if( value == 'Hybrid'){
      setSortedAppliedJobs(jobsApplied);
    }

    else{
      setSortedAppliedJobs(jobsApplied);
    }
  };


  return (
    <div className="container">
      {
       jobsApplied && <div className="py-10 mb-20 lg:py-20 bg-indigo-50 rounded-md">
        <h1 className="text-3xl font-bold  text-center">
          Total Applied Jobs : {jobsApplied?.length}
        </h1>
      </div>
      }

      <div className="my-20">
        { jobsApplied &&
          <div className="float-right mb-3">
          <span className=" md:text-lg font-bold me-2">Filter By : </span>
          <select
            onChange={handleChange}
            className=" select select-primary "
          >
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        }

        {
          !jobsApplied && <div ><p className="text-center text-3xl  lg:text-4xl font-bold text-gray-400 mt-10"> No jobs have been applied for yet</p></div>
        }

        {sortedAppliedJobs?.map((job) => (
          <AppliedSingleJob key={job?.id} jobInfo={job}>
            {" "}
          </AppliedSingleJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
