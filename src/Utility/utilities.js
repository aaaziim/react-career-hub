const getAppliedJobs = () => {
    const appliedJobs = localStorage.getItem('applied-jobs')
    if (appliedJobs) {
        return JSON.parse(appliedJobs)
    }
    return []
}


const saveJobApplication = (jobId) => {
    const storedJobApplications = getAppliedJobs();
    const exists = storedJobApplications.find(id => jobId === id);
    if (!exists) {
        storedJobApplications.push(jobId);
        localStorage.setItem('applied-jobs', JSON.stringify(storedJobApplications))
    }
}


export { getAppliedJobs, saveJobApplication }
