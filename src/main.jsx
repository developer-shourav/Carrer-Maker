import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './Layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
   {
    path:'/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
      {
       path:'/',
       element:<div className='w-11/12 mx-auto md:w-full'><Home> </Home></div>,

      },
      {
       path:'home',
       element:<div className='w-11/12 mx-auto md:w-full'><Home> </Home></div>,

      },
      {
       path:'statistics',
       element:<div className='w-11/12 mx-auto md:w-full'><Statistics> </Statistics></div>,

      },
      {
       path:'applied',
       element:<div className='w-11/12 mx-auto md:w-full'><AppliedJobs> </AppliedJobs></div>,

      },
      {
       path:'blog',
       element:<div className='w-11/12 mx-auto md:w-full'><Blog> </Blog></div>,

      },
    ]

   },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
