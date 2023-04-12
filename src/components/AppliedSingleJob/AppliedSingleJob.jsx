import React from 'react';
import LocationIcon from "../../assets/icons/job/location.png";
import MoneyIcon from "../../assets/icons/job/money.png";
import { Link } from 'react-router-dom';

const AppliedSingleJob = ({jobInfo}) => {
  const {id, jobTitle, companyName, companyLogo, jobDuration, jobType, location, salary} = jobInfo
    return (
        <div className="border my-5 flex flex-col md:flex-row justify-between md:items-center p-5 rounded-lg">
            
        <div className="flex flex-col md:flex-row  gap-6">
          <div className=" bg-indigo-50  p-10 rounded-md ">
            <img className="w-40 " src={companyLogo} alt="" />
          </div>
          <div className="">
          <h3 className="text-xl text-gray-700 font-bold">{jobTitle}</h3>
          <p className="text-gray-500 font-bold mt-1 mb-3">{companyName}</p>
          <button className="btn-custom me-3">{jobType}</button>{" "}
          <button className="btn-custom">{jobDuration}</button>
          <div className="mt-4 mb-5 text-gray-600">
            <span className="me-5">
              {" "}
              <img className="inline" src={LocationIcon} alt="" /> {location}
            </span>

            <span>
              {" "}
              <img className="inline" src={MoneyIcon} alt="" /> Salary :{" "}
             {salary}
            </span>
          </div>
        </div>
        </div>

        <div className="">
        <Link to={`/jobDetails/${id}`} ><button className="btn-primary mb-3">View Details</button></Link>
        </div>
      </div>
    );
};

export default AppliedSingleJob;