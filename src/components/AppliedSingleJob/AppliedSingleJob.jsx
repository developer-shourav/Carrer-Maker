import React from 'react';
import LocationIcon from "../../assets/icons/job/location.png";
import MoneyIcon from "../../assets/icons/job/money.png";

const AppliedSingleJob = () => {
    return (
        <div className="border my-5 flex flex-col md:flex-row justify-between md:items-center p-5 rounded-lg">
            
        <div className="flex flex-col md:flex-row  gap-6">
          <div className=" bg-indigo-50  p-10 rounded-md ">
            <img className="w-40 " src='https://i.ibb.co/gWXzWQ0/Spotify-logo-with-text-svg.png' alt="" />
          </div>
          <div className="">
          <h3 className="text-xl text-gray-700 font-bold">Technical Database Engineer</h3>
          <p className="text-gray-500 font-bold mt-1 mb-3">Google LLC</p>
          <button className="btn-custom me-3">Remote</button>{" "}
          <button className="btn-custom">Full Time</button>
          <div className="mt-4 mb-5 text-gray-600">
            <span className="me-5">
              {" "}
              <img className="inline" src={LocationIcon} alt="" /> Dhaka, Bangladesh
            </span>

            <span>
              {" "}
              <img className="inline" src={MoneyIcon} alt="" /> Salary :{" "}
              Salary : 70K - 90K
            </span>
          </div>
        </div>
        </div>

        <div className="">
          <button className="btn-primary">View Details</button>
        </div>
      </div>
    );
};

export default AppliedSingleJob;