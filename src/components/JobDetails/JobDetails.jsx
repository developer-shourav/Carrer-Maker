import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import MoneyIcon from '../../assets/icons/detials/money.png';
import JobIcon from '../../assets/icons/detials/date.png';
import PhoneIcon from '../../assets/icons/detials/phone.png';
import EmailIcon from '../../assets/icons/detials/email.png';
import LocationIcon from '../../assets/icons/detials/location.png';

const JobDetails = () => {
     const _id = useLoaderData();
     const [jobData, setJobData] = useState({});

     useEffect( () => {
        fetch('/allJobs.json')
        .then( res => res.json())
        .then ( data => {
          const singleJobData = data.find( info => info?.id == _id)
          setJobData(singleJobData);
        })
     } , [])

     const {id, jobDescription, companyLogo, jobDuration, jobType, jobRes, jobTitle, companyName,   phone, email, location, salary, experiences, education} = jobData;

     const addToStorage = () => {
      const appliedJobs = [];

      const appliedJobsInStorage = JSON.parse(localStorage.getItem('applied-jobs'));

      if(appliedJobsInStorage){

        const newAppliedJob =  {id,jobTitle,  companyName, companyLogo, jobDuration, jobType, salary, location };
        const newTotalApplied = [...appliedJobsInStorage, newAppliedJob];
        localStorage.setItem('applied-jobs', JSON.stringify(newTotalApplied))

      }

      else{
        const newAppliedJob =  {id,jobTitle,  companyName, companyLogo, jobDuration, jobType , salary, location };
        appliedJobs.push(newAppliedJob)
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
      }

      
     }
     
    return (
        <div className='container'>
            
           <div className='py-10 mb-20 lg:py-20 bg-indigo-50 rounded-md'>
               <h1 className="text-3xl font-bold  text-center" >Job Details</h1>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">

                    {/* --------Job Description ------- */}
                    <p className='text-gray-600 leading-7 mb-5'> <span className='font-bold text-black'>Job Description: </span> {jobDescription}</p>

                    {/* --------Job Responsibility ------- */}
                    <p className='text-gray-600 leading-7 mb-5'> <span className='font-bold text-black'>Job Responsibility:</span>{jobRes}</p>

                  {/* --------Educational Requirements ------- */}
                    <p className='font-bold text-black leading-7 mb-5'>Educational Requirements:</p>
                    <p className='text-gray-600 leading-7 mb-5'>{education}</p>

                  {/* --------Experiences ------- */}
                    <p className='font-bold text-black leading-7 mb-5'>Experiences:</p>
                    <p className='text-gray-600 leading-7 mb-5'>{experiences}</p>
                </div>

                  {/* --------Details Info ------- */}
                <div className=''>
                    <div className="bg-indigo-100 px-5 py-6 mb-5 rounded-lg">
                        {/* --------Details  ------- */}
                        <p className='text-black font-bold text-lg'>Job Details</p>
                        <hr className="border-1 border-indigo-300 my-3" />

                        <p className='text-gray-600 mb-3'> <img src={MoneyIcon} className='inline-block me-1' alt="" /> <span className='font-bold '>Salary:</span> {salary} (Per Month)</p>

                        <p className='text-gray-600'> <img src={JobIcon} className='inline-block me-1' alt="" /> <span className='font-bold '>Job Title :</span>  {jobTitle} </p>

                         {/* --------Contact Info ------- */}
                        <p className='text-black font-bold text-lg mt-7'>Contact Information</p>
                        <hr className="border-1 border-indigo-300 my-3" />

                        <p className='text-gray-600 mb-3'> <img src={PhoneIcon} className='inline-block me-1' alt="" /> <span className='font-bold '>Phone:</span> {phone}</p>

                        <p className='text-gray-600 mb-3'> <img src={EmailIcon} className='inline-block me-1' alt="" /> <span className='font-bold '>Email:</span> {email}</p>

                        <p className='text-gray-600 mb-3'> <img src={LocationIcon} className='inline-block me-1' alt="" /> <span className='font-bold '>Address:</span> {location}</p>

                    </div>
                    <button onClick={ () => addToStorage()} className='btn-primary w-full'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;

