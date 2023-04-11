import React from "react";
import Blog from "../Blog/Blog";
import questionImg from '../../assets/image/question.jpg'

const Blogs = () => {
  return (
    <div  className=" sm:pt-20 md:pt-36 container">
      <h2 className="font-bold text-3xl mb-10">Common Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <Blog> </Blog>
        </div>

        <div className="hidden md:block">
          <img src={questionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
