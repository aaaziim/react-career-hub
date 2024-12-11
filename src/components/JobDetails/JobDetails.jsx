import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication, getAppliedJobs } from "../../Utility/utilities";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == id)
    const {
        job_title
        , job_description, job_responsibility
        , educational_requirements,
        experiences, salary, contact_information
    } = job;


    const successNotify = () => toast("You Applied Successfully");
    const errorNotify = () => toast("You Already Applied Jor This Job");


    const handleApplyJob = () => {
        const appliedJobs = getAppliedJobs();
        if (appliedJobs.includes(idInt)) {
            errorNotify();
        } else {
            saveJobApplication(idInt);
            successNotify();
        }
    };



    return (
        <>
            <div className="text-center bg-slate-300 text-black p-8">
                <h2 className="text-3xl text-black font-semibold my-3">Job Details</h2>
                <h2 className="text-2xl">{job_title}</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 bg-white">
                <div className="p-6 flex-1 text-gray-600">
                    <p className="text-xl my-2">
                        <span className="text-black font-semibold">Job Description: </span>{job_description}</p>
                    <p className="text-xl my-2">
                        <span className="text-black font-semibold">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-xl my-2">
                        <span className="text-black font-semibold">Educational Requirement: </span>{educational_requirements}</p>
                    <p className="text-xl my-2">
                        <span className="text-black font-semibold">Experience: </span>{experiences}</p>
                </div>
                <div>
                    <div className="bg-gray-300 p-6 rounded-xl text-gray-600 mx-4 my-4">
                        <h3 className="border-b-2 text-3xl my-2 pb-3 text-black font-semibold">Job Details</h3>

                        <p className="text-xl my-4">
                            <span className="text-black font-semibold">Salary: </span>{salary}</p>
                        <p className="text-xl my-2">
                            <span className="text-black font-semibold">Job Title: </span>{job_title}</p>
                        <h3 className="border-b-2 text-3xl my-4 pb-3 text-black font-semibold">Contact Information</h3>

                        <p className="text-xl my-4">
                            <span className="text-black font-semibold">Phone: </span>{contact_information.phone}</p>
                        <p className="text-xl my-2">
                            <span className="text-black font-semibold">Email: </span>{contact_information.email}</p>
                        <p className="text-xl my-2">
                            <span className="text-black font-semibold">Address: </span>{contact_information.address}</p>

                    </div>
                    <div className="m-4">
                        <button className="text-white bg-blue-500 text-center border-2 rounded-xl p-2 w-full "
                            onClick={handleApplyJob}>Apply Now</button>
                    </div>

                    <ToastContainer />
                </div>
            </div>

        </>

    );
};

export default JobDetails;