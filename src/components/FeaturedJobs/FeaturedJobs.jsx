import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div className="p-10">
            <div>
                <h2 className="text-5xl text-center">Featured Jobs : {jobs.length}</h2>
                <p className="text-center py-4">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
                {jobs.slice(0, dataLength).map(job => <Job
                    key={job.id} job={job}
                ></Job>)}
            </div>
            <div className="my-4">

                {dataLength !== jobs.length && <button className="text-blue-500 border-blue-300  bg-white border-2 p-2 rounded-xl
            " onClick={() => setDataLength(jobs.length)}>Show All Jobs</button>}

            </div>
        </div>
    );
};

export default FeaturedJobs;