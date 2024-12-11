import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../Utility/utilities";
import Job from "../Job/Job"

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getAppliedJobs();
        if (jobs.length > 0) {
            const storedAppliedJobs = jobs.filter(job => storedJobIds.includes(job.id));
            setJobsApplied(storedAppliedJobs);
            setDisplayJobs(storedAppliedJobs)
        }
    }, [jobs])

    const handleJobsFilter = filter => {
        if (filter === "All") {
            const filteredJobs = jobsApplied;
            setDisplayJobs(filteredJobs);
        } else if (filter === "Remote") {
            const filteredJobs = jobsApplied.filter(job => job.remote_or_onsite === filter)
            setDisplayJobs(filteredJobs)
        } else if (filter === 'Onsite') {
            const filteredJobs = jobsApplied.filter(job => job.remote_or_onsite === filter)
            setDisplayJobs(filteredJobs)
        }
    }

    return (
        <>
            <div className="text-center bg-slate-300 text-black p-8">
                <h2 className="text-3xl text-black font-semibold my-3">Applied Jobs : {jobsApplied.length}</h2>
            </div>

            <div className="m-4 p-4">
                <div className="flex justify-end">
                    <details className="dropdown ">
                        <summary className=" btn m-1">Filter</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow ">
                            <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('Onsite')}> <a>Onsite</a></li>
                        </ul>
                    </details >
                </div>
                {displayJobs.map(job => <Job key={job.id} job={job}></Job>)}
            </div>



        </>
    );
};

export default AppliedJobs;