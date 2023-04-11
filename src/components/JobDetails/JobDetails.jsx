import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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

     console.log(jobData);
     
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default JobDetails;