import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    const {
        job_title
        , job_description, job_responsibility
        , educational_requirements,
        experiences, salary, contact_information
    } = job;

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
                    <p className="text-white bg-blue-500 text-center bg-white border-2 p-2 
                    rounded-xl m-4
            ">Apply Now</p>
                </div>
            </div>

        </>

    );
};

export default JobDetails;