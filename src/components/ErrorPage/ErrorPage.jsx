import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import ErrorImg from '../../assets/errorImg/404.gif';



const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='container text-center'>
         <img className='text-center inline-block w-40 md:w-auto my-5' src={ErrorImg} alt="" />
        <h1 className='text-2xl md:text-3xl font-bold text-red-700'><i>Page {error.statusText || error.message}</i></h1>
        <p className='text-red-700'>{error.data}</p>
        <button className='btn-primary my-5'><Link to='/'>Back To Home</Link></button>
      </div>
    );
};

export default ErrorPage;