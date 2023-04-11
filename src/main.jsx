import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './Layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blogs from './components/Blogs/Blogs'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
   {
    path:'/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
      {
       path:'/',
       element:<Home> </Home>,

      },
      {
       path:'home',
       element:<Home> </Home>,

      },

      {
       path:'jobDetails/:jobId',
       element:<JobDetails> </JobDetails>,
       loader: ({params}) => params.jobId,

      },

      {
       path:'statistics',
       element:<Statistics> </Statistics>,

      },
      {
       path:'applied',
       element:<AppliedJobs> </AppliedJobs>,

      },
      {
       path:'blogs',
       element:<Blogs> </Blogs>,

      },
    ]

   },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
