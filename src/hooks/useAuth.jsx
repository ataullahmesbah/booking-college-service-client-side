import { useContext } from "react";
import { AuthContext } from "../Pages/Shared/Providers/AuthProviders";




const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;