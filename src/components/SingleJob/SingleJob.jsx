import React from "react";
import LocationIcon from "../../assets/icons/job/location.png";
import MoneyIcon from "../../assets/icons/job/money.png";
const SingleJob = ({jobInfo}) => {
    const {companyLogo, jobTitle, companyName, jobType, jobDuration, location, salary} = jobInfo;
  return (
      <div className="border p-6 rounded-lg">
        <img
          className="mb-5 w-40"
          src={companyLogo}
         
          alt=""
        />
        <h3 className="text-xl text-gray-700 font-bold">
          {jobTitle}
        </h3>
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
            <img className="inline" src={MoneyIcon} alt="" /> Salary : {salary}
          </span>
        </div>
        <button className="btn-primary mb-3">View Details</button>
      </div>
  );
};

export default SingleJob;
