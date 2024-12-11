import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./components/Root/Root.jsx"
import Home from "./components/Home/Home.jsx"
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Statistics from "./components/Statistics/Statistics.jsx"
import Jobs from "./components/Jobs/Jobs.jsx"
import Blogs from "./components/Blogs/Blogs.jsx"
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/applied",
        loader: () => fetch("../public/jobs.json"),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        loader: () => fetch('../public/jobs.json'),
        element: <JobDetails></JobDetails>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
