import React from "react";
import LocationIcon from "../../assets/icons/job/location.png";
import MoneyIcon from "../../assets/icons/job/money.png";
const AllJobs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Jobs</h1>
      <p className="text-center text-gray-500 mx-auto my-5 lg:w-8/12">
        Top jobs for you that can change your life. Grew up you career here.
      </p>

      <div className="grid pt-5 gap-4 grid-cols-2 ">
        <div className="border p-6 rounded-lg">
          <img
            className="mb-5"
            src="https://i.ibb.co/Ny3QVCh/google.png"
            alt=""
          />
          <h3 className="text-xl text-gray-700 font-bold">
            Technical Database Engineer
          </h3>
          <p className="text-gray-500 font-bold mt-1 mb-3">Google LLC</p>
          <button className="btn-custom me-3">Remote</button>{" "}
          <button className="btn-custom">Full Time</button>
          <div className="mt-4 mb-5 text-gray-600">
            <span className="me-5">
              {" "}
              <img className="inline" src={LocationIcon} alt="" /> Dhaka,
              Bangladesh
            </span>

            <span>
              {" "}
              <img className="inline" src={MoneyIcon} alt="" /> Salary : 100K -
              150K
            </span>
          </div>
          <button className="btn-primary mb-3">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
