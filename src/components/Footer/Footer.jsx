import React from "react";
import FbIcon from '../../assets/social/fb.png';
import TwIcon from '../../assets/social/fw.png';
import InIcon from '../../assets/social/ins.png';
const Footer = () => {
  return (
    <footer className="bg-black mt-40">

      <div className="container py-24">
       <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-gray-400">

        <div className="col-span-2">
          <h2 className="text-gray-200 font-bold text-2xl tracking-wider mb-6">CareerMaker</h2>
          <p className="lg:w-3/4 mb-3">We are <strong>CareerMaker</strong> the company that always try to provide better job opportunity to our clients. To stay updated please subscribe to our newsletter.</p>
          <div className="mb-10">
          <img className="px-4 py-3 inline-block me-3 bg-white rounded-full" src={FbIcon} alt="" />
          <img className="px-3 py-3 inline-block me-3 bg-white rounded-full" src={TwIcon} alt="" />
          <img className="px-3 py-3 inline-block  bg-white rounded-full" src={InIcon} alt="" />
          </div>
        </div>

        <div className="">
          <h3 className="text-gray-200 font-semibold mb-6">Company</h3>
          <ul>
            <li className="mb-2">About Us</li>
             <li className="mb-2">Work</li>
             <li className="mb-2">Latest News</li>
             <li className="mb-2">Careers</li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-gray-200 font-semibold mb-6">Product</h3>
          <ul>
            <li className="mb-2">Prototype</li>
             <li className="mb-2">Plans & Pricing</li>
             <li className="mb-2">Customers</li>
             <li className="mb-2">Integrations</li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-gray-200 font-semibold mb-6">Support</h3>
          <ul>
            <li className="mb-2">Help Desk</li>
             <li className="mb-2">Sales</li>
             <li className="mb-2">Become a Partner</li>
             <li className="mb-2">Developers</li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-gray-200 font-semibold mb-6">Contact</h3>
          <ul>
            <li className="mb-2">524 Broadway , NYC</li>
             <li className="mb-2">+1 777 - 978 - 5570</li>
            
          </ul>
        </div>

       </div>
       <hr className="border-gray-600 mb-5 lg:mb-10" />

       <div className="flex items-center justify-between">
        <p className="text-gray-600">@2023 CareerMaker. All Rights Reserved</p>
        <p className="text-gray-600">Powered by CareerMaker</p>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
