import { NavLink } from "react-router-dom";
import model from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div >
            <div className="hero bg-base-200 h-1/3 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={model}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer</h1>
                        <p className="text-3xl py-6">
                            to get your dream job.
                        </p>
                        <NavLink className="btn btn-primary" to="/jobs">Apply Now!</NavLink>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;