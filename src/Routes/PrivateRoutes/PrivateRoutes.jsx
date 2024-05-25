import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
        );
    }
    if(user){
        return children;
    }

    return <Navigate to = "/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;