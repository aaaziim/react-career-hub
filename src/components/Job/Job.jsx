
const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="bg-gray-100 border-blue-200 text-black border-4 p-4 rounded-xl">
            <img className="w-32 my-2" src={logo} alt="" />
            <h3 className="text-2xl my-2">{job_title}</h3>
            <p className="my-4">{company_name}</p>

            <p className="my-4">
                <span className="text-blue-500 border-blue-300 bg-white border-2 p-2 rounded-xl
            ">{remote_or_onsite}</span>
                <span className="text-blue-500 border-blue-300 mx-4 bg-white border-2 p-2 rounded-xl
            ">{job_type}</span>
            </p>
            <p className="my-2">
                <span>{location}  </span>
                <span>  {salary}  </span>
            </p>
        </div>
    );
};

export default Job;