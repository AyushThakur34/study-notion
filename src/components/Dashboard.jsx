import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = ()=> {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=> {
        if(location.state?.loggedIn) {
            toast.success("Logged in!");
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location]);

    return (
        <div>
            <div className="text-white flex items-center justify-center mt-[20%] text-4xl font-bold">
                <p>Welcome to StudyNotion !</p>
            </div>
        </div>
    )
}

export default Dashboard;