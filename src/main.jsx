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
       element:<Home> </Home>,

      },
      {
       path:'home',
       element:<Home> </Home>,

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
       path:'blog',
       element:<Blog> </Blog>,

      },
    ]

   },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
