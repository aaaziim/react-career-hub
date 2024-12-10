import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";
import "./FeaturedJobs.css"
const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Featured Jobs : {jobs.length}</h2>
                <p className="text-center py-4">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className="featuredJobsContainer">
                {jobs.map(job => <Job
                    key={job.id} job={job}
                ></Job>)}
            </div>
        </div>
    );
};

export default FeaturedJobs;