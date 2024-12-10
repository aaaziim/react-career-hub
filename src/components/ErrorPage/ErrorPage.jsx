import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            Oops!
            <br></br>
            <NavLink to="/">Back To Home</NavLink>
        </div>
    );
};

export default ErrorPage;