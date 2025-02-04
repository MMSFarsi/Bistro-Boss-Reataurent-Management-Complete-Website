import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider"
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56 "></progress>
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={{from:location}}replace></Navigate>
}

export default PrivateRoute