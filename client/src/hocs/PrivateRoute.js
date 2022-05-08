import { Navigate } from "react-router-dom";
import { getLoginStatus } from "../store/login/selectors";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const isAuthorised = useSelector((state) => getLoginStatus(state));
    return isAuthorised ? children : <Navigate to='/login' />;
}