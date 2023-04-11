import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
const JobCategories = () => {
    const [ categories, setCategories] = useState([]);

    useEffect( () => {
      fetch('categories.json')
      .then( res => res.json())
      .then( data => setCategories(data))
    }, [])
  return (
    <>
      <div className="my-10 py-10">
        <h1 className="text-4xl font-bold text-center">Job Category List</h1>
        <p className="text-center mx-auto my-5 lg:w-8/12">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className=" ps-10 mx-auto my-20 grid grid-cols-2  lg:grid-cols-4">
          {
            categories?.map( category => <Category key={category?.id} items ={category}> </Category>)
          }
        </div>
      </div>
    </>
  );
};

export default JobCategories;
